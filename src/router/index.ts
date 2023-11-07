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
    children: [
      {
        path: "/device", // 设备管理
        name: "device",
        component: () => import("@/views/deviceManage/index.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
        children: [
          {
            path: "/monitor", // 火灾检测报警系统
            name: "monitor",
            component: () =>
              import("@/views/deviceManage/system/monitorSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", // 上级路由
            },
          },
          {
            path: "/water", // 消防水检测系统
            name: "water",
            component: () => import("@/views/deviceManage/system/waterSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
          {
            path: "/hydrant", // 室外消防栓系统
            name: "hydrant",
            component: () =>
              import("@/views/deviceManage/system/hydrantSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
          {
            path: "/electric", // 智慧安全用电系统
            name: "electric",
            component: () =>
              import("@/views/deviceManage/system/electricSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
          {
            path: "/video", // 视频监控系统
            name: "video",
            component: () => import("@/views/deviceManage/system/videoSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
        ],
      },
    ],
  },
];
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});
export default router;
