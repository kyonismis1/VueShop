(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eb48dda"],{1276:function(t,e,a){"use strict";var n=a("d784"),o=a("44e7"),s=a("825a"),i=a("1d80"),l=a("4840"),r=a("8aa5"),c=a("50c4"),u=a("14c3"),p=a("9263"),d=a("d039"),v=[].push,h=Math.min,m=4294967295,g=!d((function(){return!RegExp(m,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(i(this)),s=void 0===a?m:a>>>0;if(0===s)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,s);var l,r,c,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,d+"g");while(l=p.call(g,n)){if(r=g.lastIndex,r>h&&(u.push(n.slice(h,l.index)),l.length>1&&l.index<n.length&&v.apply(u,l.slice(1)),c=l[0].length,h=r,u.length>=s))break;g.lastIndex===l.index&&g.lastIndex++}return h===n.length?!c&&g.test("")||u.push(""):u.push(n.slice(h)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var o=i(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,o,a):n.call(String(o),e,a)},function(t,o){var i=a(n,t,this,o,n!==e);if(i.done)return i.value;var p=s(t),d=String(this),v=l(p,RegExp),f=p.unicode,_=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"y":"g"),C=new v(g?p:"^(?:"+p.source+")",_),b=void 0===o?m:o>>>0;if(0===b)return[];if(0===d.length)return null===u(C,d)?[d]:[];var x=0,w=0,y=[];while(w<d.length){C.lastIndex=g?w:0;var k,$=u(C,g?d:d.slice(w));if(null===$||(k=h(c(C.lastIndex+(g?0:w)),d.length))===x)w=r(d,w,f);else{if(y.push(d.slice(x,w)),y.length===b)return y;for(var M=1;M<=$.length-1;M++)if(y.push($[M]),y.length===b)return y;w=x=k}}return y.push(d.slice(x)),y}]}),!g)},"44e7":function(t,e,a){var n=a("861d"),o=a("c6b6"),s=a("b622"),i=s("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},5604:function(t,e,a){},"5f59":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-right mt-2"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.openCouponModal(!0)}}},[t._v(" 建立優惠卷 ")])]),a("table",{staticClass:"table  table-responsive mt-4",staticStyle:{"white-space":"nowrap"}},[t._m(0),a("tbody",t._l(t.coupons,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.code))]),a("td",[t._v(t._s(t._f("date")(e.due_date)))]),a("td",[t._v(t._s(e.percent))]),a("td",[1===e.is_enabled?a("strong",{staticClass:"text-success"},[t._v("已啟用")]):a("span",[t._v("尚未啟用")])]),a("td",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openCouponModal(!1,e)}}},[t._v(" 編輯 ")])]),a("td",[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return t.removeCoupon(e.id)}}},[t._v(" 刪除 ")])])])})),0)]),a("pagination",{attrs:{pages:t.pagination},on:{event:t.getCoupon}}),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("名稱")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入名稱"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"coupon_code"}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{id:"coupon_code",type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"due_date"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],staticClass:"form-control",attrs:{id:"due_date",type:"date"},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price"}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{id:"pricee",type:"number",placeholder:"請輸入折扣百分比"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group text-center"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var a=t.tempCoupon.is_enabled,n=e.target,o=n.checked?1:0;if(Array.isArray(a)){var s=null,i=t._i(a,s);n.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([s])):i>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" 取消 ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.updatedCoupon}},[t._v(" 確認 ")])])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",[t._v("名稱")]),a("th",[t._v("優惠碼")]),a("th",[t._v("到期日")]),a("th",[t._v("折扣百分比")]),a("th",[t._v("是否啟用")]),a("th",[t._v("編輯")]),a("th",[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("建立優惠卷")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],s=(a("ac1f"),a("1276"),a("6407")),i={data:function(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,due_date:0,code:""},due_date:new Date,pagination:{},isNew:!1}},components:{pagination:s["a"]},watch:{due_date:function(){var t=this,e=Math.floor(new Date(t.due_date)/1e3);t.tempCoupon.due_date=e}},methods:{getCoupon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="https://vue-course-api.hexschool.io/api/hanvueshop/admin/coupons?page=".concat(t);this.$http.get(a).then((function(t){console.log(t),e.coupons=t.data.coupons,e.pagination=t.data.pagination}))},openCouponModal:function(t,e){var a=this;if($("#couponModal").modal("show"),a.isNew=t,a.isNew)a.tempCoupon={};else{a.tempCoupon=Object.assign({},e);var n=new Date(1e3*a.tempCoupon.due_date).toISOString().split("T");console.log("time:",n),a.due_date=n[0]}},updatedCoupon:function(){var t=this;if(t.isNew){var e="https://vue-course-api.hexschool.io/api/hanvueshop/admin/coupon";this.$http.post(e,{data:t.tempCoupon}).then((function(e){console.log(e),$("#couponModal").modal("hide"),t.getCoupon()}))}else{var a="https://vue-course-api.hexschool.io/api/hanvueshop/admin/coupon/".concat(t.tempCoupon.id);this.$http.put(a,{data:t.tempCoupon}).then((function(e){console.log(e),$("#couponModal").modal("hide"),t.getCoupon()}))}},removeCoupon:function(t){var e=this,a="https://vue-course-api.hexschool.io/api/hanvueshop/admin/coupon/".concat(t);this.$http.delete(a).then((function(t){console.log("remove:",t),e.getCoupon()}))}},created:function(){this.getCoupon()}},l=i,r=(a("bd64"),a("2877")),c=Object(r["a"])(l,n,o,!1,null,"de0c8690",null);e["default"]=c.exports},6407:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[t._m(0)])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[t._m(1)])])],2)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fas fa-chevron-right"})])}],s={data:function(){return{}},props:["pages"],methods:{getPages:function(t){this.$emit("event",t)}}},i=s,l=a("2877"),r=Object(l["a"])(i,n,o,!1,null,null,null);e["a"]=r.exports},bd64:function(t,e,a){"use strict";a("5604")}}]);
//# sourceMappingURL=chunk-0eb48dda.899d9560.js.map