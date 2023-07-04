import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import VueI18n from "vue-i18n";
createApp(App).component("Icon", Icon).use(router).mount("#app");
