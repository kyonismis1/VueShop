import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/layout/layout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/frontend/Home.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue")
      },
      {
        path: "/store/:category",
        name: "Store",
        component: () => import("../views/frontend/Store.vue")
      },
      {
        path: "/product/:id",
        name: "ProductDetail",
        component: () => import("../views/frontend/ProductDetail.vue")
      }
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/backend/admin.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/productList",
        name: "productList",
        component: () => import("../views/backend/productList"),
        meta: { requiresAuth: true }
      },
      {
        path: "/orderList",
        name: "orderList",
        component: () => import("../views/backend/orderList"),
        meta: { requiresAuth: true }
      },
      {
        path: "/coupon",
        name: "coupon",
        component: () => import("../views/backend/coupon"),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/layout/checkout.vue"),
    children: [
      {
        path: "/cartDetail",
        name: "cartDetail",
        component: () => import("../views/frontend/cartDetail.vue")
      },
      {
        path: "/order",
        name: "order",
        component: () => import("../views/frontend/order.vue")
      },
      {
        path: "/orderFinish/:orderId",
        name: "orderFinish",
        component: () => import("../views/frontend/orderFinish.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
