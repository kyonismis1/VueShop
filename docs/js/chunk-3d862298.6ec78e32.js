(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d862298"],{"02a5":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("BackendNavbar"),n("div",{staticClass:"container"},[n("router-view")],1),n("Footer")],1)},s=[],r=(n("ac1f"),n("5319"),function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-dark"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("OVERBRIDGE後臺管理系統")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item mr-3"},[n("router-link",{attrs:{to:"/productList"}},[t._v("商品列表")])],1),n("li",{staticClass:"nav-item mr-3"},[n("router-link",{attrs:{to:"/orderList"}},[t._v("訂單列表")])],1),n("li",{staticClass:"nav-item mr-3"},[n("router-link",{attrs:{to:"/coupon"}},[t._v("優惠卷管理")])],1),n("li",[n("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-toggle":"modal"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v(" 管理者登出 ")])])])])])}),o=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],i={methods:{signout:function(){var t=this,a="https://vue-course-api.hexschool.io/logout";this.$http.post(a).then((function(a){a.data.success&&t.$router.push("/")}))}}},c=i,l=n("2877"),u=Object(l["a"])(c,r,o,!1,null,null,null),v=u.exports,f=n("fd2d"),d={components:{BackendNavbar:v,Footer:f["a"]},created:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t}},p=d,b=(n("47fd"),Object(l["a"])(p,e,s,!1,null,"6416b9ff",null));a["default"]=b.exports},"47fd":function(t,a,n){"use strict";n("61d7")},"61d7":function(t,a,n){},"6e3c":function(t,a,n){"use strict";n("7866")},7866:function(t,a,n){},fd2d:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"footer d-flex justify-content-center pt-3"},[n("div",[n("div",[t._v("@OVERBRIDGE 本網站僅供練習")]),n("div",{staticClass:"d-flex alige justify-content-around"},[n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("這裡先")]),n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("暫時")]),n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("放個東西")])])])])},s=[],r=(n("6e3c"),n("2877")),o={},i=Object(r["a"])(o,e,s,!1,null,"372b2685",null);a["a"]=i.exports}}]);
//# sourceMappingURL=chunk-3d862298.6ec78e32.js.map