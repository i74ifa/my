import { createRouter, createWebHistory } from "vue-router";
import Home from "./Pages/Home.vue";
import Experience from "./Pages/Experience.vue";

const routes = [
  {
    path: "/:lang",
    name: "home",
    component: Home,
  },
  {
    path: "/:lang/experience",
    name: "experience",
    component: Experience,
  },
  {
    path: "/:lang/project",
    name: "projects",
    component: `<div></div>`,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((a, req, next) => {
  if (a.path == "/") {
    router.push("/en");
  }
  next();
});

export default router;
