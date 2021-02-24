<template>
  <div class="notfound">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  props: {
    msg: {
      type: String,
      default: "Page does not exist!",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
