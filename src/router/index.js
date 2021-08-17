import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: () => import("views/home/Home.vue") },
    { path: "/search", component: () => import("views/search/Search.vue") },
    { path: "/changeskin", component: () => import("views/changeskin/Changeskin.vue") },
    { path: "/setting", component: () => import("views/setting/Setting.vue") },
  ],
});
export default router;
