"use strict";(self.webpackChunkweblog=self.webpackChunkweblog||[]).push([[890],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},s=Object.keys(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=o.createContext({}),l=function(n){var e=o.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=l(n.components);return o.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,i=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),d=l(t),m=r,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return t?o.createElement(y,a(a({ref:e},p),{},{components:t})):o.createElement(y,a({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,a=new Array(s);a[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=n,c.mdxType="string"==typeof n?n:r,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4307:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=t(7462),r=t(3366),s=(t(7294),t(3905)),a=["components"],c={title:"\u539f\u578b\u94fe\u7684\u7ee7\u627f"},i=void 0,l={unversionedId:"javascript/extends",id:"javascript/extends",title:"\u539f\u578b\u94fe\u7684\u7ee7\u627f",description:"1. \u7b80\u5355\u7ee7\u627f",source:"@site/packages/docs/javascript/extends.md",sourceDirName:"javascript",slug:"/javascript/extends",permalink:"/docs/javascript/extends",draft:!1,editUrl:"https://github.com/trefoils/packages/docs/javascript/extends.md",tags:[],version:"current",lastUpdatedBy:"jonbenery",lastUpdatedAt:1656984927,formattedLastUpdatedAt:"7/5/2022",frontMatter:{title:"\u539f\u578b\u94fe\u7684\u7ee7\u627f"},sidebar:"docs",previous:{title:"\u77e5\u8bc6\u5e93",permalink:"/docs/"},next:{title:"\u7ee7\u627f\u9759\u6001\u5c5e\u6027",permalink:"/docs/javascript/extendsStatic"}},p={},u=[{value:"1. \u7b80\u5355\u7ee7\u627f",id:"1-\u7b80\u5355\u7ee7\u627f",level:2},{value:"2. \u5192\u5145\u5bf9\u8c61\u7ee7\u627f",id:"2-\u5192\u5145\u5bf9\u8c61\u7ee7\u627f",level:2},{value:"3. \u5192\u5145\u5bf9\u8c61\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f",id:"3-\u5192\u5145\u5bf9\u8c61\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f",level:2},{value:"4. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f \u65b9\u5f0f1",id:"4-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f-\u65b9\u5f0f1",level:2},{value:"\u5c06\u5b50\u7c7b\u539f\u578b\u7684<code>__proto__</code>\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61",id:"\u5c06\u5b50\u7c7b\u539f\u578b\u7684__proto__\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61",level:4},{value:"5. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f \u65b9\u5f0f2",id:"5-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f-\u65b9\u5f0f2",level:2},{value:"\u4f7f\u7528<code>Object.setPrototypeOf</code>\u5c5e\u6027\uff0c\u5b9e\u73b0\u5c06\u5b50\u7c7b\u539f\u578b\u7684<code>__proto__</code>\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61",id:"\u4f7f\u7528objectsetprototypeof\u5c5e\u6027\u5b9e\u73b0\u5c06\u5b50\u7c7b\u539f\u578b\u7684__proto__\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61",level:4},{value:"6.\u539f\u578b\u94fe\u7ee7\u627f\u56fe",id:"6\u539f\u578b\u94fe\u7ee7\u627f\u56fe",level:2}],d={toc:u};function m(n){var e=n.components,c=(0,r.Z)(n,a);return(0,s.kt)("wrapper",(0,o.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-\u7b80\u5355\u7ee7\u627f"},"1. \u7b80\u5355\u7ee7\u627f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(school) {\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\n\n\nStudent.prototype = new Person()\nStudent.prototype.constructor = Student;\n\nconst stu1 = new Student('\u6e05\u534e')\nconsole.log(stu1);\n\n// \u6b64\u79cd\u7ee7\u627f\u7684\u7f3a\u70b9\n// 1. \u5b50\u7c7b\u4e0d\u80fd\u83b7\u53d6\u7236\u7c7b\u7684\u5c5e\u6027\n// 2. \u5b50\u7c7b\u7684\u539f\u578b\u65b9\u6cd5\u88ab\u66ff\u6362\u6389\u4e86\n")),(0,s.kt)("h2",{id:"2-\u5192\u5145\u5bf9\u8c61\u7ee7\u627f"},"2. \u5192\u5145\u5bf9\u8c61\u7ee7\u627f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(name, age, school) {\n  Person.call(this, name, age)\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\n\n\n// Student.prototype = Person.prototype\n// \u5f53\u65f6\u8ba4\u4e3a\u8fd9\u6837\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u7ee7\u627f\uff0c\u4f46\u662f\u6709\u4e00\u4e2a\u7f3a\u70b9\u662f\uff1a\n// \u5f53\u53bb\u4fee\u6539\u4e86\u5b50\u7c7b\u539f\u578b\u8eab\u4e0a\u7684say\u65b9\u6cd5\u65f6\uff0c\u5176\u7236\u7c7b\u7684say\u65b9\u6cd5\u5c31\u4f1a\u88ab\u66ff\u6362\uff0c\u5bfc\u81f4\u540e\u9762\u5728\u521b\u5efaperson\u5bf9\u8c61\u65f6say\u65b9\u6cd5\u5c31\u88ab\u66ff\u6362\u6389\u4e86\n// \u6211\u4eec\u5e76\u4e0d\u5e0c\u671b\u6b64\u7c7b\u4e8b\u4ef6\u53d1\u751f\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u4f7f\u7528new Person()\u6765\u89c4\u907f\u8fd9\u4e2a\u95ee\u9898\nStudent.prototype = new Person()\nStudent.prototype.constructor = Student;\n// Student.prototype.say = function() {\n//   console.log('\u6211\u88ab\u4fee\u6539\u4e86');\n// }\n\nconst stu1 = new Student('\u5c0f\u660e', 18, '\u6e05\u534e')\nstu1.say()\n// const person = new Person('12', 18);\n// person.say()\n\n\n// \u4f18\u53161\u7ee7\u627f.js\u4f7f\u7528\u5192\u5145\u5bf9\u8c61call\u6765\u6784\u9020\u590d\u5236\u7236\u7c7b\u7684\u65b9\u6cd5\u5230\u5b50\u7c7b\n// \u7f3a\u70b9\n//  1. \u7236\u7c7b\u88abnew\u4e862\u6b21\uff0c\u6d6a\u8d39\u6027\u80fd\n//  2. \u4ecd\u65e7\u5b58\u5728\u5b50\u7c7b\u7684\u539f\u578b\u65b9\u6cd5\u88ab\u66ff\u6362\u6389\u4e86\n\n")),(0,s.kt)("h2",{id:"3-\u5192\u5145\u5bf9\u8c61\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f"},"3. \u5192\u5145\u5bf9\u8c61\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7ee7\u627f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(name, age, school) {\n  Person.call(this, name, age)\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\n\nfunction Extends(parent) {\n  // \u501f\u7528\u53e6\u5916\u4e00\u4e2a\u4e2d\u95f4\u51fd\u6570\n  function middle() {}\n  middle.prototype = parent.prototype;\n  return new middle()\n}\n\nStudent.prototype = Extends(Person);\nStudent.prototype.constructor = Student;\n\nconst stu1 = new Student('\u5c0f\u660e', 18, '\u6e05\u534e')\nconsole.log(stu1);\n\n// \u7236\u7c7b\u4e0d\u5728\u88abnew \u591a\u6b21\n// \u7f3a\u70b9\uff1a\n//  \u4ecd\u65e7\u5b58\u5728\u5b50\u7c7b\u7684\u539f\u578b\u65b9\u6cd5\u88ab\u66ff\u6362\u6389\u4e86\n\n")),(0,s.kt)("h2",{id:"4-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f-\u65b9\u5f0f1"},"4. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f \u65b9\u5f0f1"),(0,s.kt)("h4",{id:"\u5c06\u5b50\u7c7b\u539f\u578b\u7684__proto__\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61"},"\u5c06\u5b50\u7c7b\u539f\u578b\u7684",(0,s.kt)("inlineCode",{parentName:"h4"},"__proto__"),"\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(name, age, school) {\n  Person.call(this, name, age)\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\n\n\nfunction Extends(parent) {\n  // \u501f\u7528\u53e6\u5916\u4e00\u4e2a\u4e2d\u95f4\u51fd\u6570\n  function middle() {}\n  middle.prototype = parent.prototype;\n  return new middle()\n}\n\nStudent.prototype.__proto__ = Extends(Person);\n\nconst stu1 = new Student('\u5c0f\u660e', 18, '\u6e05\u534e')\nconsole.log(stu1);\nstu1.getSchool()\n\n//  \u5b50\u7c7b\u539f\u578b\u4e0d\u5728\u88ab\u66ff\u6362\n\n")),(0,s.kt)("h2",{id:"5-\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f-\u65b9\u5f0f2"},"5. \u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f \u65b9\u5f0f2"),(0,s.kt)("h4",{id:"\u4f7f\u7528objectsetprototypeof\u5c5e\u6027\u5b9e\u73b0\u5c06\u5b50\u7c7b\u539f\u578b\u7684__proto__\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61"},"\u4f7f\u7528",(0,s.kt)("inlineCode",{parentName:"h4"},"Object.setPrototypeOf"),"\u5c5e\u6027\uff0c\u5b9e\u73b0\u5c06\u5b50\u7c7b\u539f\u578b\u7684",(0,s.kt)("inlineCode",{parentName:"h4"},"__proto__"),"\u5c5e\u6027\u6307\u5411\u7236\u7c7b\u5bf9\u8c61"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\nPerson.prototype.say = function() {\n  console.log(`my name is ${this.name}, years old is ${this.age}`)\n}\n\nfunction Student(name, age, school) {\n  Person.call(this, name, age)\n  this.school = school\n}\nStudent.prototype.getSchool = function() {\n  console.log(`my school name is ${this.school}`)\n}\nfunction Extends(son, parent) {\n  Object.setPrototypeOf(son.prototype, parent.prototype)\n  // son.prototype.__proto__ = parent.prototype\n}\n\n\n\nExtends(Student, Person);\n\nconst stu1 = new Student('\u5c0f\u660e', 18, '\u6e05\u534e')\nstu1.getSchool()\n\n// setPrototypeOf\n")),(0,s.kt)("h2",{id:"6\u539f\u578b\u94fe\u7ee7\u627f\u56fe"},"6.\u539f\u578b\u94fe\u7ee7\u627f\u56fe"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"\u539f\u578b\u94fe\u7ee7\u627f\u56fe",src:t(9059).Z,width:"570",height:"708"})))}m.isMDXComponent=!0},9059:function(n,e,t){e.Z=t.p+"assets/images/prototype-95b69d116c74d0d6da64e1c6efc7cd79.jpeg"}}]);