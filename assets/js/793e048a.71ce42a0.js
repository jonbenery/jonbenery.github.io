"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[122],{1538:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return v}});var r=n(7462),a=n(3366),i=n(7294),o=n(3905),u=n(4578),s=n(9669),c=n.n(s);c().interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c().interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var l=function(t){return t=t||{},c()(t)},p=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={show:!1,value:"",videoSrc:""},n}(0,u.Z)(e,t);var n=e.prototype;return n.handleChangeValue=function(t){this.setState({value:t.target.value})},n.handleTranslate=function(){var t=this;l({method:"get",url:"https://api.oick.cn/douyin/api.php?url="+this.state.value}).then((function(e){e.play&&t.setState({show:!0,videoSrc:e.play})}))},n.render=function(){var t=this,e=this.state,n=e.value,r=e.videoSrc;return i.createElement("div",null,i.createElement("div",{className:"userInput"},i.createElement("p",null,"\u8bf7\u8f93\u5165\u89c6\u9891\u7684\u94fe\u63a5"),i.createElement("input",{value:n,onChange:function(e){return t.handleChangeValue(e)}}),i.createElement("button",{onClick:function(e){return t.handleTranslate(e)}},"\u8f6c\u6362")),this.state.show?i.createElement("div",null,i.createElement("p",null,"\u89c6\u9891\u9884\u89c8"),i.createElement("video",{src:r})):"")},e}(i.Component),d=["components"],f={title:"\u6296\u97f3\u53bb\u9664\u89c6\u9891\u6c34\u5370"},h=void 0,m={unversionedId:"tiktok",id:"tiktok",title:"\u6296\u97f3\u53bb\u9664\u89c6\u9891\u6c34\u5370",description:"",source:"@site/packages/api/tiktok.mdx",sourceDirName:".",slug:"/tiktok",permalink:"/api/tiktok",draft:!1,editUrl:"https://github.com/jonbenery/weblog/packages/api/tiktok.mdx",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1659003811,formattedLastUpdatedAt:"7/28/2022",frontMatter:{title:"\u6296\u97f3\u53bb\u9664\u89c6\u9891\u6c34\u5370"},sidebar:"docs",previous:{title:"api\u63a5\u53e3",permalink:"/api/"}},k={},v=[],g={toc:v};function b(t){var e=t.components,n=(0,a.Z)(t,d);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"Tiktok"}))}b.isMDXComponent=!0}}]);