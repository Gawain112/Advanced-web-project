import { createRouter, createWebHistory } from "vue-router";
import AddData from "@/views/AddData/AddData.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import firebaseTests from "@/firebase/firebaseTests/FirebaseTests.vue";
import Sitemap from "@/views/Sitemap.vue";
import Login from "@/views/account/Login.vue";
import Register from "@/views/account/Register.vue";
import ForgotPassword from "@/views/account/ForgotPassword.vue";
import NotFound from "@/views/NotFound.vue";
import Graph from "@/views/Graph.vue";
import Search from "@/views/search/Search.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home | Cardiomyopathy",
      metaTags: [
        {
          name: "description",
          content: "Your number 1 cardiomyopathy data and analysis site.",
        },
        {
          property: "og:description",
          content: "Your number 1 cardiomyopathy data and analysis site.",
        },
      ],
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "About | Cardiomyopathy" },
  },
  {
    path: "/adddata",
    name: "AddData",
    component: AddData,
    meta: { title: "AddData | Cardiomyopathy" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "Login | Cardiomyopathy" },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { title: "Register | Cardiomyopathy" },
  },
  {
    path: "/password-reset",
    name: "forgotPassword",
    component: ForgotPassword,
    meta: { title: "Password Reset | Cardiomyopathy" },
  },
  {
    path: "/tests",
    name: "Tests",
    component: firebaseTests,
    meta: { title: "Tests | Cardiomyopathy" },
  },
  {
    path: "/sitemap",
    name: "Sitemap",
    component: Sitemap,
    meta: { title: "Site Map | Cardiomyopathy" },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
    name: "Not Found",
    component: NotFound,
    meta: { title: "Not Found | Cardiomyopathy" },
  },
  {
    path: "/graph/:geneSymbol/:graphType/:graphId/",
    name: "Graph",
    meta: { title: "Graph | Cardiomyopathy" },
    component: Graph,
    props: true,
  },
  {
    path: "/search",
    name: "Search",
    meta: { title: "Search | Cardiomyopathy" },
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
