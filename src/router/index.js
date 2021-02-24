import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/account/Login.vue";
import Register from "@/views/account/Register.vue";
import firebaseTests from "@/firebase/firebaseTests/FirebaseTests.vue";

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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
    path: "/register",
    name: "Register",
    component: Register,
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

export default router;
