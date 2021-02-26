<template>
  <Header :user="user" @logoutEvent="logout"></Header>
  <router-view :user="user" class="col-sm-8 mx-auto" @loggedIn="logIn" />
  <Footer></Footer>
</template>

<script>
import { ref } from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import router from "@/router";
import { firebaseAuthentication } from "./firebase/database.js";

export default {
  name: "App",
  components: { Header, Footer },
  setup() {
    let user = ref("");

    let logIn = logInUser => {
      user.value = logInUser;
    };

    return { user, logIn };
  },
  methods: {
    logout() {
      firebaseAuthentication.signOut();
      this.user = "";
      router.push("/");
      this.$notify({
        title: "Success",
        message: "You are now logged out.",
        type: "error",
        duration: 3000,
      });
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  position: relative;
  color: #2c3e50;
  padding-bottom: 60px; /* footer height */
}
</style>
