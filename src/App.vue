<template>
  <Header></Header>
  <img
    alt="Cardiomyopathy Banner"
    src="./assets/cm_banner.png"
    class="col-sm-8 mx-auto"
  />
  <router-view :data="data" :user="user" class="col-sm-8 mx-auto" />
  <Footer></Footer>
</template>

<script>
import { ref } from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { firebaseAuthentication } from "./firebase/database.js";

export default {
  name: "App",
  components: { Header, Footer },
  setup() {
    const user = ref({});

    firebaseAuthentication.onAuthStateChanged(currentUser => {
      if (currentUser) {
        user.value = currentUser;
      } else {
        user.value == {};
      }
    });

    return { user };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
