(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2983e487"],{"0bb4":function(t,a,r){"use strict";r("0f54")},"0f54":function(t,a,r){},"3f4c":function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("ProductCard",{ref:"productCard",attrs:{para:t.para}})],1)},s=[],c=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),r("div",{staticClass:"container d-flex justify-content-center mt-100"},[r("div",{staticClass:"row"},t._l(t.products,(function(a){return r("div",{key:a.id,staticClass:"col-md-6 col-lg-4"},[r("div",{staticClass:"product-wrapper text-center"},[r("div",{staticClass:"product-img"},[r("a",{attrs:{href:"#","data-abc":"true"},on:{click:function(t){t.preventDefault()}}},[r("img",{staticClass:"img-fluid",attrs:{src:a.imageUrl,alt:""}})]),a.price?t._e():r("span",{staticClass:"text-center"},[t._v(" "+t._s(t._f("currency")(a.origin_price))+" ")]),a.price?r("span",{staticClass:"text-center"},[t._v(" "+t._s(t._f("currency")(a.price))+" ")]):t._e(),r("div",{staticClass:"product-action"},[r("div",{staticClass:"product-action-style"},[r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.getDetail(a.id)}}},[r("i",{staticClass:"fas fa-search-plus"})]),r("a",{attrs:{href:"#"},on:{click:function(r){return r.preventDefault(),t.addCart(a.id)}}},[r("i",{staticClass:"fas fa-cart-plus"})])])])])]),r("div",{staticClass:"mb-45 text-center"},[t._v(t._s(a.title))])])})),0)])],1)},i=[],o=(r("4de4"),{props:["para"],data:function(){return{products:[],isLoading:!1}},methods:{getProducts:function(){var t=this,a=this,r="https://vue-course-api.hexschool.io/api/hanvueshop/products/all";a.isLoading=!0,this.$http.get(r).then((function(r){switch(a.para){case"Shirt":a.products=r.data.products.filter((function(a){return a.category===t.para}));break;case"Shortsleeve":a.products=r.data.products.filter((function(a){return a.subCategory===t.para}));break;case"Longsleeve":a.products=r.data.products.filter((function(a){return a.subCategory===t.para}));break;case"Pants":a.products=r.data.products.filter((function(a){return a.category===t.para}));break;case"Jeans":a.products=r.data.products.filter((function(a){return a.subCategory===t.para}));break;case"Trousers":a.products=r.data.products.filter((function(a){return a.subCategory===t.para}));break;case"Coat":a.products=r.data.products.filter((function(a){return a.category===t.para}));break;case"Overcoat":a.products=r.data.products.filter((function(a){return a.subCategory===t.para}));break;case"Suit":a.products=r.data.products.filter((function(a){return a.subCategory===t.para}));break;default:break}a.isLoading=!1}))},getDetail:function(t){var a=this;console.log(t),a.$router.push("/product/".concat(t))},addCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this,e="https://vue-course-api.hexschool.io/api/hanvueshop/cart";r.isLoading=!0;var s={product_id:t,qty:a};this.$http.post(e,{data:s}).then((function(t){console.log(t),r.isLoading=!1}))}},created:function(){this.getProducts()}}),n=o,u=(r("0bb4"),r("2877")),d=Object(u["a"])(n,c,i,!1,null,"6a084795",null),p=d.exports,l={components:{ProductCard:p},data:function(){return{para:""}},created:function(){var t=this;t.para=this.$route.params.category},watch:{$route:function(t){var a=this;a.para=t.params.category,this.$refs.productCard.getProducts()}}},f=l,h=Object(u["a"])(f,e,s,!1,null,null,null);a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2983e487.0266b0f1.js.map