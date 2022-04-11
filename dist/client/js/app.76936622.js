(function(){"use strict";var n={72:function(n,e,t){var o=t(963),r=t(119),a=t(252),u=t(577);function i(n,e,t,o,r,i){return(0,a.wg)(),(0,a.iD)("article",null," name: "+(0,u.zw)(r.name),1)}var c={name:"Home-View",data(){return{name:"test"}}},f=t(744);const s=(0,f.Z)(c,[["render",i]]);var l=s;const d=[{path:"/",name:"home",component:l},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,821))}];function m(n){return(0,r.p7)({history:n,routes:d})}var p=t(907),v=t(669),g=t.n(v);function h(){return(0,p.MT)({state:{age:22,name:"test"},mutations:{addAge(n){n.age++},setUserInfo(n,{name:e,age:t}){n.age=t,n.name=e}},actions:{async getUserInfo(n){try{const e=await g().get("http://localhost:1234/api/getUserInfo"),{name:t,age:o}=e.data.data;n.commit("setUserInfo",{name:t,age:o})}catch(e){}}},modules:{}})}const b=(0,a.Uk)("Home"),y=(0,a.Uk)(" | "),w=(0,a.Uk)("About");function _(n,e,t,o,r,u){const i=(0,a.up)("router-link"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("article",null,[(0,a._)("nav",null,[(0,a.Wm)(i,{to:"/"},{default:(0,a.w5)((()=>[b])),_:1}),y,(0,a.Wm)(i,{to:"/about"},{default:(0,a.w5)((()=>[w])),_:1})]),(0,a.Wm)(c)])}var k={name:"App"};const O=(0,f.Z)(k,[["render",_]]);var T=O;const j=(0,o.vr)(T),A=m((0,r.PO)()),I=h();A.beforeResolve((async(n,e,t)=>{if(e.matched.length>0){const{matched:e}=n;console.log("loading start");try{await Promise.all(e.filter((n=>n.components.default.asyncData)).map((n=>n.components.default.asyncData({store:I}))))}catch(o){}console.log("loading end")}t()})),window.__INITIAL_STATE__&&I.replaceState(window.__INITIAL_STATE__),j.use(A),j.use(I),j.mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,a){if(!o){var u=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],a=n[s][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||u>=a)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(i=!1,a<u&&(u=a));if(i){n.splice(s--,1);var f=r();void 0!==f&&(e=f)}}return e}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[o,r,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.08a4f745.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="vue-ssr:";t.l=function(o,r,a,u){if(n[o])n[o].push(r);else{var i,c;if(void 0!==a)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==e+a){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",e+a),i.src=o),n[o]=[r];var d=function(e,t){i.onerror=i.onload=null,clearTimeout(m);var r=n[o];if(delete n[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(n){return n(t)})),e)return e(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={143:0};t.f.j=function(e,o){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=n[e]=[t,o]}));o.push(r[2]=a);var u=t.p+t.u(e),i=new Error,c=function(o){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,r[1](i)}};t.l(u,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,a,u=o[0],i=o[1],c=o[2],f=0;if(u.some((function(e){return 0!==n[e]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var s=c(t)}for(e&&e(o);f<u.length;f++)a=u[f],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(s)},o=self["webpackChunkvue_ssr"]=self["webpackChunkvue_ssr"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(72)}));o=t.O(o)})();
//# sourceMappingURL=app.76936622.js.map