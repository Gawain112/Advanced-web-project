import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/account/Login.vue";
import Analysis from "@/views/Analysis.vue";
import firebaseTests from "@/firebase/firebaseTests/FirebaseTests.vue";
import Sitemap from "@/views/Sitemap.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: Analysis
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/tests",
    name: "Tests",
    component: firebaseTests
  },
  {
    path: "/sitemap",
    name: "Site Map",
    component: Sitemap
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
