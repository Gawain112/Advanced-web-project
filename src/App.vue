<template>
  <Header></Header>
  <router-view @loggedIn="logIn" />
  <Footer></Footer>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Footer, Header },
  setup() {
    let logIn = user => {
      console.log(user);
    };
    return { logIn };
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
