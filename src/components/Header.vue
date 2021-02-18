<template>
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
</template>

<script>
export default {
  name: "Header"
};
</script>