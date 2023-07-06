import { createRouter, createWebHistory } from "vue-router";
import Home from "./Pages/Home.vue";
import Experience from "./Pages/Experience.vue";
import Projects from "./Pages/Projects.vue";

let locale = navigator.language.split("-")[0] || "en";
//validate
if (locale !== "en" || locale !== "ar") {
  locale = "en";
}

window.locale = locale;

const routes = [
  {
    path: "/:lang",
    name: "home",
    component: Home,
    meta: {
      title: "نبذة",
      description: "حذيفة جابر",
    },
  },
  {
    path: "/:lang/experience",
    name: "experience",
    component: Experience,
    meta: {
      title: "Experience",
      description: "الخبرات",
    },
  },
  {
    path: "/:lang/project",
    name: "projects",
    component: Projects,
    meta: {
      title: "Projects ",
      description: "المشاريع السابقة",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, req, next) => {
  if (to.path == "/") {
    router.push(locale);
  }

  document.title = to.meta.title || "حذيفة جابر - نبذة";
  const html = document.querySelector("html");
  const lang = to.params.lang || "en";
  const direction = lang == "en" ? "ltr" : "rtl";

  if (html) {
    html.setAttribute("lang", lang);
    html.setAttribute("dir", direction);
    window.locale = lang;
  }

  next();
});

export default router;
