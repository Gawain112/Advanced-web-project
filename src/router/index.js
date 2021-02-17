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
    component: Home,
    meta: { title: 'Home | Cardiomyopathy' }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: 'About | Cardiomyopathy' }
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: Analysis,
    meta: { title: 'Analysis | Cardiomyopathy' }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: 'Login | Cardiomyopathy' }
  },
  {
    path: "/tests",
    name: "Tests",
    component: firebaseTests,
    meta: { title: 'Tests | Cardiomyopathy' }
  },
  {
    path: "/sitemap",
    name: "Site Map",
    component: Sitemap,
    meta: { title: 'Site Map | Cardiomyopathy' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
