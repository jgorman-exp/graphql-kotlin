(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(7),a=(t(0),t(182)),o={id:"excluding-fields",title:"Excluding Fields",original_id:"excluding-fields"},c={unversionedId:"schema-generator/customizing-schemas/excluding-fields",id:"version-3.x.x/schema-generator/customizing-schemas/excluding-fields",isDocsHomePage:!1,title:"Excluding Fields",description:"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:",source:"@site/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/excluding-fields.md",slug:"/schema-generator/customizing-schemas/excluding-fields",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/excluding-fields",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/customizing-schemas/excluding-fields.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1619545223,sidebar:"version-3.x.x/docs",previous:{title:"Documenting Schema",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/documenting-fields"},next:{title:"Renaming Fields",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/renaming-fields"}},l=[],s={toc:l};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are two ways to ensure the GraphQL schema generation omits fields when using Kotlin reflection:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The first is by marking the field as non-",Object(a.b)("inlineCode",{parentName:"li"},"public")," scope (",Object(a.b)("inlineCode",{parentName:"li"},"private"),", ",Object(a.b)("inlineCode",{parentName:"li"},"protected"),", ",Object(a.b)("inlineCode",{parentName:"li"},"internal"),")"),Object(a.b)("li",{parentName:"ul"},"The second method is by annotating the field with ",Object(a.b)("inlineCode",{parentName:"li"},"@GraphQLIgnore"),".")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'\nclass SimpleQuery {\n  @GraphQLIgnore\n  fun notPartOfSchema() = "ignore me!"\n\n  private fun privateFunctionsAreNotVisible() = "ignored private function"\n\n  fun doSomething(value: Int): Boolean = true\n}\n\n')),Object(a.b)("p",null,"The above query would produce the following GraphQL schema:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  doSomething(value: Int!): Boolean!\n}\n\n")),Object(a.b)("p",null,"Note that the public method ",Object(a.b)("inlineCode",{parentName:"p"},"notPartOfSchema")," is not included in the schema."))}u.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return t?i.a.createElement(f,c(c({ref:n},s),{},{components:t})):i.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);