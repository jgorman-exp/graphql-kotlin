(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{182:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),c=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=c(t),b=n,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return t?r.a.createElement(m,s(s({ref:a},l),{},{components:t})):r.a.createElement(m,s({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},99:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return d})),t.d(a,"default",(function(){return c}));var n=t(3),r=t(7),o=(t(0),t(182)),i={id:"data-loaders",title:"Data Loaders"},s={unversionedId:"server/data-loaders",id:"server/data-loaders",isDocsHomePage:!1,title:"Data Loaders",description:"Data Loaders are a popular caching pattern from the JavaScript GraphQL implementation.",source:"@site/docs/server/data-loaders.md",slug:"/server/data-loaders",permalink:"/graphql-kotlin/docs/server/data-loaders",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/data-loaders.md",version:"current",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619545223,sidebar:"docs",previous:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/server/graphql-request-handler"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/server/server-subscriptions"}},d=[{value:"<code>KotlinDataLoader</code>",id:"kotlindataloader",children:[]},{value:"<code>getValueFromDataLoader</code>",id:"getvaluefromdataloader",children:[]}],l={toc:d};function c(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Data Loaders are a popular caching pattern from the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"JavaScript GraphQL implementation"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java")," provides ",Object(o.b)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/batching/"},"support for this pattern")," using the ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoader")," and ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoaderRegistry"),"."),Object(o.b)("p",null,"Since ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin")," allows you to abstract the schema generation and data fetching code, you may not even need data loaders if instead you have some persistant cache on your server."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"class User(val id: ID) {\n\n    // The friendService and userService, which have nothing to do with GraphQL,\n    // should be concerned with caching and batch calls instead of your schema classes\n    fun getFriends(): List<User> {\n        val friends: List<ID> = friendService.getFriends(id)\n        return userService.getUsers(friends)\n    }\n\n}\n")),Object(o.b)("p",null,"If you still want to use data loaders though, they are supported through the common interfaces."),Object(o.b)("h2",{id:"kotlindataloader"},Object(o.b)("inlineCode",{parentName:"h2"},"KotlinDataLoader")),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/graphql-request-handler"},"GraphQLRequestHandler")," accepts an optional ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoaderRegistryFactory")," that will be used on every request.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoaderRegistryFactory")," generates a new ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoaderRegistry")," on every request. The registry is a map of a unique data loader names to a ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoader")," object that handles the cache for an output type in your graph.\nA ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoader")," caches the types by some unique value, usually by the type id, and can handle different types of batch requests."),Object(o.b)("p",null,"To help in the registration of these various ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoaders"),", we have created a basic interface ",Object(o.b)("inlineCode",{parentName:"p"},"KotlinDataLoader"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"interface KotlinDataLoader<K, V> {\n    val dataLoaderName: String\n    fun getDataLoader(): DataLoader<K, V>\n}\n")),Object(o.b)("p",null,"This allows for library users to still have full control over the creation of the ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoader")," and its various configuraiton options,\nbut then allows common server code to handle the registration, generation on request, and execution."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader"\n    override fun getDataLoader() = DataLoader<ID, User>({ ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id -> userService.getUser(id) }\n        }\n    }, DataLoaderOptions.newOptions().setCachingEnabled(false))\n}\n\nclass FriendsDataLoader : KotlinDataLoader<ID, List<User>> {\n    override val dataLoaderName = "FriendsDataLoader"\n    override fun getDataLoader() = DataLoader<ID, List<User>> { ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id ->\n                val friends: List<ID> = friendService.getFriends(id)\n                userService.getUsers(friends)\n            }\n        }\n    }\n}\n')),Object(o.b)("h2",{id:"getvaluefromdataloader"},Object(o.b)("inlineCode",{parentName:"h2"},"getValueFromDataLoader")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," includes a helpful extension function on the ",Object(o.b)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," so that you can easily retrieve values from the data loaders in your schema code."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'class User(val id: ID) {\n\n    @GraphQLDescription("Get the users friends using data loader")\n    fun getFriends(dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<List<User>> {\n        return dataFetchingEnvironment.getValueFromDataLoader("FriendsDataLoader", id)\n    }\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Because the execution of data loaders is handled by ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java"),", which runs using ",Object(o.b)("inlineCode",{parentName:"p"},"CompletionStage"),", currently we can\nnot support ",Object(o.b)("inlineCode",{parentName:"p"},"suspend")," functions when envoking data loaders. Instead, return the ",Object(o.b)("inlineCode",{parentName:"p"},"CompletableFuture")," directly from the ",Object(o.b)("inlineCode",{parentName:"p"},"DataLoader"),"\nresponse in your schema functions. See issue ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/986"},"#986"),"."))))}c.isMDXComponent=!0}}]);