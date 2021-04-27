(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(182)),i=n(187),c=n(188),l={id:"schema-generator-getting-started",title:"Getting Started"},s={unversionedId:"schema-generator/schema-generator-getting-started",id:"schema-generator/schema-generator-getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Install",source:"@site/docs/schema-generator/schema-generator-getting-started.mdx",slug:"/schema-generator/schema-generator-getting-started",permalink:"/graphql-kotlin/docs/schema-generator/schema-generator-getting-started",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/schema-generator-getting-started.mdx",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619545223,sidebar:"docs",previous:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/blogs-and-videos"},next:{title:"Nullability",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nullability"}},u=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"<code>toSchema</code>",id:"toschema",children:[]},{value:"<code>TopLevelObject</code>",id:"toplevelobject",children:[{value:"Dynamic <code>TopLevelObject</code>",id:"dynamic-toplevelobject",children:[]}]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("p",null,"Using a JVM dependency manager, link ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to your project."),Object(o.b)(i.a,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"gradle",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-schema-generator", latestVersion)\n'))),Object(o.b)(c.a,{value:"maven",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-schema-generator</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," provides a single function, ",Object(o.b)("inlineCode",{parentName:"p"},"toSchema"),", to generate a schema from Kotlin objects."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"data class Widget(val id: Int, val value: String)\n\nclass WidgetQuery {\n  fun widgetById(id: Int): Widget? {\n    // grabs widget from a data source\n  }\n}\n\nclass WidgetMutation {\n  fun saveWidget(value: String): Widget {\n    // some logic for saving widget\n  }\n}\n\nval widgetQuery = WidgetQuery()\nval widgetMutation = WidgetMutation()\nval schema = toSchema(\n  config = yourCustomConfig(),\n  queries = listOf(TopLevelObject(widgetQuery)),\n  mutations = listOf(TopLevelObject(widgetMutation))\n)\n")),Object(o.b)("p",null,"will generate:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  widgetById(id: Int!): Widget\n}\n\ntype Mutation {\n  saveWidget(value: String!): Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n")),Object(o.b)("p",null,"Any ",Object(o.b)("inlineCode",{parentName:"p"},"public")," functions defined on a query, mutation, or subscription Kotlin class will be translated into GraphQL fields on the object\ntype. ",Object(o.b)("inlineCode",{parentName:"p"},"toSchema")," will then recursively apply Kotlin reflection on the specified classes to generate all\nremaining object types, their properties, functions, and function arguments."),Object(o.b)("p",null,"The generated ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," can then be used to expose a GraphQL API endpoint."),Object(o.b)("h2",{id:"toschema"},Object(o.b)("inlineCode",{parentName:"h2"},"toSchema")),Object(o.b)("p",null,"This function accepts four arguments: ",Object(o.b)("inlineCode",{parentName:"p"},"config"),", ",Object(o.b)("inlineCode",{parentName:"p"},"queries"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mutations")," and ",Object(o.b)("inlineCode",{parentName:"p"},"subscriptions"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"queries"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mutations"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"subscriptions")," are a list of ",Object(o.b)("inlineCode",{parentName:"p"},"TopLevelObject"),"s and will be used to generate corresponding GraphQL root types. See\nbelow on why we use this wrapper class. The ",Object(o.b)("inlineCode",{parentName:"p"},"config")," contains all the extra information you need to pass, including\ncustom hooks, supported packages, and name overrides. See the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),Object(o.b)("p",null,"You can see the definition for ",Object(o.b)("inlineCode",{parentName:"p"},"toSchema")," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/toSchema.kt"},"in the\nsource")),Object(o.b)("h2",{id:"toplevelobject"},Object(o.b)("inlineCode",{parentName:"h2"},"TopLevelObject")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"toSchema")," uses Kotlin reflection to build a GraphQL schema from given classes using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java"),"'s schema builder. We\ndon't just pass a ",Object(o.b)("inlineCode",{parentName:"p"},"KClass")," though, we have to actually pass an object, because the functions on the object are\ntransformed into the data fetchers. In most cases, a ",Object(o.b)("inlineCode",{parentName:"p"},"TopLevelObject")," can be constructed with just an object:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"class Query {\n  fun getNumber() = 1\n}\n\nval topLevelObject = TopLevelObject(Query())\n\ntoSchema(config = config, queries = listOf(topLevelObject))\n")),Object(o.b)("p",null,"In the above case, ",Object(o.b)("inlineCode",{parentName:"p"},"toSchema")," will use ",Object(o.b)("inlineCode",{parentName:"p"},"topLevelObject::class")," as the reflection target, and ",Object(o.b)("inlineCode",{parentName:"p"},"Query")," as the data fetcher\ntarget."),Object(o.b)("h3",{id:"dynamic-toplevelobject"},"Dynamic ",Object(o.b)("inlineCode",{parentName:"h3"},"TopLevelObject")),Object(o.b)("p",null,"In a lot of cases, such as with Spring AOP, the object (or bean) being used to generate a schema is a dynamic proxy. In\nthis case, ",Object(o.b)("inlineCode",{parentName:"p"},"topLevelObject::class")," is not ",Object(o.b)("inlineCode",{parentName:"p"},"Query"),", but rather a generated class that will confuse the schema generator.\nTo specify the ",Object(o.b)("inlineCode",{parentName:"p"},"KClass")," to use for reflection on a proxy, pass the class to ",Object(o.b)("inlineCode",{parentName:"p"},"TopLevelObject"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass Query {\n  fun getNumber() = 1\n}\n\nval query = getObjectFromBean()\nval customDef = TopLevelObject(query, Query::class)\n\ntoSchema(config, listOf(customDef))\n")))}b.isMDXComponent=!0},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},183:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},184:function(e,t,n){"use strict";var a=n(0),r=n(185);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},185:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},187:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(184),i=n(183),c=n(53),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(a.useState)(c),O=h[0],j=h[1],v=a.Children.toArray(e.children);if(null!=b){var y=g[b];null!=y&&y!==O&&p.some((function(e){return e.value===y}))&&j(y)}var N=function(e){j(e),null!=b&&f(b,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},188:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);