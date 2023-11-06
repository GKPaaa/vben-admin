import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/", // 首页
    name: "login",
    component: () => import("@/login.vue"),
    meta: {
      needLogin: false, // 需要登录
    },
  },
  {
    path: "/home", // 首页
    name: "home",
    component: () => import("@/home.vue"),
    meta: {
      needLogin: true, // 需要登录
    },
  },
];
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});
export default router;
