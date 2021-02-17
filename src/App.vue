<template>
  <div class="site">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="nav navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Analysis' }" class="nav-link">Analysis</router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Register' }" class="nav-link">Register</router-link>
        </li>
      </ul>
    </nav>

    <router-view />

    <footer class="page-footer bg-dark mt-3">
      <div class="footer-copyright text-light text-center py-3">
        &copy; 2021 MMU - 6G6Z1111_2021_9Z6 - Group 9. All Rights Reserved.
      </div>
      <router-link :to="{ name: 'Sitemap' }" class="text-decoration-none text-light">Site Map</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logIn(user) {
      console.log(user);
    }
  }
}
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
