import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/layout/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/LandingPage",
    name: "LandingPage",
    component: () => import("../views/layout/LandingPage.vue")
  },
  {
    path: "/",
    name: "layout",
    component: Home,
    children: [
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
      },
      {
        path: "/Store",
        name: "Store",
        component: () => import("../views/Store.vue")
      },
      {
        path: "/Home",
        name: "Home",
        component: () => import("../views/Home.vue")
      }
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/backend/admin.vue"),
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  routes
});

export default router;
