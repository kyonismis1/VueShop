(function(t){function e(e){for(var n,o,i=e[0],l=e[1],u=e[2],c=0,p=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a3a6c":"e003cf51","chunk-2d0bd56a":"2d4ddacc","chunk-2d0d0f0b":"b4948be6","chunk-2d21a3d2":"9e907893","chunk-2d22d746":"0db90efc"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var u=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}r[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o={name:"app"},i=o,l=(a("5c0b"),a("2877")),u=Object(l["a"])(i,r,s,!1,null,null,null),c=u.exports,d=a("bc3a"),p=a.n(d),v=a("2106"),f=a.n(v),m=a("1157"),b=a.n(m),g=(a("d3b7"),a("8c4f")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("div",{staticClass:"container"},[a("router-view")],1),a("Footer")],1)},_=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("翰翰")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/Home"}},[t._v("Home")])],1),a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/About"}},[t._v("About")])],1),a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/Store"}},[t._v("Store")])],1),a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[t._v("admin")])],1)]),a("button",{directives:[{name:"show",rawName:"v-show",value:"no"==t.isLogin,expression:"isLogin == 'no'"}],staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#login"}},[t._v(" 登入 / 註冊 ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v(" 登出 ")]),a("Login")],1)])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"login",tabindex:"-1",role:"dialog","aria-labelledby":"login","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"modal-dialog-center"},[a("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-login",role:"tabpanel","aria-labelledby":"nav-login-tab"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Input_Login_Email"}},[t._v("電子郵件:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"Input_Login_Email","aria-describedby":"emailHelp",placeholder:"請輸入您的電子郵件"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Input_Login_Password"}},[t._v("密碼:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"Input_Login_Password",placeholder:"請輸入密碼"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])]),t._m(1)])])]),a("div")])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("nav",{staticClass:"mx-auto"},[a("div",{staticClass:"nav nav-pills",attrs:{id:"pills-tab",role:"tablist"}},[a("a",{staticClass:"nav-item nav-link active px-5",attrs:{id:"nav-login-tab","data-toggle":"tab",href:"#nav-login",role:"tab","aria-controls":"nav-login","aria-selected":"true"}},[t._v("登入")]),a("a",{staticClass:"nav-item nav-link px-5",attrs:{id:"nav-registered-tab","data-toggle":"tab",href:"#nav-registered",role:"tab","aria-controls":"nav-registered","aria-selected":"false"}},[t._v("註冊")])])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-pane fade",attrs:{id:"nav-registered",role:"tabpanel","aria-labelledby":"nav-registered-tab"}},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Input_registered_Email"}},[t._v("電子郵件:")]),a("input",{staticClass:"form-control",attrs:{type:"email",id:"Input_registered_Email","aria-describedby":"emailHelp",placeholder:"請輸入您的電子郵件"}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Input_registered_Password"}},[t._v("密碼:")]),a("input",{staticClass:"form-control",attrs:{type:"password",id:"Input_registered_Password",placeholder:"請輸入密碼"}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"Input_registered_CheckPassword"}},[t._v("再次確認密碼:")]),a("input",{staticClass:"form-control",attrs:{type:"password",id:"Input_registered_CheckPassword"}})]),a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend mx-auto"},[a("div",[t._v(" 性別: "),a("input",{attrs:{type:"radio","aria-label":"Radio button for following text input",id:"Input_registered_Sex_Male",name:"sex",value:"male"}}),a("label",{attrs:{for:"Input_registered_Sex_Male"}},[t._v("男性")]),a("input",{attrs:{type:"radio","aria-label":"Radio button for following text input",id:"Input_registered_Sex_Female",name:"sex",value:"female"}}),a("label",{attrs:{for:"Input_registered_Sex_Female"}},[t._v("女性")])])])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}],k={name:"login",props:{msg:String},data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t="https://vue-course-api.hexschool.io/admin/signin",e=this;this.$http.post(t,e.user).then((function(t){console.log(t.data),t.data.success?($("#login").modal("hide"),e.$router.push("Home")):alert("登入失敗")}))}}},S=k,P=(a("e7f6"),Object(l["a"])(S,w,x,!1,null,"52d8f1de",null)),E=P.exports,j={props:{msg:String},data:function(){return{isLogin:"no"}},components:{Login:E},methods:{signout:function(){var t="https://vue-course-api.hexschool.io/logout";this.$http.post(t).then((function(t){console.log(t.data)}))}}},O=j,I=Object(l["a"])(O,C,y,!1,null,null,null),L=I.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer bg-light"},[t._m(0),a("div",[a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("123")]),a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("456")]),a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("789")])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",[t._v("@本網站僅供練習")])])}],M={},T=Object(l["a"])(M,H,A,!1,null,"241887c3",null),D=T.exports,N={components:{Navbar:L,Footer:D}},F=N,q=(a("800e"),Object(l["a"])(F,h,_,!1,null,"533e6aa9",null)),J=q.exports;n["a"].use(g["a"]);var R=[{path:"/LandingPage",name:"LandingPage",component:function(){return a.e("chunk-2d0d0f0b").then(a.bind(null,"69b4"))}},{path:"/",name:"layout",component:J,children:[{path:"/about",name:"About",component:function(){return a.e("chunk-2d22d746").then(a.bind(null,"f820"))}},{path:"/Store",name:"Store",component:function(){return a.e("chunk-2d0bd56a").then(a.bind(null,"2c25"))}},{path:"/Home",name:"Home",component:function(){return a.e("chunk-2d21a3d2").then(a.bind(null,"bb51"))}}]},{path:"/admin",name:"admin",component:function(){return a.e("chunk-2d0a3a6c").then(a.bind(null,"02a5"))},meta:{requiresAuth:!0}}],W=new g["a"]({routes:R}),z=W,B=a("2f62");n["a"].use(B["a"]);var G=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("4989"),a("68df");window.$=b.a,n["a"].config.productionTip=!1,n["a"].use(f.a,p.a),p.a.defaults.withCredentials=!0,new n["a"]({router:z,store:G,axios:p.a,$:b.a,App:c,render:function(t){return t(c)}}).$mount("#app"),z.beforeEach((function(t,e,a){if(console.log("to:",t,"from:",e,"next:",a),t.meta.requiresAuth){var n="https://vue-course-api.hexschool.io/api/user/check/";p.a.post(n).then((function(t){t.data.success?a():alert("請登入!")}))}else a()}))},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5c22":function(t,e,a){},"68df":function(t,e,a){},"7f80":function(t,e,a){},"800e":function(t,e,a){"use strict";a("5c22")},"9c0c":function(t,e,a){},e7f6:function(t,e,a){"use strict";a("7f80")}});
//# sourceMappingURL=app.fb5766b7.js.map