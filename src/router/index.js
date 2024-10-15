import {createRouter, createWebHistory} from "vue-router";

import Home from "@/Home.vue";
import PortfolioMotion from "@/components/PortfolioMotion.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/portfolio",
    name: "PortfolioMotion",
    component: PortfolioMotion,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;