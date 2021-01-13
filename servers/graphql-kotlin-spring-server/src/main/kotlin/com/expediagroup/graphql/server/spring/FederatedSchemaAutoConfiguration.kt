/*
 * Copyright 2021 Expedia, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.expediagroup.graphql.server.spring

import com.expediagroup.graphql.generator.TopLevelNames
import com.expediagroup.graphql.generator.execution.KotlinDataFetcherFactoryProvider
import com.expediagroup.graphql.generator.extensions.print
import com.expediagroup.graphql.generator.federation.FederatedSchemaGeneratorConfig
import com.expediagroup.graphql.generator.federation.FederatedSchemaGeneratorHooks
import com.expediagroup.graphql.generator.federation.execution.FederatedTypeResolver
import com.expediagroup.graphql.generator.federation.toFederatedSchema
import com.expediagroup.graphql.server.spring.extensions.toTopLevelObjects
import com.expediagroup.graphql.types.operations.Mutation
import com.expediagroup.graphql.types.operations.Query
import com.expediagroup.graphql.types.operations.Subscription
import graphql.schema.GraphQLSchema
import org.slf4j.LoggerFactory
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import
import java.util.Optional

/**
 * SpringBoot autoconfiguration for generating federated GraphQL schema object.
 * These will override the beans in [NonFederatedSchemaAutoConfiguration] if federation is enabled.
 */
@ConditionalOnProperty(value = ["graphql.federation.enabled"], havingValue = "true")
@Configuration
@Import(GraphQLExecutionConfiguration::class)
class FederatedSchemaAutoConfiguration {

    private val logger = LoggerFactory.getLogger(FederatedSchemaAutoConfiguration::class.java)

    @Bean
    @ConditionalOnMissingBean
    fun federatedSchemaGeneratorHooks(resolvers: Optional<List<FederatedTypeResolver<*>>>): FederatedSchemaGeneratorHooks =
        FederatedSchemaGeneratorHooks(resolvers.orElse(emptyList()))

    @Bean
    @ConditionalOnMissingBean
    fun federatedSchemaConfig(
        config: GraphQLConfigurationProperties,
        hooks: FederatedSchemaGeneratorHooks,
        topLevelNames: Optional<TopLevelNames>,
        dataFetcherFactoryProvider: KotlinDataFetcherFactoryProvider
    ): FederatedSchemaGeneratorConfig = FederatedSchemaGeneratorConfig(
        supportedPackages = config.packages,
        topLevelNames = topLevelNames.orElse(TopLevelNames()),
        hooks = hooks,
        dataFetcherFactoryProvider = dataFetcherFactoryProvider,
        introspectionEnabled = config.introspection.enabled
    )

    @Bean
    @ConditionalOnMissingBean
    fun schema(
        queries: Optional<List<Query>>,
        mutations: Optional<List<Mutation>>,
        subscriptions: Optional<List<Subscription>>,
        schemaConfig: FederatedSchemaGeneratorConfig
    ): GraphQLSchema {
        val schema = toFederatedSchema(
            config = schemaConfig,
            queries = queries.orElse(emptyList()).toTopLevelObjects(),
            mutations = mutations.orElse(emptyList()).toTopLevelObjects(),
            subscriptions = subscriptions.orElse(emptyList()).toTopLevelObjects()
        )

        logger.info("\n${schema.print()}")

        return schema
    }
}
