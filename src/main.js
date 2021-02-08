import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "./element-variables.scss";
import "./bootstrap.css";

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
