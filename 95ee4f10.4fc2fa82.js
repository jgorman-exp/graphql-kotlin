(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(182)),i={id:"framework-comparison",title:"GraphQL Frameworks Comparison"},l={unversionedId:"framework-comparison",id:"framework-comparison",isDocsHomePage:!1,title:"GraphQL Frameworks Comparison",description:"GraphQL Java",source:"@site/docs/framework-comparison.md",slug:"/framework-comparison",permalink:"/graphql-kotlin/docs/framework-comparison",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/framework-comparison.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619545223,sidebar:"docs",previous:{title:"Examples",permalink:"/graphql-kotlin/docs/examples"},next:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/blogs-and-videos"}},c=[{value:"GraphQL Java",id:"graphql-java",children:[{value:"GraphQL Java Schema",id:"graphql-java-schema",children:[]},{value:"GraphQL Kotlin Schema",id:"graphql-kotlin-schema",children:[]}]},{value:"DGS",id:"dgs",children:[{value:"Extra Features of DGS",id:"extra-features-of-dgs",children:[]},{value:"Extra Features of graphql-kotlin",id:"extra-features-of-graphql-kotlin",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"graphql-java"},"GraphQL Java"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://graphql-java.com/"},"graphql-java")," is one of the most popular JVM based GraphQL implemenations. GraphQL Kotlin is\nbuilt on top of ",Object(o.b)("inlineCode",{parentName:"p"},"grahpql-java")," as it can be easily extended with additional functionality and this implementation\nhas been used and tested by many users."),Object(o.b)("h3",{id:"graphql-java-schema"},"GraphQL Java Schema"),Object(o.b)("p",null,"The most common way to create the schema in ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java")," is to first manually write the SDL file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"schema {\n    query: Query\n}\n\ntype Query {\n    bookById(id: ID): Book\n}\n\ntype Book {\n    id: ID!\n    name: String!\n    pageCount: Int!\n    author: Author\n}\n\ntype Author {\n    id: ID!\n    firstName: String!\n    lastName: String!\n}\n")),Object(o.b)("p",null,"Then write the runtime code that matches this schema to build the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'// Internal DB class, not schema class\nclass Book(\n    val id: ID,\n    val name: String,\n    val totalPages: Int, // This needs to be renamed to pageCount\n    val authorId: ID // This is not in the schema\n)\n\n// Internal DB class, not schema class\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nclass GraphQLDataFetchers {\n    private val books: List<Book> = booksFromDB()\n    private val authors: List<Author> = authorsFromDB()\n\n    fun getBookByIdDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val bookId: String = dataFetchingEnvironment.getArgument("id")\n        return books.firstOrNull { it.id == bookId }\n    }\n\n    fun getAuthorDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return authors.firstOrNull { it.id == book.authorId }\n    }\n\n    fun getPageCountDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return book.totalPages\n    }\n}\n\nval schemaParser = SchemaParser()\nval schemaGenerator = SchemaGenerator()\nval schemaFile = loadSchema("schema.graphqls")\nval typeRegistry = schemaParser.parse(schemaFile)\nval graphQLDataFetchers = GraphQLDataFetchers()\n\nval runtimeWiring = RuntimeWiring.newRuntimeWiring()\n    .type(\n        newTypeWiring("Query")\n            .dataFetcher("bookById", graphQLDataFetchers.getBookByIdDataFetcher())\n    )\n    .type(\n        newTypeWiring("Book")\n            .dataFetcher("author", graphQLDataFetchers.getAuthorDataFetcher())\n            .dataFetcher("pageCount", graphQLDataFetchers.getPageCountDataFetcher())\n    )\n    .build()\n\n// Combine the types and runtime code together to make a schema\nval graphQLSchema: GraphQLSchema = schemaGenerator.makeExecutableSchema(typeDefinitionRegistry, runtimeWiring)\n')),Object(o.b)("p",null,"This means that there are two sources of truth for your schema and changes in either have to be reflected in both locations.\nAs your schema scales to hundreds of types and many different resolvers, it can get more difficult to track what code needs to be changed if you want to add a new field,\ndeprecate or delete an existing one, or fix a bug in the resolver code."),Object(o.b)("p",null,"These errors will hopefully be caught by your build or automated tests, but it is another layer your have to be worried about when creating your API."),Object(o.b)("h3",{id:"graphql-kotlin-schema"},"GraphQL Kotlin Schema"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," aims to simplify this process by using Kotlin reflection to generate the schema for you.\nAll you need to do is write your schema code in a Kotlin class with public functions or properties."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'private val books: List<Book> = booksFromDB()\nprivate val authors: List<Author> = authorsFromDB()\n\nclass Query {\n    fun bookById(id: ID): Book? = books.find { it.id == id }\n}\n\nclass Book(\n    val id: ID,\n    val name: String,\n    private val totalPages: Int,\n    private val authorId: ID\n) {\n    fun author(): Author? = authors.find { it.id == authorId }\n    fun pageCount(): Int = totalPages\n}\n\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nval config = SchemaGeneratorConfig(supportedPackages = "com.example")\nval queries = listOf(TopLevelObject(Query()))\nval schema: GraphQLSchema = toSchema(config, queries)\n')),Object(o.b)("p",null,"This makes changes in code directly reflect to your schema and you can still produce the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," to print and export an SDL file."),Object(o.b)("h2",{id:"dgs"},"DGS"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://netflix.github.io/dgs/"},"DGS")," is a GraphQL server framework for Spring Boot. It works with both Java and Kotlin.\nDGS is also built on top of ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java")," and implements many similar features to ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/graphql-java-kickstart/graphql-spring-boot"},"graphql-java-kickstart/graphql-spring-boot"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Auto-configuration of server routes and request handling"),Object(o.b)("li",{parentName:"ul"},"Auto-wiring of data fetchers (resolvers) to the ",Object(o.b)("inlineCode",{parentName:"li"},"GraphQLSchema")),Object(o.b)("li",{parentName:"ul"},"Apollo Federation support"),Object(o.b)("li",{parentName:"ul"},"Subscriptions support"),Object(o.b)("li",{parentName:"ul"},"Client schema-code generation")),Object(o.b)("p",null,"While both libraries do very similar things, there are some minor differences which may serve different usecases better.\nAs with open source library, you can compare and use the right tool for the job."),Object(o.b)("h3",{id:"extra-features-of-dgs"},"Extra Features of DGS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Support for a SDL-First (Schema-First) approach"),Object(o.b)("li",{parentName:"ul"},"Ability to autogenerate code stubs from the schema"),Object(o.b)("li",{parentName:"ul"},"Includes ",Object(o.b)("a",{parentName:"li",href:"https://github.com/json-path/JsonPath"},"JsonPath")," testing library"),Object(o.b)("li",{parentName:"ul"},"Build on top of Spring MVC")),Object(o.b)("h3",{id:"extra-features-of-graphql-kotlin"},"Extra Features of graphql-kotlin"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Supports code-first approach (generates schema from source code - does not require duplicate implementation of data fetchers, schema classes, and SDL files)"),Object(o.b)("li",{parentName:"ul"},"Abstract server logic can be used in any framework, e.g. Ktor"),Object(o.b)("li",{parentName:"ul"},"Reference server implementation build on top of ","[Spring Webflux]","((",Object(o.b)("a",{parentName:"li",href:"https://spring.io/reactive"},"https://spring.io/reactive"),") for a reactive server stack"),Object(o.b)("li",{parentName:"ul"},"Simple nesting of data fetchers"),Object(o.b)("li",{parentName:"ul"},"Client code generation for Ktor and Spring"),Object(o.b)("li",{parentName:"ul"},"Client plugin support for both Maven and Gradle")))}p.isMDXComponent=!0},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,b=h["".concat(i,".").concat(m)]||h[m]||u[m]||o;return a?r.a.createElement(b,l(l({ref:t},s),{},{components:a})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);