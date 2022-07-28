"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[9],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=d(n),s=r,u=k["".concat(o,".").concat(s)]||k[s]||c[s]||i;return n?a.createElement(u,p(p({ref:t},m),{},{components:n})):a.createElement(u,p({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<i;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6606:function(e,t,n){n.d(t,{z:function(){return p}});var a=n(7294),r="preview_wToN",i="img_MFLS";function p(e){var t=e.width,n=void 0===t?300:t,p=e.src,l=e.text;return a.createElement("div",{className:r,style:{width:n}},a.createElement("img",{className:i,src:p,alt:""}),a.createElement("div",null,l))}},2154:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return k}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=n(6606),l=["components"],o={title:"\u6b63\u5219\u8868\u8fbe\u5f0f"},d=void 0,m={unversionedId:"javascript/regExp",id:"javascript/regExp",title:"\u6b63\u5219\u8868\u8fbe\u5f0f",description:'\u6b63\u5219\u8868\u8fbe\u5f0f\u7684"\u975e"\uff0c\u4ee3\u8868\u4e0d\u60f3\u5339\u914d\u67d0\u4e2a\u5b57\u7b26',source:"@site/packages/docs/javascript/regExp.mdx",sourceDirName:"javascript",slug:"/javascript/regExp",permalink:"/docs/javascript/regExp",draft:!1,editUrl:"https://github.com/jonbenery/weblog/packages/docs/javascript/regExp.mdx",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1659003811,formattedLastUpdatedAt:"7/28/2022",frontMatter:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f"},sidebar:"docs",previous:{title:"setPropotype",permalink:"/docs/javascript/setPropotype"},next:{title:"Ts\u7b80\u4ecb",permalink:"/docs/typescript/tsconfig"}},c={},k=[{value:"1. \u96f6\u5bbd\u6b63\u5411\u5148\u884c\u65ad\u8a00",id:"1-\u96f6\u5bbd\u6b63\u5411\u5148\u884c\u65ad\u8a00",level:2},{value:"2. \u8d1f\u5411\u96f6\u5bbd\u65ad\u8a00",id:"2-\u8d1f\u5411\u96f6\u5bbd\u65ad\u8a00",level:2},{value:"3. \u96f6\u5bbd\u6b63\u5411\u540e\u884c\u65ad\u8a00",id:"3-\u96f6\u5bbd\u6b63\u5411\u540e\u884c\u65ad\u8a00",level:2},{value:"4. \u96f6\u5bbd\u8d1f\u5411\u540e\u884c\u65ad\u8a00",id:"4-\u96f6\u5bbd\u8d1f\u5411\u540e\u884c\u65ad\u8a00",level:2},{value:"\u5339\u914d &amp; \u548c ; \u4e4b\u95f4\u4e0d\u542b\u6709 test \u7684\u5b57\u7b26",id:"\u5339\u914d--\u548c--\u4e4b\u95f4\u4e0d\u542b\u6709-test-\u7684\u5b57\u7b26",level:3},{value:"\u5339\u914d\u4e0d\u542b\u6709&lt;img&gt;\u6807\u7b7e\u7684&lt;div&gt;&lt;/div&gt;\u6807\u7b7e",id:"\u5339\u914d\u4e0d\u542b\u6709img\u6807\u7b7e\u7684divdiv\u6807\u7b7e",level:3},{value:"5. \u4e2d\u62ec\u53f7\u4e2d\u9700\u8981\u8f6c\u4e49\u7684\u56db\u4e2a\u7279\u6b8a\u5b57\u7b26\u4e3a",id:"5-\u4e2d\u62ec\u53f7\u4e2d\u9700\u8981\u8f6c\u4e49\u7684\u56db\u4e2a\u7279\u6b8a\u5b57\u7b26\u4e3a",level:2}],s={toc:k};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'\u6b63\u5219\u8868\u8fbe\u5f0f\u7684"\u975e"\uff0c\u4ee3\u8868\u4e0d\u60f3\u5339\u914d\u67d0\u4e2a\u5b57\u7b26\n\u4f8b\u5982\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const str = 'helloword123'\nconst reg = /[^hello]/g\n")),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"[^]"),'\u5185\u7684\u591a\u4e2a\u5b57\u7b26\u662f"\u6216"\u7684\u5173\u7cfb\u5b58\u5728\u7684\uff0c\u5373\u5b83\u4eec\u5e76\u4e0d\u662f\u4e00\u4e2a\u6574\u4f53\uff0c',(0,i.kt)("inlineCode",{parentName:"p"},"/[^hello]/g")," \u8868\u793a \u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," \u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," \u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"l")," \u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"o"),"\uff0c\u5e76\u4e0d\u80fd\u7406\u89e3\u4e3a\u975e",(0,i.kt)("inlineCode",{parentName:"p"},"(hello)"),"\uff0c\u6240\u4ee5\u5339\u914d\u7ed3\u679c\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"w")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"rd123"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5c31\u662f\u60f3\u5339\u914d\u975e\u67d0\u4e2a\u5b57\u7b26\u4e32\u600e\u4e48\u529e\u5462\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u7528\u5230\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u65ad\u8a00\n\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5148\u884c\u65ad\u8a00\u548c\u540e\u884c\u65ad\u8a00\u4e00\u5171\u6709 4 \u79cd\u5f62\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(?=pattern)"),"\xa0\u96f6\u5bbd\u6b63\u5411\u5148\u884c\u65ad\u8a00"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(?!pattern)"),"\xa0\u96f6\u5bbd\u8d1f\u5411\u5148\u884c\u65ad\u8a00"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(?<=pattern)"),"\xa0\u96f6\u5bbd\u6b63\u5411\u540e\u884c\u65ad\u8a00"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(?<!pattern)"),"\xa0\u96f6\u5bbd\u8d1f\u5411\u540e\u884c\u65ad\u8a00")),(0,i.kt)("p",null,"\u8fd9\u91cc\u9762\u7684\xa0pattern\xa0\u662f\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\n\u5982\u540c\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"^"),"\xa0\u4ee3\u8868\u5f00\u5934\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"$"),"\xa0\u4ee3\u8868\u7ed3\u5c3e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\\b"),'\xa0\u4ee3\u8868\u5355\u8bcd\u8fb9\u754c\u4e00\u6837\uff0c\u5148\u884c\u65ad\u8a00\u548c\u540e\u884c\u65ad\u8a00\u4e5f\u6709\u7c7b\u4f3c\u7684\u4f5c\u7528\uff0c\u5b83\u4eec\u53ea\u5339\u914d\u67d0\u4e9b\u4f4d\u7f6e\uff0c\u5728\u5339\u914d\u8fc7\u7a0b\u4e2d\u4e0d\u5360\u7528\u5b57\u7b26\uff0c\u6240\u4ee5\u88ab\u79f0\u4e3a"\u96f6\u5bbd"\u3002\u6240\u8c13\u4f4d\u7f6e\uff0c\u662f\u6307\u5b57\u7b26\u4e32\u4e2d(\u6bcf\u884c)\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u5de6\u8fb9\u3001\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u7684\u53f3\u8fb9\u4ee5\u53ca\u76f8\u90bb\u5b57\u7b26\u7684\u4e2d\u95f4\uff08\u5047\u8bbe\u6587\u5b57\u65b9\u5411\u662f\u5934\u5de6\u5c3e\u53f3\uff09\u3002\n\u4e0b\u9762\u5206\u522b\u4e3e\u4f8b\u6765\u8bf4\u660e\u8fd9 4 \u79cd\u65ad\u8a00\u7684\u542b\u4e49\u3002'),(0,i.kt)("h2",{id:"1-\u96f6\u5bbd\u6b63\u5411\u5148\u884c\u65ad\u8a00"},"1. \u96f6\u5bbd\u6b63\u5411\u5148\u884c\u65ad\u8a00"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(?=pattern)"),"\xa0\u4ee3\u8868\u5b57\u7b26\u4e32\u4e2d\u7684\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u7d27\u63a5\u8be5\u4f4d\u7f6e\u4e4b\u540e\u7684\u5b57\u7b26\u5e8f\u5217\u80fd\u591f\u5339\u914d pattern\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var str = '<div>anterone'\nvar reg = /^(?=<)<[^>]+>\\w+/\n")),(0,i.kt)(p.z,{src:"../../img/javascript/Kdivantzone.png",mdxType:"RenderImg"}),(0,i.kt)("p",null,"\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u83b7\u53d6\u63a7\u5236\u6743\uff0c\u9996\u5148\u7531\u4f4d\u7f6e0\u5f00\u59cb\u5339\u914d\uff0c\u5b83\u5339\u914d\u5f00\u59cb\u4f4d\u7f6e0\uff0c\u5339\u914d\u6210\u529f\uff0c\u7136\u540e\u63a7\u5236\u6743\u8f6c\u4ea4\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"(?=<)"),"\uff0c\u7531\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"(?=<)")," \u662f\u96f6\u5bbd\u7684\uff0c\u6240\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"(?=<)")," \u4e5f\u662f\u4ece\u4f4d\u7f6e0\u5f00\u59cb\u5339\u914d\uff0c\u5b83\u8981\u6c42\u6240\u5728\u7684\u4f4d\u7f6e\u53f3\u4fa7\u5fc5\u987b\u662f\u5b57\u7b26 ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),"\uff0c\u4f4d\u7f6e0\u7684\u53f3\u4fa7\u6070\u597d\u662f\u5b57\u7b26\u4e32 ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),"\uff0c\u5339\u914d\u6210\u529f\uff0c\u7136\u540e\u63a7\u5236\u6743\u4ea4\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),",\u7531\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"(?=<)")," \u662f\u96f6\u5bbd\u7684\uff0c\u6240\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"<")," \u4e5f\u662f\u4ece\u4f4d\u7f6e0\u5f00\u59cb\u5339\u914d\uff0c\u4e8e\u662f\u5339\u914d\u6210\u529f\u3002"),(0,i.kt)("h2",{id:"2-\u8d1f\u5411\u96f6\u5bbd\u65ad\u8a00"},"2. \u8d1f\u5411\u96f6\u5bbd\u65ad\u8a00"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(?!pattern)"),"\u4ee3\u8868\u5b57\u7b26\u4e32\u4e2d\u7684\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u7d27\u63a5\u8be5\u4f4d\u7f6e\u4e4b\u540e\u7684\u5b57\u7b26\u5e8f\u5217\u4e0d\u80fd\u5339\u914d pattern\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var str = 'abZW863ab88';\nvar reg=/ab(?![A-Z])/g;\n")),(0,i.kt)(p.z,{src:"../../img/javascript/abZW863ab88.png",mdxType:"RenderImg"}),(0,i.kt)("p",null,"\u9996\u5148\u7531\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5b57\u7b26 ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," \u83b7\u53d6\u63a7\u5236\u6743\uff0c\u4ece\u4f4d\u7f6e0\u5f00\u59cb\u5339\u914d\uff0c\u5339\u914d\u5b57\u7b26 ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," \u6210\u529f\uff0c\u7136\u540e\u63a7\u5236\u6743\u8f6c\u4ea4\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c\u4ece\u4f4d\u7f6e1\u5904\u5f00\u59cb\u5339\u914d\uff0c\u5339\u914d\u5b57\u7b26 ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," \u6210\u529f\uff0c\u7136\u540e\u63a7\u5236\u6743\u8f6c\u4ea4\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"(?![A-Z])"),"\uff0c\u5b83\u4ece\u4f4d\u7f6e2\u5904\u5f00\u59cb\u5339\u914d\uff0c\u5b83\u8981\u6c42\u6240\u5728\u4f4d\u7f6e\u7684\u53f3\u8fb9\u4e0d\u80fd\u591f\u662f\u4efb\u610f\u4e00\u4e2a\u5927\u5199\u5b57\u6bcd\uff0c\u800c\u4f4d\u7f6e2\u7684\u53f3\u8fb9\u662f\u5927\u5199\u5b57\u6bcd  ",(0,i.kt)("inlineCode",{parentName:"p"},"Z"),"\uff0c\u4e8e\u662f\u5339\u914d\u5931\u8d25\uff0c\u7136\u540e\u63a7\u5236\u6743\u91cd\u65b0\u4ea4\u7ed9\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u5e76\u4ece\u4f4d\u7f6e1\u5f00\u59cb\u5c1d\u8bd5\uff0c\u7136\u540e\u5931\u8d25\uff0c\u63a7\u5236\u6743\u518d\u6b21\u8f6c\u4ea4\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u4ece\u4f4d\u7f6e2\u5f00\u59cb\u5c1d\u8bd5\uff0c\u4f9d\u7136\u5931\u8d25\uff0c\u5982\u6b64\u5f80\u590d\uff0c\u77e5\u9053\u5728\u4f4d\u7f6e7\u5904\u5339\u914d\u6210\u529f\uff0c\u7136\u540e\u63a7\u5236\u6743\u8f6c\u4ea4\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"b"),"\uff0c\u7136\u540e\u4ece\u4f4d\u7f6e8\u5904\u5f00\u59cb\u5c1d\u8bd5\u5339\u914d\uff0c\u5339\u914d\u6210\u529f\uff0c\u7136\u540e\u5c06\u63a7\u5236\u6743\u8f6c\u4ea4\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"(?![A-Z])"),"\uff0c\u5b83\u4ece\u4f4d\u7f6e9\u5f00\u59cb\u5c1d\u8bd5\u5339\u914d\uff0c\u5339\u914d\u6210\u529f\uff0c\u4f46\u662f\u5b83\u4e0d\u4f1a\u771f\u6b63\u5339\u914d ",(0,i.kt)("inlineCode",{parentName:"p"},"ab")," \u540e\u9762\u7684\u5b57\u7b26\uff0c\u968f\u610f\u6700\u7ec8\u8fd4\u56de\u7684\u7ed3\u679c\u662f\u4f4d\u7f6e7-9\u7684\u5b57\u7b26 ",(0,i.kt)("inlineCode",{parentName:"p"},"ab"),"\u3002"),(0,i.kt)("h2",{id:"3-\u96f6\u5bbd\u6b63\u5411\u540e\u884c\u65ad\u8a00"},"3. \u96f6\u5bbd\u6b63\u5411\u540e\u884c\u65ad\u8a00"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(?<=pattern)"),"\u4ee3\u8868\u5b57\u7b26\u4e32\u4e2d\u7684\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u7d27\u63a5\u8be5\u4f4d\u7f6e\u4e4b\u524d\u7684\u5b57\u7b26\u5e8f\u5217\u80fd\u591f\u5339\u914d pattern\u3002\n\u4f8b\u5982\uff1a\u5bf9\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"regex represents regular expression"),"\xa0\u8fd9\u4e2a\u5b57\u7b26\u4e32\uff0c\u6709 4 \u4e2a\u5355\u8bcd\uff0c\u8981\u60f3\u5339\u914d\u5355\u8bcd\u5185\u90e8\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"re"),"\uff0c\u4f46\u4e0d\u5339\u914d\u5355\u8bcd\u5f00\u5934\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"re"),"\uff0c\u53ef\u4ee5\u7528\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"(?<=\\w)re"),"\uff0c\u5355\u8bcd\u5185\u90e8\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"re"),"\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"re")," \u524d\u9762\u5e94\u8be5\u662f\u4e00\u4e2a\u5355\u8bcd\u5b57\u7b26\u3002\n\u4e4b\u6240\u4ee5\u53eb\u540e\u884c\u65ad\u8a00\uff0c\u662f\u56e0\u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u5f15\u64ce\u5728\u5339\u914d\u5b57\u7b26\u4e32\u548c\u8868\u8fbe\u5f0f\u65f6\uff0c\u662f\u4ece\u524d\u5411\u540e\u9010\u4e2a\u626b\u63cf\u5b57\u7b26\u4e32\u4e2d\u7684\u5b57\u7b26\uff0c\u5e76\u5224\u65ad\u662f\u5426\u4e0e\u8868\u8fbe\u5f0f\u7b26\u5408\uff0c\u5f53\u5728\u8868\u8fbe\u5f0f\u4e2d\u9047\u5230\u8be5\u65ad\u8a00\u65f6\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u5f15\u64ce\u9700\u8981\u5f80\u5b57\u7b26\u4e32\u524d\u7aef\u68c0\u6d4b\u5df2\u626b\u63cf\u8fc7\u7684\u5b57\u7b26\uff0c\u76f8\u5bf9\u4e8e\u626b\u63cf\u65b9\u5411\u662f\u5411\u540e\u7684\u3002"),(0,i.kt)("h2",{id:"4-\u96f6\u5bbd\u8d1f\u5411\u540e\u884c\u65ad\u8a00"},"4. \u96f6\u5bbd\u8d1f\u5411\u540e\u884c\u65ad\u8a00"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(?<!pattern)"),"\xa0\u4ee3\u8868\u5b57\u7b26\u4e32\u4e2d\u7684\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u7d27\u63a5\u8be5\u4f4d\u7f6e\u4e4b\u524d\u7684\u5b57\u7b26\u5e8f\u5217\u4e0d\u80fd\u5339\u914d pattern\u3002\n\u4f8b\u5982\uff1a\u5bf9\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"regex represents regular expression"),"\xa0\u8fd9\u4e2a\u5b57\u7b26\u4e32\uff0c\u8981\u60f3\u5339\u914d\u5355\u8bcd\u5f00\u5934\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"re"),"\uff0c\u53ef\u4ee5\u7528\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"(?<!\\w)re"),"\u3002\u5355\u8bcd\u5f00\u5934\u7684\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"re"),"\uff0c\u5728\u672c\u4f8b\u4e2d\uff0c\u4e5f\u5c31\u662f\u6307\u4e0d\u5728\u5355\u8bcd\u5185\u90e8\u7684\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"re"),"\uff0c\u5373\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"re"),"\xa0\u524d\u9762\u4e0d\u662f\u5355\u8bcd\u5b57\u7b26\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u7528\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"\\bre"),"\xa0\u6765\u5339\u914d\u3002"),(0,i.kt)("p",null,"##\u4f8b\u5b50"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/^((?!hello).)+$/"),"\n\u7531\u4e8e\u65ad\u8a00 ",(0,i.kt)("inlineCode",{parentName:"p"},"(?!hello)"),"\u662f\u4e0d\u5360\u4f4d\u7684\uff0c\u540e\u8ddf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},".")," \u5728\u539f\u4f4d\u7f6e\u5339\u914d\u4efb\u610f\u5b57\u7b26\uff0c\u518d\u7528\u62ec\u53f7\u5c06\u5176\u62ec\u8d77\u6765\uff0c\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," \u91cd\u590d\u4e00\u6b21\u6216\u591a\u6b21\uff0c\u524d\u540e\u52a0\u4e0a ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"$"),"\uff0c\u82e5\u662f\u5b57\u7b26\u4e32\u4e2d\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),"\uff0c\u5219\u5339\u914d\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," \u5b57\u7b26\u4e4b\u524d\u7684\u65f6\u5019\uff0c\u65ad\u8a00 ",(0,i.kt)("inlineCode",{parentName:"p"},"(?!hello)")," \u5339\u914d\u5931\u8d25\uff0c\u6b63\u5219\u5339\u914d\u7ed3\u679c\u4e3afalse\uff0c \u82e5\u662f\u5b57\u7b26\u4e32\u4e2d\u4e0d\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),"\uff0c\u5219\u5339\u914d\u7ed3\u679c\u662f\u6574\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,i.kt)("h3",{id:"\u5339\u914d--\u548c--\u4e4b\u95f4\u4e0d\u542b\u6709-test-\u7684\u5b57\u7b26"},"\u5339\u914d & \u548c ; \u4e4b\u95f4\u4e0d\u542b\u6709 test \u7684\u5b57\u7b26"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const str = "hello&nbsp;&test1;test&qout;";\nconst reg = /&((?!test).)+;/g\n// \u5339\u914d\u7ed3\u679c\uff1a&nbsp; \u548c &qout;\n')),(0,i.kt)("h3",{id:"\u5339\u914d\u4e0d\u542b\u6709img\u6807\u7b7e\u7684divdiv\u6807\u7b7e"},"\u5339\u914d\u4e0d\u542b\u6709","<","img",">","\u6807\u7b7e\u7684","<","div",">","<","/div",">","\u6807\u7b7e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const str = \"<div id='1'><img class='xx'></div><div id='1'><input type=''text\"></div>\";\nconst reg = /<div[^>]*>((?!<img[^>]*>).)+</div>/g;\n// \u5339\u914d\u7ed3\u679c\uff1a<div id='1'><input type=''text\"></div>\n")),(0,i.kt)("h2",{id:"5-\u4e2d\u62ec\u53f7\u4e2d\u9700\u8981\u8f6c\u4e49\u7684\u56db\u4e2a\u7279\u6b8a\u5b57\u7b26\u4e3a"},"5. \u4e2d\u62ec\u53f7\u4e2d\u9700\u8981\u8f6c\u4e49\u7684\u56db\u4e2a\u7279\u6b8a\u5b57\u7b26\u4e3a"),(0,i.kt)(p.z,{src:"../../img/javascript/regexp.png",width:"600px",mdxType:"RenderImg"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u62ec\u53f7\u5185\u542b\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"^")," \u7684\u60c5\u51b5")),(0,i.kt)("p",null,"\u2003\u2003",(0,i.kt)("inlineCode",{parentName:"p"},"^")," \u653e\u5728\u6700\u524d\u9762\u65f6\uff0c\u6709\u7279\u5b9a\u7684\u542b\u4e49,\u6b64\u65f6\u9700\u8981\u8f6c\u4e49\uff1b\u5426\u5219\u4e0d\u9700\u8981\u3002"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u542b\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," \u7684\u60c5\u51b5")),(0,i.kt)("p",null,"\u2003\u2003",(0,i.kt)("inlineCode",{parentName:"p"},"-")," \u653e\u5728\u4e2d\u95f4\u65f6\uff0c\u6709\u7279\u5b9a\u7684\u542b\u4e49,\u6b64\u65f6\u9700\u8981\u8f6c\u4e49\uff1b\u5426\u5219\u4e0d\u9700\u8981\u3002"),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u542b\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"[]")," \u7684\u60c5\u51b5")),(0,i.kt)("p",null,"\u2003\u2003",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," \u6709\u7279\u5b9a\u7684\u542b\u4e49 \u6545\u4e00\u5b9a\u9700\u8981\u8f6c\u4e49\u3002"),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"\u542b\u6709 ",(0,i.kt)("inlineCode",{parentName:"li"},"\\")," \u7684\u60c5\u51b5")),(0,i.kt)("p",null,"\u2003\u2003",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," \u672c\u8eab\u5c31\u662f\u8f6c\u4e49\u5b57\u7b26\uff0c\u6545\u4e5f\u662f\u4e00\u5b9a\u9700\u8981\u8f6c\u4e49\u3002"))}u.isMDXComponent=!0}}]);