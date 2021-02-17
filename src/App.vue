<template>
  <div>
    <appHeader />

    <router-view @loggedIn="logIn" />

    <appFooter />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: "App",
  components: {
    'appHeader': Header,
    'appFooter' : Footer
  },
  methods: {
    logIn(user) {
      console.log(user);
    }
  }
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

@import'~bootstrap/dist/css/bootstrap.css';
</style>
