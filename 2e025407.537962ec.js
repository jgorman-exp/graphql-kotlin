(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{182:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,g=b["".concat(l,".").concat(u)]||b[u]||d[u]||i;return r?a.a.createElement(g,p(p({ref:t},c),{},{components:r})):a.a.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(182)),l={id:"spring-properties",title:"Configuration Properties",original_id:"spring-properties"},p={unversionedId:"spring-server/spring-properties",id:"version-3.x.x/spring-server/spring-properties",isDocsHomePage:!1,title:"Configuration Properties",description:"graphql-kotlin-spring-server relies on GraphQLConfigurationProperties",source:"@site/versioned_docs/version-3.x.x/spring-server/spring-properties.md",slug:"/spring-server/spring-properties",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-properties",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/spring-properties.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619545223,sidebar:"version-3.x.x/docs",previous:{title:"Automatically Created Beans",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-beans"},next:{title:"Writing Schemas with Spring",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-schema"}},o=[],c={toc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," relies on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/GraphQLConfigurationProperties.kt"},"GraphQLConfigurationProperties"),"\nto provide various customizations of the auto-configuration library. All applicable configuration properties expose ",Object(i.b)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/configuration-metadata.html"},"configuration\nmetadata")," that provide\ndetails on the supported configuration properties."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Property"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Default Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"GraphQL server endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"graphql")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.packages"),Object(i.b)("td",{parentName:"tr",align:null},"List of supported packages that can contain GraphQL schema type definitions"),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.federation.enabled"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to generate federated GraphQL model"),Object(i.b)("td",{parentName:"tr",align:null},"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.introspection.enabled"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether introspection queries are enabled"),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.playground.enabled"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to enabled Prisma Labs Playground GraphQL IDE"),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.playground.endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"Prisma Labs Playground GraphQL IDE endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"playground")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.sdl.enabled"),Object(i.b)("td",{parentName:"tr",align:null},"Boolean flag indicating whether to expose SDL endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"true")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.sdl.endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"GraphQL SDL endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"sdl")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.subscriptions.endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"GraphQL subscriptions endpoint"),Object(i.b)("td",{parentName:"tr",align:null},"subscriptions")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"graphql.subscriptions.keepAliveInterval"),Object(i.b)("td",{parentName:"tr",align:null},"Keep the websocket alive and send a message to the client every interval in ms. Defaults to not sending messages"),Object(i.b)("td",{parentName:"tr",align:null},"null")))))}s.isMDXComponent=!0}}]);