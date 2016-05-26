(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-zookeeper","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},"1wiC":function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return o})),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a("8o2o"),r=(a("q1tI"),a("7ljp")),i=a("xCMr"),o="Logging contextual information",c={},s={pageTitle:o,_frontmatter:c},p=i.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(p,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"logging-contextual-information",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h1"},{href:"#logging-contextual-information","aria-label":"logging contextual information permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Logging contextual information"),Object(r.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object.assign({parentName:"p"},{href:"#built-in-properties"}),"Built-in properties"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object.assign({parentName:"p"},{href:"#http-request-and-response-headers"}),"HTTP request and response headers"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object.assign({parentName:"p"},{href:"#custom-attributes"}),"Custom attributes")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"#using-an-alternative-string-converter-for-a-custom-attribute"}),"Using an alternative string converter for a custom attribute")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object.assign({parentName:"p"},{href:"#customizing-mdc-keys"}),"Customizing MDC keys")))),Object(r.b)("p",null,"With Armeria's ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://logback.qos.ch/"}),"Logback")," integration, you can log the properties of the\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext")," of the request being handled. ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContextExportingAppender:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logback/RequestContextExportingAppender.html"}),"type://RequestContextExportingAppender")," is\na Logback appender that exports the properties of the current ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext")," to\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://logback.qos.ch/manual/mdc.html"}),"MDC")," (mapped diagnostic context)."),Object(r.b)("p",null,"For example, the following configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n  <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">\n    <encoder>\n      <pattern>%d{HH:mm:ss.SSS} %X{remote.ip} %X{tls.cipher}\n               %X{req.headers.user-agent} %X{attrs.some_value} %msg%n</pattern>\n    </encoder>\n  </appender>\n\n  <appender name="RCEA" class="com.linecorp.armeria.common.logback.RequestContextExportingAppender">\n    <appender-ref ref="CONSOLE" />\n    <export>remote.ip</export>\n    <export>tls.cipher</export>\n    <export>req.headers.user-agent</export>\n    <export>attrs.some_value:com.example.AttrKeys#SOME_KEY</export>\n    \x3c!-- ... or alternatively:\n    <exports>remote.ip, remote.port, tls.cipher,\n             req.headers.user-agent,\n             attrs.some_value:com.example.AttrKeys#SOME_KEY</exports>\n    --\x3e\n    \x3c!-- ... or with wildcard:\n    <export>req.*</export>\n    --\x3e\n    \x3c!-- ... or with custom MDC key:\n    <export>remote_id=remote.id</export>\n    <export>UA=req.headers.user-agent</export>\n    <export>some_value=attr:com.example.AttrKeys#SOME_KEY</export>\n    --\x3e\n  </appender>\n  ...\n</configuration>\n')),Object(r.b)("p",null,"will define an appender called ",Object(r.b)("inlineCode",{parentName:"p"},"RCEA")," which exports the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"remote.ip"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the IP address of the remote peer,"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tls.cipher"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the SSL/TLS cipher suite of the connection,"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"req.headers.user-agent"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"the user agent of the client,"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"attrs.some_value"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"a custom attribute set via ",Object(r.b)("inlineCode",{parentName:"li"},'RequestContext.setAttr(AttributeKey.valueOf(AttrKeys.class, "SOME_KEY"), "SOME_VALUE")'))))),Object(r.b)("p",null,"... to the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://logback.qos.ch/manual/mdc.html"}),"MDC")," property map and forwards the log message to the appender ",Object(r.b)("inlineCode",{parentName:"p"},"CONSOLE"),", as defined in the\n",Object(r.b)("inlineCode",{parentName:"p"},"<appender-ref />")," element."),Object(r.b)("p",null,"There are three types of properties you can export using ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContextExportingAppender:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logback/RequestContextExportingAppender.html"}),"type://RequestContextExportingAppender"),"."),Object(r.b)("h2",{id:"built-in-properties",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#built-in-properties","aria-label":"built in properties permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Built-in properties"),Object(r.b)("p",null,"A built-in property is a common property available for most requests. See the complete list of the built-in\nproperties and their MDC keys at ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://BuiltInProperty:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logging/BuiltInProperty.html"}),"type://BuiltInProperty"),".\nYou can also use wildcard character ",Object(r.b)("inlineCode",{parentName:"p"},"*")," instead of listing all properties. For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"*"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"req.*"'))),Object(r.b)("h2",{id:"http-request-and-response-headers",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#http-request-and-response-headers","aria-label":"http request and response headers permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"HTTP request and response headers"),Object(r.b)("p",null,"When the session protocol of the current connection is HTTP, a user can export HTTP headers of the current\nrequest and response. The MDC key of the exported header is ",Object(r.b)("inlineCode",{parentName:"p"},'"req.headers.<lower-case header name>"')," or\n",Object(r.b)("inlineCode",{parentName:"p"},'"res.headers.<lower-case header name>"'),". For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"req.headers.user-agent"')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"res.headers.set-cookie"'))),Object(r.b)("h2",{id:"custom-attributes",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#custom-attributes","aria-label":"custom attributes permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Custom attributes"),Object(r.b)("p",null,"A user can attach an arbitrary custom attribute to a ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"}),"type://RequestContext")," by using\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"/docs/advanced-custom-attributes"}),"RequestContext custom attributes")," to store the information associated with the\nrequest being handled.\n",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContextExportingAppender:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logback/RequestContextExportingAppender.html"}),"type://RequestContextExportingAppender")," can export such attributes to the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://logback.qos.ch/manual/mdc.html"}),"MDC")," property map as well."),Object(r.b)("p",null,"Unlike other property types, you need to specify the full name of an attribute as well as its alias.\nFor example, if you want to export an attribute ",Object(r.b)("inlineCode",{parentName:"p"},"com.example.Foo#ATTR_BAR")," with the alias ",Object(r.b)("inlineCode",{parentName:"p"},"bar"),", you need to add\n",Object(r.b)("inlineCode",{parentName:"p"},"<export>attrs.bar:com.example.Foo#ATTR_BAR</export>")," to the XML configuration. The resulting MDC key to\naccess the attribute value is ",Object(r.b)("inlineCode",{parentName:"p"},"attrs.bar"),", which follows the form of ",Object(r.b)("inlineCode",{parentName:"p"},"attrs.<alias>"),"."),Object(r.b)("h3",{id:"using-an-alternative-string-converter-for-a-custom-attribute",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h3"},{href:"#using-an-alternative-string-converter-for-a-custom-attribute","aria-label":"using an alternative string converter for a custom attribute permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Using an alternative string converter for a custom attribute"),Object(r.b)("p",null,"By default, ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"type://RequestContextExportingAppender:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logback/RequestContextExportingAppender.html"}),"type://RequestContextExportingAppender")," uses ",Object(r.b)("inlineCode",{parentName:"p"},"Object.toString()")," to convert an attribute value\ninto an ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://logback.qos.ch/manual/mdc.html"}),"MDC")," value. If you want an alternative string representation of an attribute value, you can define\na ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," class with a public no-args constructor that transforms an attribute value into a ",Object(r.b)("inlineCode",{parentName:"p"},"String"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"package com.example;\n\npublic class SomeValue {\n    public final String value;\n\n    @Override\n    public String toString() {\n        // Too verbose for logging\n        return \"SomeValue(value=\" + value + ')';\n    }\n}\n\npublic class MyStringifier implements Function<SomeValue, String> {\n    @Override\n    public String apply(SomeValue o) {\n        return o.value;\n    }\n}\n")),Object(r.b)("p",null,"Once the ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," is implemented, specify the fully-qualified class name of the ",Object(r.b)("inlineCode",{parentName:"p"},"Function")," implementation\nas the 3rd component of the ",Object(r.b)("inlineCode",{parentName:"p"},"<export />")," element in the XML configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n  ...\n  <appender name="RCEA" class="com.linecorp.armeria.common.logback.RequestContextExportingAppender">\n    ...\n    <export>attrs.some_value:com.example.AttrKeys#SOME_KEY:com.example.MyStringifier</export>\n    ...\n  </appender>\n  ...\n</configuration>\n')),Object(r.b)("h2",{id:"customizing-mdc-keys",style:{position:"relative"}},Object(r.b)("a",Object.assign({parentName:"h2"},{href:"#customizing-mdc-keys","aria-label":"customizing mdc keys permalink",className:"anchor before"}),Object(r.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(r.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Customizing MDC keys"),Object(r.b)("p",null,"You can override the pre-defined MDC key by prepending an alias and an equals sign (=) to it.\nFor example, if you want to change ",Object(r.b)("inlineCode",{parentName:"p"},"req.id")," to ",Object(r.b)("inlineCode",{parentName:"p"},"request_id"),", use ",Object(r.b)("inlineCode",{parentName:"p"},"request_id=req.id"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n  ...\n  <appender name="RCEA" class="com.linecorp.armeria.common.logback.RequestContextExportingAppender">\n    ...\n    <export>remote_id=remote.id</export>\n    <export>UA=req.headers.user-agent</export>\n    <export>some_value=attr:com.example.AttrKeys#SOME_KEY</export>\n    ...\n  </appender>\n  ...\n</configuration>\n')),Object(r.b)("p",null,"Note that a custom MDC key cannot be used with a wildcard expression ",Object(r.b)("inlineCode",{parentName:"p"},"*")," or ",Object(r.b)("inlineCode",{parentName:"p"},"req.*"),"."))}l.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),i=a.n(r),o=a("/94A"),c=a("+ejy");t.a=function(e){var t=Object(n.useStaticQuery)("1217743243").allMdx.nodes;return i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-logging-mdx-565aed948c2a00881683.js.map