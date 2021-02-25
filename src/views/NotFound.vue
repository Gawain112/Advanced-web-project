<template>
  <el-main
    ><div class="notfound">
      <NotFound msg="Page not found." /></div
  ></el-main>
</template>

<script>
// @ is an alias to /src
import NotFound from "@/components/NotFound.vue";

export default {
  name: "NotFound",
  components: {
    NotFound,
  },
};
</script>
