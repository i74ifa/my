import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import { createI18n } from "vue-i18n";

const app = createApp(App);
app.component("Icon", Icon).use(router).mount("#app");
