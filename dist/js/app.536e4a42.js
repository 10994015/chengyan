(function(e){function t(t){for(var n,s,l=t[0],r=t[1],i=t[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&p.push(c[s][0]),c[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var r=a[l];0!==c[r]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},c={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/chengyen/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=r;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"04d3":function(e,t,a){"use strict";a("e18e")},1057:function(e,t,a){"use strict";a("23b7")},"1dfe":function(e,t,a){},"23b7":function(e,t,a){},"23e6":function(e,t,a){e.exports=a.p+"img/about6.1e6f4481.jpg"},2867:function(e,t,a){},"28ac":function(e,t,a){e.exports=a.p+"img/about5.60730653.jpg"},"298b":function(e,t,a){e.exports=a.p+"img/lecture.1226c2dd.jpg"},"315c":function(e,t,a){e.exports=a.p+"img/yikang.f9d16b07.jpg"},3643:function(e,t,a){e.exports=a.p+"img/colorful.b17b8729.jpg"},"3aeb":function(e,t,a){},4157:function(e,t,a){e.exports=a.p+"img/jiousaio.a5412752.jpg"},4303:function(e,t,a){},"50dc":function(e,t,a){"use strict";a("3aeb")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function c(e,t,a,c,o,s){const l=Object(n["s"])("Sidebar"),r=Object(n["s"])("Header"),i=Object(n["s"])("Banner"),u=Object(n["s"])("About"),d=Object(n["s"])("Work"),p=Object(n["s"])("Skills"),b=Object(n["s"])("Awards"),v=Object(n["s"])("Contact"),j=Object(n["s"])("Footer"),O=Object(n["s"])("Module"),f=Object(n["s"])("ScrollTop");return Object(n["m"])(),Object(n["f"])(n["a"],null,[Object(n["j"])(l,{isopen:c.isOpen,handMenuClose:c.handMenuClose},null,8,["isopen","handMenuClose"]),Object(n["j"])(r,{isopen:c.isOpen,handMenuOpen:c.handMenuOpen},null,8,["isopen","handMenuOpen"]),Object(n["g"])("div",{id:"main",class:Object(n["k"])({darken:c.isOpen})},[Object(n["j"])(i),Object(n["j"])(u),Object(n["j"])(d),Object(n["j"])(p),Object(n["j"])(b,{isModule:c.isModule,handOpenModule:c.handOpenModule},null,8,["isModule","handOpenModule"]),Object(n["j"])(v),Object(n["j"])(j),Object(n["j"])(O,{isModule:c.isModule,handCloseModule:c.handCloseModule,isModuleSrc:c.isModuleSrc},null,8,["isModule","handCloseModule","isModuleSrc"]),Object(n["j"])(f)],2)],64)}function o(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("div",{id:"sidebar",class:Object(n["k"])({open:c.props.isopen})},[Object(n["g"])("i",{class:"fas fa-times",id:"close",onClick:t[0]||(t[0]=(...e)=>c.props.handMenuClose&&c.props.handMenuClose(...e))}),Object(n["g"])("ul",null,[Object(n["g"])("a",{href:"javascript:;",onClick:t[1]||(t[1]=e=>c.scrollFn(0)),class:Object(n["k"])({focus:c.home,open:c.props.isopen})},"HOME",2),Object(n["g"])("a",{href:"javascript:;",onClick:t[2]||(t[2]=e=>c.scrollFn(730)),class:Object(n["k"])({focus:c.about,open:c.props.isopen})},"ABOUT",2),Object(n["g"])("a",{href:"javascript:;",onClick:t[3]||(t[3]=e=>c.scrollFn(1420)),class:Object(n["k"])({focus:c.work,open:c.props.isopen})},"WORKS",2),Object(n["g"])("a",{href:"javascript:;",onClick:t[4]||(t[4]=e=>c.scrollFn(2670)),class:Object(n["k"])({focus:c.skills,open:c.props.isopen})},"SKILLS",2),Object(n["g"])("a",{href:"javascript:;",onClick:t[5]||(t[5]=e=>c.scrollFn(3408)),class:Object(n["k"])({focus:c.awards,open:c.props.isopen})},"AWARDS",2),Object(n["g"])("a",{href:"javascript:;",onClick:t[6]||(t[6]=e=>c.scrollFn(4200)),class:Object(n["k"])({focus:c.contact,open:c.props.isopen})},"CONTACT",2)])],2)}var s={props:{isopen:{type:Boolean,default:!1},handMenuClose:{type:Function,default:()=>{}}},setup(e){const t=Object(n["q"])(!0),a=Object(n["q"])(!1),c=Object(n["q"])(!1),o=Object(n["q"])(!1),s=Object(n["q"])(!1),l=Object(n["q"])(!1);window.addEventListener("scroll",()=>{window.scrollY<500?(t.value=!0,a.value=!1,c.value=!1,o.value=!1,s.value=!1,l.value=!1):window.scrollY>=500&&window.scrollY<1200?(t.value=!1,a.value=!0,c.value=!1,o.value=!1,s.value=!1,l.value=!1):window.scrollY>=1200&&window.scrollY<2300?(t.value=!1,a.value=!1,c.value=!0,o.value=!1,s.value=!1,l.value=!1):window.scrollY>=2300&&window.scrollY<3200?(t.value=!1,a.value=!1,c.value=!1,o.value=!0,s.value=!1,l.value=!1):window.scrollY>=3200&&window.scrollY<3900?(t.value=!1,a.value=!1,c.value=!1,o.value=!1,s.value=!0,l.value=!1):window.scrollY>=3900&&(t.value=!1,a.value=!1,c.value=!1,o.value=!1,s.value=!1,l.value=!0)});const r=e=>{document.body.scrollTop=e,document.documentElement.scrollTop=e};return{props:e,home:t,about:a,work:c,skills:o,awards:s,contact:l,scrollFn:r}}},l=(a("64eb"),a("6b0d")),r=a.n(l);const i=r()(s,[["render",o],["__scopeId","data-v-1db0e19e"]]);var u=i;const d=e=>(Object(n["o"])("data-v-1a20b722"),e=e(),Object(n["n"])(),e),p=d(()=>Object(n["g"])("a",{href:"javascript:;",id:"logo"},"LiChengYan",-1));function b(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("header",{id:"header",class:Object(n["k"])({darken:c.props.isopen})},[p,Object(n["g"])("i",{class:"fas fa-bars",id:"menu",onClick:t[0]||(t[0]=(...e)=>c.props.handMenuOpen&&c.props.handMenuOpen(...e))})],2)}var v={props:{isopen:{type:Boolean,default:!1},handMenuOpen:{type:Function,default:()=>{}}},setup(e){return console.log(e),{props:e}}};a("ddd5");const j=r()(v,[["render",b],["__scopeId","data-v-1a20b722"]]);var O=j,f=a("bc25"),m=a.n(f),g=a("23e6"),h=a.n(g);const w=e=>(Object(n["o"])("data-v-b95b8688"),e=e(),Object(n["n"])(),e),M={id:"banner"},C={src:m.a,class:"bannerImg"},x={src:h.a,class:"bannerImg"},y={class:"text open"},k=w(()=>Object(n["g"])("h2",null,"Li-Cheng Yan",-1)),S=w(()=>Object(n["g"])("p",null,"I come from Taoyuan",-1));function T(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("div",M,[Object(n["x"])(Object(n["g"])("img",C,null,512),[[n["v"],c.view]]),Object(n["x"])(Object(n["g"])("img",x,null,512),[[n["v"],!c.view]]),Object(n["g"])("div",y,[k,S,Object(n["g"])("i",{class:"fa-sharp fa-solid fa-chevron-down",id:"seemore",onClick:t[0]||(t[0]=(...e)=>c.downFn&&c.downFn(...e))})])])}var _={setup(){const e=Object(n["q"])(!1),t=Object(n["q"])(1);setInterval(()=>{t.value++,10===t.value&&(e.value=!e.value),t.value>=10&&(t.value=1)},1e3);const a=()=>{document.body.scrollTop=730,document.documentElement.scrollTop=730};return{view:e,downFn:a}}};a("dbc3");const q=r()(_,[["render",T],["__scopeId","data-v-b95b8688"]]);var P=q,I=a("28ac"),A=a.n(I);const F={id:"about"},B=Object(n["h"])('<div class="imgBox" data-v-31a60898><img src="'+A.a+'" class="aboutImg" data-v-31a60898></div><div class="content" data-v-31a60898><span class="myTitle" data-v-31a60898>MY INTRO</span><h2 class="aboutMe" data-v-31a60898>About Me</h2><ul class="intro" data-v-31a60898><li data-v-31a60898>熱愛嘗試新的事物</li><li data-v-31a60898>善於溝通和分享新知</li><li data-v-31a60898>具備開放積極的特質</li></ul><div class="basic" data-v-31a60898><p class="question" data-v-31a60898>姓名:</p><p class="answer" data-v-31a60898>李承諺(Li-Cheng Yan)</p></div><div class="basic" data-v-31a60898><p class="question" data-v-31a60898>出生日期:</p><p class="answer" data-v-31a60898>1997/08/22</p></div><div class="basic" data-v-31a60898><p class="question" data-v-31a60898>家鄉:</p><p class="answer" data-v-31a60898>桃園市桃園區</p></div><div class="basic" data-v-31a60898><p class="question" data-v-31a60898>電子郵件:</p><p class="answer" data-v-31a60898>a0938599191@gmail.com</p></div><div class="basic" data-v-31a60898><p class="question" data-v-31a60898>手機號碼:</p><p class="answer" data-v-31a60898>0938599191</p></div><div class="icon" data-v-31a60898><a href="https://www.facebook.com/profile.php?id=100002935953804" data-v-31a60898><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" data-v-31a60898><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" data-v-31a60898></path></svg></a><a href="https://www.instagram.com/14___2/" data-v-31a60898><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" data-v-31a60898><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" data-v-31a60898></path></svg></a><a href="https://line.me/ti/p/jm4Sa6RLqK" data-v-31a60898><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-line" viewBox="0 0 16 16" data-v-31a60898><path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" data-v-31a60898></path></svg></a></div><a href="javascript:;" class="downloadCV" data-v-31a60898>Download CV</a></div>',2),L=[B];function R(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("div",F,L)}var Y={setup(){return{}}};a("7f70");const H=r()(Y,[["render",R],["__scopeId","data-v-31a60898"]]);var V=H;const E=e=>(Object(n["o"])("data-v-34424a73"),e=e(),Object(n["n"])(),e),z={id:"skills"},U=E(()=>Object(n["g"])("span",{class:"myTitle"},"MY expriences & SKILLS",-1)),W={class:"content"},Z={class:"expriences"},D={class:"content"},J={class:"skillsBox"},K={class:"title"},X={class:"name"},N={class:"percent"},G={class:"skillsBar"};function $(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("div",z,[U,Object(n["g"])("div",W,[Object(n["g"])("div",Z,[Object(n["g"])("div",D,[(Object(n["m"])(!0),Object(n["f"])(n["a"],null,Object(n["r"])(c.expriences,e=>(Object(n["m"])(),Object(n["f"])("div",{class:"item",key:e.name},[Object(n["g"])("li",null,Object(n["t"])(e.name),1),Object(n["g"])("p",null,Object(n["t"])(e.time),1)]))),128))])]),Object(n["g"])("div",J,[(Object(n["m"])(!0),Object(n["f"])(n["a"],null,Object(n["r"])(c.skills,e=>(Object(n["m"])(),Object(n["f"])("div",{class:"skillsItem",key:e.name},[Object(n["g"])("div",K,[Object(n["g"])("p",X,Object(n["t"])(e.name),1),Object(n["g"])("p",N,Object(n["t"])(e.percent)+"%",1)]),Object(n["g"])("div",G,[Object(n["g"])("div",{class:"bar",style:Object(n["l"])({width:e.percent+"%"})},null,4)])]))),128))])])])}var Q={setup(){const e=Object(n["p"])([{name:"HTML5",percent:90},{name:"CSS3",percent:90},{name:"JavaScript",percent:85},{name:"PHP",percent:90},{name:"MySQL",percent:75},{name:"Vue",percent:60},{name:"Python",percent:75},{name:"Git&GitHub",percent:90}]),t=Object(n["p"])([{name:"中原大學碩士班",time:"2020-2022"},{name:"憶旺智慧工程師",time:"2021-2022"},{name:"中原大學程式設計講師",time:"2021-2022"},{name:"Python程式設計家教",time:"2021"},{name:"中原大學多媒體程式設計助教",time:"2021-2022"},{name:"中原大學Python程式設計助教",time:"2021-2022"},{name:"李紹陽數學輔導老師",time:"2020-2021"},{name:"三星samsung活動督導",time:"2019-2020"}]);return{skills:e,expriences:t}}};a("50dc");const ee=r()(Q,[["render",$],["__scopeId","data-v-34424a73"]]);var te=ee;const ae=e=>(Object(n["o"])("data-v-8e7a4d86"),e=e(),Object(n["n"])(),e),ne={id:"work"},ce=ae(()=>Object(n["g"])("span",{class:"myTitle"},"MY WORK",-1)),oe={class:"workDiv"},se={class:"workBox"},le=["href"],re=["src"];function ie(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("div",ne,[ce,Object(n["g"])("div",oe,[Object(n["g"])("div",se,[(Object(n["m"])(!0),Object(n["f"])(n["a"],null,Object(n["r"])(c.wordArr,e=>(Object(n["m"])(),Object(n["f"])("a",{href:e.url,target:"_blank",class:"workItem",ref_for:!0,ref:"workItem",key:e.name},[Object(n["g"])("img",{src:e.src,alt:""},null,8,re),Object(n["g"])("h2",null,Object(n["t"])(e.name),1),Object(n["g"])("p",null,Object(n["t"])(e.content),1)],8,le))),128))])])])}var ue={setup(){const e=Object(n["p"])([{url:"https://www.ice-finland.club/",src:a("3643"),name:"冰芬文教",content:"為冰芬文教架設形象網站"},{url:"https://www.ice-finland.club/cms",src:a("b70f"),name:"冰芬文教後台管理系統",content:"使用PHP架構冰芬文教後台管理系統"},{url:"https://www.evoneic.com/",src:a("e8ed"),name:"憶旺智慧股份有限公司",content:"架設憶旺智慧公司形象網站"},{url:"https://carboncst.com/",src:a("9294"),name:"臺灣碳材料學會CST",content:"使用PHP架設臺灣碳材料學會前台與後台管理"},{url:"https://jiousaio.com/",src:a("4157"),name:"九霄空間設計JIOUSIAO",content:"架設九霄空間設計形象網站"},{url:"https://jiousaioshop.com/",src:a("a300"),name:"九霄模型",content:"使用WordPress架設模型購物網站"},{url:"https://jiousaio.com/Lecture/",src:a("298b"),name:"中原大學衛保組魷魚遊戲",content:"與中原大學衛保組合作製作網頁小遊戲及後台管理"},{url:"https://jiousaio.com/marvel/",src:a("d0b0"),name:"中原大學衛保組漫威遊戲",content:"與中原大學衛保組合作製作網頁小遊戲及後台管理"},{url:"https://10994015.github.io/7zip/",src:a("7ff1"),name:"七大罪遊戲",content:"製作七大原罪網頁小遊戲"},{url:"https://10994015.github.io/tripleE/",src:a("315c"),name:"益康診所APP",content:"與益康診所合作架設診所關愛APP"},{url:"https://adsarousal.com/",src:a("c102"),name:"碩士論文問卷系統",content:"使用PHP製作論文用問卷系統"},{url:"https://lichengyanchala.zyrosite.com/",src:a("ca1b"),name:"公仔網頁",content:"使用Zyro製作簡單公仔網頁"}]),t=Object(n["q"])(null),c=Object(n["q"])(0),o=()=>{c.value++,c.value>2&&(c.value=0);for(let e=0;e<=t.value.length;e++)t.value[e].style.transform=`translateX(${-1100*c.value}px)`},s=()=>{c.value--,c.value<0&&(c.value=2);for(let e=0;e<=t.value.length;e++)t.value[e].style.transform=`translateX(${-1100*c.value}px)`};return{wordArr:e,num:c,handAddFn:o,handRemoveFn:s,workItem:t}}};a("1057");const de=r()(ue,[["render",ie],["__scopeId","data-v-8e7a4d86"]]);var pe=de,be=a("8100"),ve=a.n(be),je=a("611a"),Oe=a.n(je),fe=a("e071"),me=a.n(fe),ge=a("e352"),he=a.n(ge),we=a("abab"),Me=a.n(we);const Ce=e=>(Object(n["o"])("data-v-70e551dc"),e=e(),Object(n["n"])(),e),xe={id:"awards"},ye={class:"awardsBox"},ke=Ce(()=>Object(n["g"])("img",{src:ve.a,alt:""},null,-1)),Se=[ke],Te=Ce(()=>Object(n["g"])("img",{src:Oe.a,alt:""},null,-1)),_e=[Te],qe=Ce(()=>Object(n["g"])("img",{src:me.a,alt:""},null,-1)),Pe=[qe],Ie=Ce(()=>Object(n["g"])("img",{src:he.a,alt:""},null,-1)),Ae=[Ie],Fe=Ce(()=>Object(n["g"])("img",{src:Me.a,alt:""},null,-1)),Be=[Fe],Le=Ce(()=>Object(n["g"])("img",{src:me.a,alt:""},null,-1)),Re=[Le],Ye=Ce(()=>Object(n["g"])("img",{src:he.a,alt:""},null,-1)),He=[Ye],Ve=Ce(()=>Object(n["g"])("img",{src:Me.a,alt:""},null,-1)),Ee=[Ve];function ze(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("div",xe,[Object(n["g"])("div",ye,[Object(n["g"])("span",{onClick:t[0]||(t[0]=e=>c.handOpenModule(e)),style:{"--i":"1"}},Se),Object(n["g"])("span",{onClick:t[1]||(t[1]=e=>c.handOpenModule(e)),style:{"--i":"2"}},_e),Object(n["g"])("span",{onClick:t[2]||(t[2]=e=>c.handOpenModule(e)),style:{"--i":"3"}},Pe),Object(n["g"])("span",{onClick:t[3]||(t[3]=e=>c.handOpenModule(e)),style:{"--i":"4"}},Ae),Object(n["g"])("span",{onClick:t[4]||(t[4]=e=>c.handOpenModule(e)),style:{"--i":"5"}},Be),Object(n["g"])("span",{onClick:t[5]||(t[5]=e=>c.handOpenModule(e)),style:{"--i":"6"}},Re),Object(n["g"])("span",{onClick:t[6]||(t[6]=e=>c.handOpenModule(e)),style:{"--i":"7"}},He),Object(n["g"])("span",{onClick:t[7]||(t[7]=e=>c.handOpenModule(e)),style:{"--i":"8"}},Ee)])])}var Ue={props:{isModule:{type:Boolean,default:!1},handOpenModule:{type:Function,default:()=>{}}},setup(e){const t=Object(n["c"])(()=>e.isModule),a=Object(n["c"])(()=>e.handOpenModule);return{isModule:t,handOpenModule:a}}};a("fc86");const We=r()(Ue,[["render",ze],["__scopeId","data-v-70e551dc"]]);var Ze=We;const De=e=>(Object(n["o"])("data-v-acdfc0de"),e=e(),Object(n["n"])(),e),Je={id:"contact"},Ke=De(()=>Object(n["g"])("span",{class:"myTitle"},"CONTACT ME",-1)),Xe={class:"contactForm"};function Ne(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("div",Je,[Ke,Object(n["g"])("div",Xe,[Object(n["x"])(Object(n["g"])("input",{type:"text",placeholder:"主旨","onUpdate:modelValue":t[0]||(t[0]=e=>c.data.title=e)},null,512),[[n["u"],c.data.title]]),Object(n["x"])(Object(n["g"])("input",{type:"text",placeholder:"姓名","onUpdate:modelValue":t[1]||(t[1]=e=>c.data.name=e)},null,512),[[n["u"],c.data.name]]),Object(n["x"])(Object(n["g"])("input",{type:"text",placeholder:"E-mail","onUpdate:modelValue":t[2]||(t[2]=e=>c.data.email=e)},null,512),[[n["u"],c.data.email]]),Object(n["x"])(Object(n["g"])("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":t[3]||(t[3]=e=>c.data.content=e),placeholder:"內容..."},null,512),[[n["u"],c.data.content]]),Object(n["g"])("button",{onClick:t[4]||(t[4]=(...e)=>c.handSubmit&&c.handSubmit(...e))},"送出")])])}a("bc3a");var Ge={send:function(e){return new Promise((function(t,a){e.nocache=Math.floor(1e6*Math.random()+1),e.Action="Send";var n=JSON.stringify(e);Ge.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?",n,(function(e){t(e)}))}))},ajaxPost:function(e,t,a){var n=Ge.createCORSRequest("POST",e);n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onload=function(){var e=n.responseText;null!=a&&a(e)},n.send(t)},ajax:function(e,t){var a=Ge.createCORSRequest("GET",e);a.onload=function(){var e=a.responseText;null!=t&&t(e)},a.send()},createCORSRequest:function(e,t){var a=new XMLHttpRequest;return"withCredentials"in a?a.open(e,t,!0):"undefined"!=typeof XDomainRequest?(a=new XDomainRequest).open(e,t):a=null,a}},$e=Ge,Qe={setup(){console.log($e);const e=Object(n["p"])({title:"",name:"",email:"",content:""});const t=()=>{$e.send({SecureToken:"c4a9e729-3af3-48ac-8799-b7f38b7853a7",To:"a0938599191@gmail.com",From:"a0938599191@gmail.com",Subject:"主旨",Body:"內容"}).then(e=>alert(e))},a=()=>{t()};return{data:e,handSubmit:a}}};a("b9a9");const et=r()(Qe,[["render",Ne],["__scopeId","data-v-acdfc0de"]]);var tt=et;const at=e=>(Object(n["o"])("data-v-b9900e0a"),e=e(),Object(n["n"])(),e),nt={id:"footer"},ct=at(()=>Object(n["g"])("h3",null,[Object(n["i"])("Copyright @2022 "),Object(n["g"])("a",{href:"./"},"LiChengYan"),Object(n["i"])(" All Rights Reserved.")],-1)),ot=[ct];function st(e,t,a,c,o,s){return Object(n["m"])(),Object(n["f"])("footer",nt,ot)}var lt={};a("04d3");const rt=r()(lt,[["render",st],["__scopeId","data-v-b9900e0a"]]);var it=rt;const ut={id:"module"},dt={class:"imgBox"},pt=["src"];function bt(e,t,a,c,o,s){return Object(n["x"])((Object(n["m"])(),Object(n["f"])("div",ut,[Object(n["g"])("div",dt,[Object(n["g"])("i",{class:"fas fa-times",id:"close",onClick:t[0]||(t[0]=(...e)=>c.handCloseModule&&c.handCloseModule(...e))}),Object(n["g"])("img",{src:c.isModuleSrc,alt:""},null,8,pt)])],512)),[[n["v"],c.isModule]])}var vt={props:{isModule:{type:Boolean,default:!1},isModuleSrc:{type:String,default:""},handCloseModule:{type:Function,default:()=>{}}},setup(e){const t=Object(n["c"])(()=>e.isModule),a=Object(n["c"])(()=>e.isModuleSrc),c=Object(n["c"])(()=>e.handCloseModule);return{isModule:t,isModuleSrc:a,handCloseModule:c}}};a("ab02");const jt=r()(vt,[["render",bt],["__scopeId","data-v-56fcc30b"]]);var Ot=jt;const ft=e=>(Object(n["o"])("data-v-0fa007d2"),e=e(),Object(n["n"])(),e),mt=ft(()=>Object(n["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-up",viewBox:"0 0 16 16"},[Object(n["g"])("path",{"fill-rule":"evenodd",d:"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"})],-1)),gt=[mt];function ht(e,t,a,c,o,s){return Object(n["m"])(),Object(n["e"])(n["b"],{name:"v"},{default:Object(n["w"])(()=>[Object(n["x"])(Object(n["g"])("div",{id:"scrollTop",onClick:t[0]||(t[0]=(...e)=>c.toTop&&c.toTop(...e)),class:Object(n["k"])({view:c.toTopView})},gt,2),[[n["v"],c.toTopView]])]),_:1})}var wt={setup(){const e=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0},t=Object(n["q"])(!1);return window.addEventListener("scroll",()=>{window.scrollY>500?t.value=!0:t.value=!1}),{toTop:e,toTopView:t}}};a("9e95");const Mt=r()(wt,[["render",ht],["__scopeId","data-v-0fa007d2"]]);var Ct=Mt,xt={components:{Sidebar:u,Header:O,Banner:P,About:V,Skills:te,Work:pe,Awards:Ze,Contact:tt,Footer:it,Module:Ot,ScrollTop:Ct},setup(){const e=Object(n["q"])(!1),t=()=>{e.value=!0},a=()=>{e.value=!1},c=Object(n["q"])(!1),o=Object(n["q"])(""),s=e=>{c.value=!0,o.value=e.target.src},l=e=>{c.value=!1,o.value=""};return{isOpen:e,handMenuOpen:t,handMenuClose:a,isModule:c,handOpenModule:s,handCloseModule:l,isModuleSrc:o}}};a("6842");const yt=r()(xt,[["render",c]]);var kt=yt;Object(n["d"])(kt).mount("#app")},"5e10":function(e,t,a){},"611a":function(e,t,a){e.exports=a.p+"img/02.38fb5942.jpg"},"64eb":function(e,t,a){"use strict";a("f87e")},6842:function(e,t,a){"use strict";a("903a")},"7f70":function(e,t,a){"use strict";a("ae1f")},"7ff1":function(e,t,a){e.exports=a.p+"img/seven.c2476830.jpg"},8100:function(e,t,a){e.exports=a.p+"img/01.ae13b6d9.jpg"},"903a":function(e,t,a){},9294:function(e,t,a){e.exports=a.p+"img/cst.80565f17.jpg"},"9e95":function(e,t,a){"use strict";a("9e96")},"9e96":function(e,t,a){},a300:function(e,t,a){e.exports=a.p+"img/jiousaioshop.9abb2839.jpg"},ab02:function(e,t,a){"use strict";a("b6a4")},abab:function(e,t,a){e.exports=a.p+"img/05.0cedf0d0.jpg"},ae1f:function(e,t,a){},b6a4:function(e,t,a){},b70f:function(e,t,a){e.exports=a.p+"img/colorfulcms.cfb3ece4.jpg"},b9a9:function(e,t,a){"use strict";a("2867")},bc25:function(e,t,a){e.exports=a.p+"img/about.474112ce.jpg"},c102:function(e,t,a){e.exports=a.p+"img/ads.2f208c9d.jpg"},ca1b:function(e,t,a){e.exports=a.p+"img/doll.d9a436a2.jpg"},d0b0:function(e,t,a){e.exports=a.p+"img/marvel.dbb4405c.jpg"},dbc3:function(e,t,a){"use strict";a("4303")},ddd5:function(e,t,a){"use strict";a("1dfe")},e071:function(e,t,a){e.exports=a.p+"img/03.f865881c.jpg"},e18e:function(e,t,a){},e352:function(e,t,a){e.exports=a.p+"img/04.70446054.jpg"},e8ed:function(e,t,a){e.exports=a.p+"img/evone.dafbb81e.jpg"},f87e:function(e,t,a){},fc86:function(e,t,a){"use strict";a("5e10")}});
//# sourceMappingURL=app.536e4a42.js.map