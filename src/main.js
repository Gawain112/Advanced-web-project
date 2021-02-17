import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "./element-variables.scss";
import "./bootstrap.css"
import 'bootstrap';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
