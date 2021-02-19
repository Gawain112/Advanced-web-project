import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/account/Login.vue";
import firebaseTests from "@/firebase/firebaseTests/FirebaseTests.vue";
<<<<<<< HEAD
import Search from "@/views/search/Search.vue";
=======
import Search from "@/views/Search.vue";
>>>>>>> 0b4ddd46e9bfe245d5ed67fd632d76cf9452d1a9

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
    path: "/search",
    name: "Search",
    component: Search
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
