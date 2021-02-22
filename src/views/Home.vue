<template>
  <div class="home">
    <img alt="Cardiomyopathy Banner" src="../assets/cm_banner.png" />
    <Intro msg="Your Number 1 Site for Cardiomyopathy Analytics" />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Home.vue";

export default {
  name: "Home",
  components: {
    Intro
  }
};
</script>
