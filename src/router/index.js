import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/country-list",
      name: "country-list",
      component: () => import("../views/CountryList.vue"),
    },
    {
      path: "/anime-list",
      name: "anime-list",
      component: () => import("../views/AnimeView.vue"),
    },
    {
      path: "/anime-rec",
      name: "anime-rec",
      component: () => import("../views/AnimeRecView.vue"),
    },
  ],
});

export default router;
