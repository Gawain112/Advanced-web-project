<template>
  <div class="notfound">
    <NotFound msg="Page not found." />
  </div>
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
