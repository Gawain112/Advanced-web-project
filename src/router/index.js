import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Analysis from "@/views/Analysis.vue";
import firebaseTests from "@/firebase/firebaseTests/FirebaseTests.vue";
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
          content: "Your number 1 cardiomyopathy data and analysis site."
        },
        {
          property: "og:description",
          content: "Your number 1 cardiomyopathy data and analysis site."
        }
      ]
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { title: "About | Cardiomyopathy" }
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: Analysis,
    meta: { title: "Analysis | Cardiomyopathy" }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "Login | Cardiomyopathy" }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { title: "Register | Cardiomyopathy" }
  },
  {
    path: "/tests",
    name: "Tests",
    component: firebaseTests,
    meta: { title: "Tests | Cardiomyopathy" }
  },
  {
    path: "/sitemap",
    name: "Site Map",
    component: Sitemap,
    meta: { title: "Site Map | Cardiomyopathy" }
  },
  {
    path: "/notfound",
    name: "Not Found",
    component: NotFound,
    meta: { title: "Not Found | Cardiomyopathy" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
