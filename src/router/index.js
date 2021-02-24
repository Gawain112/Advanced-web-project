import { createRouter, createWebHistory } from "vue-router";
import AddData from "@/views/AddData/AddData.vue";
import HeartData from "@/views/HeartData/HeartData.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Analysis from "@/views/Analysis.vue";
import firebaseTests from "@/firebase/firebaseTests/FirebaseTests.vue";
import Search from "@/views/search/Search.vue";
import Sitemap from "@/views/Sitemap.vue";
import Login from "@/views/account/Login.vue";
import Register from "@/views/account/Register.vue";
import NotFound from "@/views/NotFound.vue";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: { title: "About | Cardiomyopathy" },
  },
  {
    path: "/adddata",
    name: "AddData",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddData,
    meta: { title: "AddData | Cardiomyopathy" }
  },
  {
    path: "/heartdata",
    name: "HeartData",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HeartData,
    meta: { title: "HeartData | Cardiomyopathy" }
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: Analysis,
    meta: { title: "Analysis | Cardiomyopathy" },
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
    path: "/search",
    name: "Search",
    component: Search,
    meta: { title: "Search | Cardiomyopathy" }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
    name: "Not Found",
    component: NotFound,
    meta: { title: "Not Found | Cardiomyopathy" },
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
