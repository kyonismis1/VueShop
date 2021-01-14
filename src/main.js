import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import $ from "jquery";
window.$ = $;

import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';

import router from "./router";
import store from "./store";
import "bootstrap";
import "./assets/all.scss";
import currencyFilter from "@/currency.js";
import dateFilter from "@/dateFilter";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component("Loading", Loading);
Vue.filter("currency", currencyFilter);
Vue.filter("date", dateFilter);

//vee-validate rule規則手動倒出到extend
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
//運用繁體中文語系
localize('zh_TW', TW);

Vue.component("ValidationObserver", ValidationObserver)
Vue.component("ValidationProvider", ValidationProvider)

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});

new Vue({
  router,
  store,
  axios,
  $,
  App,
  render: h => h(App)
}).$mount("#app");
