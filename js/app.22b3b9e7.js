(function(e){function t(t){for(var c,s,l=t[0],i=t[1],r=t[2],u=0,p=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,r||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(c=!1)}c&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},a={app:0},o=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/chengyan/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var r=0;r<l.length;r++)t(l[r]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04d3":function(e,t,n){"use strict";n("e18e")},"0566":function(e,t,n){},"0755":function(e,t,n){"use strict";n("6f26")},"0b4c":function(e,t,n){},"0bd8":function(e,t,n){},"1cf9":function(e,t,n){"use strict";n("0bd8")},"23e6":function(e,t,n){e.exports=n.p+"img/about6.1e6f4481.jpg"},"28ac":function(e,t,n){e.exports=n.p+"img/about5.60730653.jpg"},"298b":function(e,t,n){e.exports=n.p+"img/lecture.1226c2dd.jpg"},"315c":function(e,t,n){e.exports=n.p+"img/yikang.f9d16b07.jpg"},3643:function(e,t,n){e.exports=n.p+"img/colorful.b17b8729.jpg"},"3f6b":function(e,t,n){"use strict";n("c171")},"3f91":function(e,t,n){"use strict";n("a293")},4157:function(e,t,n){e.exports=n.p+"img/jiousaio.a5412752.jpg"},"45e8":function(e,t,n){e.exports=n.p+"img/07.992f6af6.jpg"},5299:function(e,t,n){e.exports=n.p+"img/08.72a3effa.jpg"},5561:function(e,t,n){"use strict";n("b206")},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function a(e,t,n,a,o,s){const l=Object(c["t"])("Sidebar"),i=Object(c["t"])("Header"),r=Object(c["t"])("Banner"),d=Object(c["t"])("About"),u=Object(c["t"])("Work"),p=Object(c["t"])("Skills"),b=Object(c["t"])("Awards"),j=Object(c["t"])("Contact"),O=Object(c["t"])("Footer"),v=Object(c["t"])("Module"),f=Object(c["t"])("ScrollTop");return Object(c["n"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(l,{isopen:a.isOpen,handMenuClose:a.handMenuClose},null,8,["isopen","handMenuClose"]),Object(c["j"])(i,{isopen:a.isOpen,handMenuOpen:a.handMenuOpen},null,8,["isopen","handMenuOpen"]),Object(c["g"])("div",{id:"main",class:Object(c["k"])({darken:a.isOpen})},[Object(c["j"])(r),Object(c["j"])(d),Object(c["j"])(u),Object(c["j"])(p),Object(c["j"])(b,{isModule:a.isModule,handOpenModule:a.handOpenModule},null,8,["isModule","handOpenModule"]),Object(c["j"])(j),Object(c["j"])(O),Object(c["j"])(v,{isModule:a.isModule,handCloseModule:a.handCloseModule,isModuleSrc:a.isModuleSrc},null,8,["isModule","handCloseModule","isModuleSrc"]),Object(c["j"])(f)],2)],64)}function o(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("div",{id:"sidebar",class:Object(c["k"])({open:a.props.isopen})},[Object(c["g"])("i",{class:"fas fa-times",id:"close",onClick:t[0]||(t[0]=(...e)=>a.handMenuClose&&a.handMenuClose(...e))}),Object(c["g"])("ul",null,[Object(c["g"])("a",{href:"./#banner",onClick:t[1]||(t[1]=(...e)=>a.handMenuClose&&a.handMenuClose(...e)),class:Object(c["k"])({focus:e.home,open:a.props.isopen})},"HOME",2),Object(c["g"])("a",{href:"./#about",onClick:t[2]||(t[2]=(...e)=>a.handMenuClose&&a.handMenuClose(...e)),class:Object(c["k"])({focus:e.about,open:a.props.isopen})},"ABOUT",2),Object(c["g"])("a",{href:"./#work",onClick:t[3]||(t[3]=(...e)=>a.handMenuClose&&a.handMenuClose(...e)),class:Object(c["k"])({focus:e.work,open:a.props.isopen})},"WORKS",2),Object(c["g"])("a",{href:"./#skills",onClick:t[4]||(t[4]=(...e)=>a.handMenuClose&&a.handMenuClose(...e)),class:Object(c["k"])({focus:e.skills,open:a.props.isopen})},"SKILLS",2),Object(c["g"])("a",{href:"./#awards",onClick:t[5]||(t[5]=(...e)=>a.handMenuClose&&a.handMenuClose(...e)),class:Object(c["k"])({focus:e.awards,open:a.props.isopen})},"AWARDS",2),Object(c["g"])("a",{href:"./#contact",onClick:t[6]||(t[6]=(...e)=>a.handMenuClose&&a.handMenuClose(...e)),class:Object(c["k"])({focus:e.contact,open:a.props.isopen})},"CONTACT",2)])],2)}var s={props:{isopen:{type:Boolean,default:!1},handMenuClose:{type:Function,default:()=>{}}},setup(e){const t=Object(c["c"])(()=>e.handMenuClose);return{handMenuClose:t,props:e}}},l=(n("8a40"),n("6b0d")),i=n.n(l);const r=i()(s,[["render",o],["__scopeId","data-v-903d57de"]]);var d=r;const u=e=>(Object(c["p"])("data-v-c38a14b8"),e=e(),Object(c["o"])(),e),p=u(()=>Object(c["g"])("a",{href:"javascript:;",id:"logo"},"LiChengYan",-1));function b(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("header",{id:"header",class:Object(c["k"])({darken:a.props.isopen})},[p,Object(c["g"])("i",{class:"fas fa-bars",id:"menu",onClick:t[0]||(t[0]=(...e)=>a.props.handMenuOpen&&a.props.handMenuOpen(...e))})],2)}var j={props:{isopen:{type:Boolean,default:!1},handMenuOpen:{type:Function,default:()=>{}}},setup(e){return console.log(e),{props:e}}};n("3f6b");const O=i()(j,[["render",b],["__scopeId","data-v-c38a14b8"]]);var v=O,f=n("bc25"),g=n.n(f),h=n("23e6"),m=n.n(h);const w=e=>(Object(c["p"])("data-v-69b8ad88"),e=e(),Object(c["o"])(),e),M={id:"banner",ref:"bannerDiv"},C={src:g.a,class:"bannerImg"},k={src:m.a,class:"bannerImg"},y={class:"text open"},x=w(()=>Object(c["g"])("h2",null,"Li-Cheng Yan",-1)),S=w(()=>Object(c["g"])("p",null,"I come from Taoyuan",-1));function _(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("div",M,[Object(c["y"])(Object(c["g"])("img",C,null,512),[[c["w"],a.view]]),Object(c["y"])(Object(c["g"])("img",k,null,512),[[c["w"],!a.view]]),Object(c["g"])("div",y,[x,S,Object(c["g"])("i",{class:"fa-sharp fa-solid fa-chevron-down",id:"seemore",onClick:t[0]||(t[0]=(...e)=>a.downFn&&a.downFn(...e))})])],512)}var T={setup(){const e=Object(c["r"])(!1),t=Object(c["r"])(1),n=Object(c["r"])(null);setInterval(()=>{t.value++,10===t.value&&(e.value=!e.value),t.value>=10&&(t.value=1)},1e3);const a=()=>{document.body.scrollTop=844,document.documentElement.scrollTop=844};return{view:e,downFn:a,bannerDiv:n}}};n("1cf9");const I=i()(T,[["render",_],["__scopeId","data-v-69b8ad88"]]);var V=I,B=n("28ac"),P=n.n(B);const L=Object(c["h"])('<div class="imgBox" data-v-6c8902de><img src="'+P.a+'" class="aboutImg" data-v-6c8902de></div><div class="content" data-v-6c8902de><span class="myTitle" data-v-6c8902de>MY INTRO</span><h2 class="aboutMe" data-v-6c8902de>About Me</h2><ul class="intro" data-v-6c8902de><li data-v-6c8902de>熱愛嘗試新的事物</li><li data-v-6c8902de>善於溝通和分享新知</li><li data-v-6c8902de>具備開放積極的特質</li></ul><div class="basic" data-v-6c8902de><p class="question" data-v-6c8902de>姓名:</p><p class="answer" data-v-6c8902de>李承諺(Li-Cheng Yan)</p></div><div class="basic" data-v-6c8902de><p class="question" data-v-6c8902de>出生日期:</p><p class="answer" data-v-6c8902de>1997/08/22</p></div><div class="basic" data-v-6c8902de><p class="question" data-v-6c8902de>家鄉:</p><p class="answer" data-v-6c8902de>桃園市桃園區</p></div><div class="basic" data-v-6c8902de><p class="question" data-v-6c8902de>電子郵件:</p><p class="answer" data-v-6c8902de>a0938599191@gmail.com</p></div><div class="basic" data-v-6c8902de><p class="question" data-v-6c8902de>手機號碼:</p><p class="answer" data-v-6c8902de>0938599191</p></div><div class="icon" data-v-6c8902de><a href="https://www.facebook.com/profile.php?id=100002935953804" data-v-6c8902de><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" data-v-6c8902de><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" data-v-6c8902de></path></svg></a><a href="https://www.instagram.com/14___2/" data-v-6c8902de><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" data-v-6c8902de><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" data-v-6c8902de></path></svg></a><a href="https://line.me/ti/p/jm4Sa6RLqK" data-v-6c8902de><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-line" viewBox="0 0 16 16" data-v-6c8902de><path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" data-v-6c8902de></path></svg></a><a href="https://github.com/10994015" data-v-6c8902de><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" data-v-6c8902de><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-6c8902de></path></svg></a></div></div>',2),A=[L];function E(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("div",{id:"about",class:Object(c["k"])({view:a.isView})},A,2)}var H={props:{},setup(e){const t=screen.height,n=Object(c["r"])(!1);return Object(c["m"])(()=>{const e=document.getElementById("about").offsetTop;console.log(e),window.addEventListener("scroll",()=>{window.scrollY>=e-t/2&&(n.value=!0)})}),{isView:n}}};n("b034");const Y=i()(H,[["render",E],["__scopeId","data-v-6c8902de"]]);var F=Y;const q=e=>(Object(c["p"])("data-v-032ef6b2"),e=e(),Object(c["o"])(),e),z=q(()=>Object(c["g"])("span",{class:"myTitle"},"MY expriences & SKILLS",-1)),R={class:"content"},U={class:"expriences"},W={class:"content"},Z={class:"skillsBox"},D={class:"title"},K={class:"name"},J={class:"percent"},N={class:"skillsBar"};function G(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("div",{id:"skills",class:Object(c["k"])({view:a.isView})},[z,Object(c["g"])("div",R,[Object(c["g"])("div",U,[Object(c["g"])("div",W,[(Object(c["n"])(!0),Object(c["f"])(c["a"],null,Object(c["s"])(a.expriences,e=>(Object(c["n"])(),Object(c["f"])("div",{class:"item",key:e.name},[Object(c["g"])("li",null,Object(c["u"])(e.name),1),Object(c["g"])("p",null,Object(c["u"])(e.time),1)]))),128))])]),Object(c["g"])("div",Z,[(Object(c["n"])(!0),Object(c["f"])(c["a"],null,Object(c["s"])(a.skills,e=>(Object(c["n"])(),Object(c["f"])("div",{class:"skillsItem",key:e.name},[Object(c["g"])("div",D,[Object(c["g"])("p",K,Object(c["u"])(e.name),1),Object(c["g"])("p",J,Object(c["u"])(e.percent)+"%",1)]),Object(c["g"])("div",N,[Object(c["g"])("div",{class:Object(c["k"])(["bar",{view:a.isView}]),style:Object(c["l"])({width:e.percent+"%"})},null,6)])]))),128))])])],2)}var Q={setup(){const e=Object(c["q"])([{name:"HTML5",percent:90},{name:"CSS3",percent:90},{name:"JavaScript",percent:85},{name:"PHP",percent:90},{name:"MySQL",percent:75},{name:"Vue",percent:70},{name:"Python",percent:75},{name:"Git&GitHub",percent:90}]),t=Object(c["q"])([{name:"中原大學碩士班",time:"2020-2022"},{name:"憶旺智慧工程師",time:"2021-2022"},{name:"中原大學程式設計講師",time:"2021-2022"},{name:"Python程式設計家教",time:"2021"},{name:"中原大學多媒體程式設計助教",time:"2021-2022"},{name:"中原大學Python程式設計助教",time:"2021-2022"},{name:"李紹陽數學輔導老師",time:"2020-2021"},{name:"三星samsung活動督導",time:"2019-2020"}]),n=screen.height,a=Object(c["r"])(!1);return Object(c["m"])(()=>{const e=document.getElementById("skills").offsetTop;console.log(e),window.addEventListener("scroll",()=>{window.scrollY>=e-n/2&&(a.value=!0)})}),{skills:e,expriences:t,isView:a}}};n("9d0a");const X=i()(Q,[["render",G],["__scopeId","data-v-032ef6b2"]]);var $=X;const ee=e=>(Object(c["p"])("data-v-059883a6"),e=e(),Object(c["o"])(),e),te=ee(()=>Object(c["g"])("span",{class:"myTitle"},"MY WORK",-1)),ne={class:"workDiv"},ce={class:"workBox"},ae=["href"],oe=["src"];function se(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("div",{id:"work",class:Object(c["k"])({view:a.isView})},[te,Object(c["g"])("div",ne,[Object(c["g"])("div",ce,[(Object(c["n"])(!0),Object(c["f"])(c["a"],null,Object(c["s"])(a.wordArr,e=>(Object(c["n"])(),Object(c["f"])("a",{href:e.url,target:"_blank",class:"workItem",ref_for:!0,ref:"workItem",key:e.name},[Object(c["g"])("img",{src:e.src,alt:""},null,8,oe),Object(c["g"])("h2",null,Object(c["u"])(e.name),1),Object(c["g"])("p",null,Object(c["u"])(e.content),1)],8,ae))),128))])])],2)}var le={props:{},setup(){const e=Object(c["q"])([{url:"https://www.ice-finland.club/",src:n("3643"),name:"冰芬文教",content:"為冰芬文教架設形象網站"},{url:"https://www.ice-finland.club/cms",src:n("b70f"),name:"冰芬文教後台管理系統",content:"使用PHP架構冰芬文教後台管理系統"},{url:"https://adsarousal.com/",src:n("c102"),name:"碩士論文問卷系統",content:"使用PHP製作論文用問卷系統"},{url:"https://10994015.github.io/7zip/start.html",src:n("7ff1"),name:"七大罪遊戲",content:"製作七大原罪網頁小遊戲"},{url:"https://www.evoneic.com/",src:n("e8ed"),name:"憶旺智慧股份有限公司",content:"架設憶旺智慧公司形象網站"},{url:"https://carboncst.com/",src:n("9294"),name:"臺灣碳材料學會CST",content:"使用PHP架設臺灣碳材料學會前台與後台管理"},{url:"https://jiousaio.com/",src:n("4157"),name:"九霄空間設計JIOUSIAO",content:"架設九霄空間設計形象網站"},{url:"https://jiousaioshop.com/",src:n("a300"),name:"九霄模型",content:"使用WordPress架設模型購物網站"},{url:"https://jiousaio.com/marvel/",src:n("d0b0"),name:"中原大學衛保組漫威遊戲",content:"與中原大學衛保組合作製作網頁小遊戲及後台管理"},{url:"https://jiousaio.com/Lecture/",src:n("298b"),name:"中原大學衛保組魷魚遊戲",content:"與中原大學衛保組合作製作網頁小遊戲及後台管理"},{url:"https://10994015.github.io/tripleE/",src:n("315c"),name:"益康診所APP",content:"與益康診所合作架設診所關愛APP"},{url:"https://lichengyanchala.zyrosite.com/",src:n("ca1b"),name:"公仔網頁",content:"使用Zyro製作簡單公仔網頁"}]),t=Object(c["r"])(null),a=screen.height,o=Object(c["r"])(!1);return Object(c["m"])(()=>{const e=document.getElementById("work").offsetTop;console.log(e),window.addEventListener("scroll",()=>{window.scrollY>=e-a/2&&(o.value=!0)})}),{wordArr:e,workItem:t,isView:o}}};n("3f91");const ie=i()(le,[["render",se],["__scopeId","data-v-059883a6"]]);var re=ie,de=n("8100"),ue=n.n(de),pe=n("611a"),be=n.n(pe),je=n("e071"),Oe=n.n(je),ve=n("e352"),fe=n.n(ve),ge=n("abab"),he=n.n(ge),me=n("876a"),we=n.n(me),Me=n("45e8"),Ce=n.n(Me),ke=n("5299"),ye=n.n(ke);const xe=e=>(Object(c["p"])("data-v-29a403c3"),e=e(),Object(c["o"])(),e),Se={class:"awardsBox"},_e=xe(()=>Object(c["g"])("img",{src:ue.a,alt:""},null,-1)),Te=[_e],Ie=xe(()=>Object(c["g"])("img",{src:be.a,alt:""},null,-1)),Ve=[Ie],Be=xe(()=>Object(c["g"])("img",{src:Oe.a,alt:""},null,-1)),Pe=[Be],Le=xe(()=>Object(c["g"])("img",{src:fe.a,alt:""},null,-1)),Ae=[Le],Ee=xe(()=>Object(c["g"])("img",{src:he.a,alt:""},null,-1)),He=[Ee],Ye=xe(()=>Object(c["g"])("img",{src:we.a,alt:""},null,-1)),Fe=[Ye],qe=xe(()=>Object(c["g"])("img",{src:Ce.a,alt:""},null,-1)),ze=[qe],Re=xe(()=>Object(c["g"])("img",{src:ye.a,alt:""},null,-1)),Ue=[Re];function We(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("div",{id:"awards",class:Object(c["k"])({view:a.isView})},[Object(c["g"])("div",Se,[Object(c["g"])("span",{onClick:t[0]||(t[0]=e=>a.handOpenModule(e)),style:{"--i":"1"}},Te),Object(c["g"])("span",{onClick:t[1]||(t[1]=e=>a.handOpenModule(e)),style:{"--i":"2"}},Ve),Object(c["g"])("span",{onClick:t[2]||(t[2]=e=>a.handOpenModule(e)),style:{"--i":"3"}},Pe),Object(c["g"])("span",{onClick:t[3]||(t[3]=e=>a.handOpenModule(e)),style:{"--i":"4"}},Ae),Object(c["g"])("span",{onClick:t[4]||(t[4]=e=>a.handOpenModule(e)),style:{"--i":"5"}},He),Object(c["g"])("span",{onClick:t[5]||(t[5]=e=>a.handOpenModule(e)),style:{"--i":"6"}},Fe),Object(c["g"])("span",{onClick:t[6]||(t[6]=e=>a.handOpenModule(e)),style:{"--i":"7"}},ze),Object(c["g"])("span",{onClick:t[7]||(t[7]=e=>a.handOpenModule(e)),style:{"--i":"8"}},Ue)])],2)}var Ze={props:{isModule:{type:Boolean,default:!1},handOpenModule:{type:Function,default:()=>{}}},setup(e){const t=Object(c["c"])(()=>e.isModule),n=Object(c["c"])(()=>e.handOpenModule),a=screen.height,o=Object(c["r"])(!1);return Object(c["m"])(()=>{const e=document.getElementById("awards").offsetTop;console.log(e),window.addEventListener("scroll",()=>{window.scrollY>=e-a/2&&(o.value=!0)})}),{isModule:t,handOpenModule:n,isView:o}}};n("a295");const De=i()(Ze,[["render",We],["__scopeId","data-v-29a403c3"]]);var Ke=De;const Je=e=>(Object(c["p"])("data-v-65b9c2d2"),e=e(),Object(c["o"])(),e),Ne=Je(()=>Object(c["g"])("span",{class:"myTitle"},"CONTACT ME",-1)),Ge={class:"contactForm"};function Qe(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("div",{id:"contact",class:Object(c["k"])({view:a.isView})},[Ne,Object(c["g"])("div",Ge,[Object(c["y"])(Object(c["g"])("input",{type:"text",placeholder:"主旨","onUpdate:modelValue":t[0]||(t[0]=e=>a.data.title=e),ref:"title"},null,512),[[c["v"],a.data.title]]),Object(c["y"])(Object(c["g"])("input",{type:"text",placeholder:"姓名","onUpdate:modelValue":t[1]||(t[1]=e=>a.data.name=e),ref:"name"},null,512),[[c["v"],a.data.name]]),Object(c["y"])(Object(c["g"])("input",{type:"text",placeholder:"E-mail","onUpdate:modelValue":t[2]||(t[2]=e=>a.data.email=e),ref:"email"},null,512),[[c["v"],a.data.email]]),Object(c["y"])(Object(c["g"])("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":t[3]||(t[3]=e=>a.data.content=e),ref:"content",placeholder:"內容..."},null,512),[[c["v"],a.data.content]]),Object(c["g"])("button",{onClick:t[4]||(t[4]=(...e)=>a.handSubmit&&a.handSubmit(...e))},"送出")])],2)}n("bc3a");var Xe={setup(){const e=Object(c["r"])(null),t=Object(c["r"])(null),n=Object(c["r"])(null),a=Object(c["r"])(null),o=Object(c["q"])({title:"",name:"",email:"",content:""});const s=()=>{let c=new FormData;c.append("title",e.value),c.append("name",t.value),c.append("email",n.value),c.append("content",a.value)},l=screen.height,i=Object(c["r"])(!1);return Object(c["m"])(()=>{const e=document.getElementById("contact").offsetTop;console.log(e),window.addEventListener("scroll",()=>{window.scrollY>=e-l/2&&(i.value=!0)})}),{data:o,handSubmit:s,title:e,name:t,email:n,content:a,isView:i}}};n("5561");const $e=i()(Xe,[["render",Qe],["__scopeId","data-v-65b9c2d2"]]);var et=$e;const tt=e=>(Object(c["p"])("data-v-b9900e0a"),e=e(),Object(c["o"])(),e),nt={id:"footer"},ct=tt(()=>Object(c["g"])("h3",null,[Object(c["i"])("Copyright @2022 "),Object(c["g"])("a",{href:"./"},"LiChengYan"),Object(c["i"])(" All Rights Reserved.")],-1)),at=[ct];function ot(e,t,n,a,o,s){return Object(c["n"])(),Object(c["f"])("footer",nt,at)}var st={};n("04d3");const lt=i()(st,[["render",ot],["__scopeId","data-v-b9900e0a"]]);var it=lt;const rt={id:"module"},dt={class:"imgBox"},ut=["src"];function pt(e,t,n,a,o,s){return Object(c["y"])((Object(c["n"])(),Object(c["f"])("div",rt,[Object(c["g"])("div",{class:"back",onClick:t[0]||(t[0]=(...e)=>a.handCloseModule&&a.handCloseModule(...e))}),Object(c["g"])("div",dt,[Object(c["g"])("i",{class:"fas fa-times",id:"close",onClick:t[1]||(t[1]=(...e)=>a.handCloseModule&&a.handCloseModule(...e))}),Object(c["g"])("img",{src:a.isModuleSrc,alt:""},null,8,ut)])],512)),[[c["w"],a.isModule]])}var bt={props:{isModule:{type:Boolean,default:!1},isModuleSrc:{type:String,default:""},handCloseModule:{type:Function,default:()=>{}}},setup(e){const t=Object(c["c"])(()=>e.isModule),n=Object(c["c"])(()=>e.isModuleSrc),a=Object(c["c"])(()=>e.handCloseModule);return{isModule:t,isModuleSrc:n,handCloseModule:a}}};n("f3a2");const jt=i()(bt,[["render",pt],["__scopeId","data-v-d4932456"]]);var Ot=jt;const vt=e=>(Object(c["p"])("data-v-0fa007d2"),e=e(),Object(c["o"])(),e),ft=vt(()=>Object(c["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-up",viewBox:"0 0 16 16"},[Object(c["g"])("path",{"fill-rule":"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})],-1)),gt=[ft];function ht(e,t,n,a,o,s){return Object(c["n"])(),Object(c["e"])(c["b"],{name:"v"},{default:Object(c["x"])(()=>[Object(c["y"])(Object(c["g"])("div",{id:"scrollTop",onClick:t[0]||(t[0]=(...e)=>a.toTop&&a.toTop(...e)),class:Object(c["k"])({view:a.toTopView})},gt,2),[[c["w"],a.toTopView]])]),_:1})}var mt={setup(){const e=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},t=Object(c["r"])(!1);return window.addEventListener("scroll",()=>{window.scrollY>500?t.value=!0:t.value=!1}),{toTop:e,toTopView:t}}};n("9e95");const wt=i()(mt,[["render",ht],["__scopeId","data-v-0fa007d2"]]);var Mt=wt,Ct={components:{Sidebar:d,Header:v,Banner:V,About:F,Skills:$,Work:re,Awards:Ke,Contact:et,Footer:it,Module:Ot,ScrollTop:Mt},setup(){const e=Object(c["r"])(!1),t=()=>{e.value=!0},n=()=>{e.value=!1},a=Object(c["r"])(!1),o=Object(c["r"])(""),s=e=>{a.value=!0,o.value=e.target.src},l=e=>{a.value=!1,o.value=""};return{isOpen:e,handMenuOpen:t,handMenuClose:n,isModule:a,handOpenModule:s,handCloseModule:l,isModuleSrc:o}}};n("0755");const kt=i()(Ct,[["render",a]]);var yt=kt;Object(c["d"])(yt).mount("#app")},"611a":function(e,t,n){e.exports=n.p+"img/02.38fb5942.jpg"},"6f26":function(e,t,n){},"7ff1":function(e,t,n){e.exports=n.p+"img/seven.c2476830.jpg"},8100:function(e,t,n){e.exports=n.p+"img/01.ae13b6d9.jpg"},"876a":function(e,t,n){e.exports=n.p+"img/06.87138f61.jpg"},"8a40":function(e,t,n){"use strict";n("0b4c")},9294:function(e,t,n){e.exports=n.p+"img/cst.80565f17.jpg"},"9d0a":function(e,t,n){"use strict";n("adf7")},"9e95":function(e,t,n){"use strict";n("9e96")},"9e96":function(e,t,n){},a293:function(e,t,n){},a295:function(e,t,n){"use strict";n("f1b6")},a300:function(e,t,n){e.exports=n.p+"img/jiousaioshop.9abb2839.jpg"},abab:function(e,t,n){e.exports=n.p+"img/05.0cedf0d0.jpg"},adf7:function(e,t,n){},b034:function(e,t,n){"use strict";n("b8b0")},b206:function(e,t,n){},b70f:function(e,t,n){e.exports=n.p+"img/colorfulcms.cfb3ece4.jpg"},b8b0:function(e,t,n){},bc25:function(e,t,n){e.exports=n.p+"img/about.474112ce.jpg"},c102:function(e,t,n){e.exports=n.p+"img/ads.2f208c9d.jpg"},c171:function(e,t,n){},ca1b:function(e,t,n){e.exports=n.p+"img/doll.d9a436a2.jpg"},d0b0:function(e,t,n){e.exports=n.p+"img/marvel.dbb4405c.jpg"},e071:function(e,t,n){e.exports=n.p+"img/03.f865881c.jpg"},e18e:function(e,t,n){},e352:function(e,t,n){e.exports=n.p+"img/04.70446054.jpg"},e8ed:function(e,t,n){e.exports=n.p+"img/evone.dafbb81e.jpg"},f1b6:function(e,t,n){},f3a2:function(e,t,n){"use strict";n("0566")}});
//# sourceMappingURL=app.22b3b9e7.js.map