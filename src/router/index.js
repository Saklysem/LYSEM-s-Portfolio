import {createRouter, createWebHistory} from "vue-router";

import Home from "@/Home.vue";
import PortfolioMotion from "@/components/PortfolioMotion.vue";
import PortfolioGraphicDesign from "@/components/PortfolioGraphicDesign.vue";
import PortfolioVideo from "@/components/PortfolioVideo.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  // {
  //   path: "/",
  //   name: "/Home/:contact",
  //   component: Home,
  // },

  {
    path: "/portfolioMotionGraphic",
    name: "PortfolioMotion",
    component: PortfolioMotion,
  },

  {
    path: "/PortfolioGraphicDesign",
    name: "PortfolioGraphicDesign",
    component: PortfolioGraphicDesign,
  },
  {
    path: "/PortfolioVideo",
    name: "PortfolioVideo",
    component: PortfolioVideo,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;