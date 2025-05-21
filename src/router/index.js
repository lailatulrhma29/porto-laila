import { createRouter, createWebHistory } from "vue-router";

import Home from "../Pages/Home.vue";
import Projects from "../Pages/Projects.vue";
import About from "../Pages/About.vue";
import Contact from "../Pages/Contact.vue";
import HireMe from "../Pages/HireMe.vue";

const routes = [
  { path: "/", component: Home }, // ⬅️ Hero tampil di sini saja
  { path: "/projects", component: Projects },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  {path: "/hireme", component: HireMe},
  {
    path: "/projects/:slug",
    name: "ProjectDetail",
    component: () => import("@/Pages/ProjectDetail.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
