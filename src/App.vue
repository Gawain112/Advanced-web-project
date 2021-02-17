<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul class="nav navbar-nav mr-auto">  
      <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
      <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
    </ul>

    <ul class="nav navbar-nav ml-auto">  
      <li class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
      <li class="nav-item"><router-link to="/register" class="nav-link">Register</router-link></li>
    </ul>
  </nav>

      <router-view @loggedIn="logIn" />


  <footer class="page-footer bg-dark mt-3">
    <div class="footer-copyright text-light text-center py-3">&copy; 2021 MMU - 6G6Z1111_2021_9Z6 - Group 9. All Rights Reserved.</div>
    <router-link to="/sitemap" class="text-decoration-none text-light">Site Map</router-link>
  </footer>
</template>

<script>
export default {
  name: "App",
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
  margin-top: 60px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
