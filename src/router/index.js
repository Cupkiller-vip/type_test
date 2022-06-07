import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/contentInput",
      name: "contentInput",
      component: () => import("../pages/ContentInput.vue"),
    },
    {
      path: "/contentUpload",
      name: "contentUpload",
      component: () => import("../pages/ContentUpload.vue"),
    },
  ],
});

export default router;
