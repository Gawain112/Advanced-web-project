<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul class="nav navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'About' }" class="nav-link"
          >About</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          :to="{
            name: 'Graph',
            params: {
              geneSymbol: 'TPM1',
              graphType: 'Tension VS Calcium Concentration',
              graphId: '9whZ5R15rrzCOfV8bcNv',
            },
          }"
          class="nav-link"
          >Example Data Graph</router-link
        >
      </li>
      <li v-if="user != ''" class="nav-item">
        <router-link :to="{ name: 'AddData' }" class="nav-link"
          >Add Data</router-link
        >
      </li>
      <li v-if="user != ''" class="nav-item">
        <router-link :to="{ name: 'Search' }" class="nav-link"
          >Search</router-link
        >
      </li>
    </ul>

    <ul class="nav navbar-nav ml-auto">
      <li v-if="user == ''" class="nav-item">
        <router-link :to="{ name: 'Login' }" class="nav-link"
          >Login</router-link
        >
      </li>
      <li v-if="user == ''" class="nav-item">
        <router-link :to="{ name: 'Register' }" class="nav-link"
          >Register</router-link
        >
      </li>
      <li v-if="user != ''" class="nav-item">
        <el-button @click="$emit('logoutEvent')">Logout</el-button>
      </li>
    </ul>
  </nav>
  <img
    alt="Cardiomyopathy Banner"
    src="./../assets/cm_banner.png"
    class="banner"
  />
</template>

<script>
export default {
  name: "Header",
  props: {
    user: {
      required: false,
      type: String,
      default: "",
    },
  },
  emits: ["logoutEvent"],
};
</script>

<style>
.router-link-exact-active {
  color: #fd7e14 !important;
}
.banner {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  margin-bottom: 4rem;
}
</style>
