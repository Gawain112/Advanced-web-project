import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "./element-variables.scss";
import "./bootstrap.css";
import { VueCsvImportPlugin } from "vue-csv-import";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(VueCsvImportPlugin);
app.mount("#app");
