(function(e){function t(t){for(var r,a,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5e548d25"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"eee00f36"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vuetify-and-firebase-online-chat/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("router-view")],1)],1)},i=[],u=n("2877"),c=n("6544"),l=n.n(c),s=n("7496"),f={},p=Object(u["a"])(f,o,i,!1,null,null,null),d=p.exports;l()(p,{VApp:s["a"]});n("7f7f");var m=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-toolbar",{attrs:{color:"indigo",dark:""}},[n("v-toolbar-title",[e._v("Welcome")]),n("v-spacer"),n("v-icon",[e._v("favorite")])],1),n("v-card",{staticClass:"pa-3"},[n("v-form",{ref:"form"},[n("v-text-field",{attrs:{name:"name",label:"Enter your name",rules:e.inputRules,required:"",light:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-btn",{attrs:{dark:"",color:"indigo"},on:{click:e.enterChat}},[e._v("Enter chat")])],1)],1)],1)],1)],1)},v=[],b={data:function(){return{name:"",inputRules:[function(e){return!!e||"Name is required"},function(e){return e.length>=3||"Minimum character is 3"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}]}},methods:{enterChat:function(){this.$refs.form.validate()&&this.$router.push({name:"Chat",params:{name:this.name}})}}},g=b,y=n("8336"),w=n("b0af"),x=n("a5238"),_=n("0e8f"),j=n("4bd4"),C=n("132d"),E=n("a722"),S=n("9910"),k=n("2677"),O=n("71d9"),T=n("2a7f"),V=Object(u["a"])(g,h,v,!1,null,null,null),A=V.exports;l()(V,{VBtn:y["a"],VCard:w["a"],VContainer:x["a"],VFlex:_["a"],VForm:j["a"],VIcon:C["a"],VLayout:E["a"],VSpacer:S["a"],VTextField:k["a"],VToolbar:O["a"],VToolbarTitle:T["a"]}),r["a"].use(m["a"]);var P=new m["a"]({mode:"history",base:"/vuetify-and-firebase-online-chat/",routes:[{path:"/",name:"Welcome",component:A},{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"e6b0"))},props:!0,beforeEnter:function(e,t,n){e.params.name?n():n({name:"Welcome"})}}]}),N=n("9c4e"),B=n.n(N),F=n("123d"),L=n.n(F),M=n("8aa5"),q=n.n(M);r["a"].use(L.a),n("e71f");var I={apiKey:"AIzaSyBuziWRqM0nGjtS-tQuAFhwFg6gv-p-3QY",authDomain:"vuetify-chat-25ef1.firebaseapp.com",databaseURL:"https://vuetify-chat-25ef1.firebaseio.com",projectId:"vuetify-chat-25ef1",storageBucket:"vuetify-chat-25ef1.appspot.com",messagingSenderId:"112789511492"};q.a.initializeApp(I);var $=q.a.firestore();window.db=$,r["a"].use(B.a),r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.8a9fb202.js.map