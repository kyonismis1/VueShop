import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import $ from "jquery";
window.$ = $;
import router from "./router";
import store from "./store";
import "bootstrap";
import "./assets/all.scss";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

//做跨域使用，打開Cookies設定ㄋ
axios.defaults.withCredentials = true;

new Vue({
  router,
  store,
  axios,
  $,
  App,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  console.log("to:", to, "from:", from, "next:", next);
  if (to.meta.requiresAuth) {
    const api = "https://vue-course-api.hexschool.io/api/user/check/";
    axios.post(api).then(response => {
      if (response.data.success) {
        next();
      } else {
        alert("請登入!");
      }
    });
  } else {
    next();
  }
});
