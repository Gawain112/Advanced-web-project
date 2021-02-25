<template>
  <el-footer class="page-footer bg-dark mt-3 footer-bottom">
    <div class="footer-copyright text-light text-center py-3">
      &copy; 2021 MMU - 6G6Z1111_2021_9Z6 - Group 9. All Rights Reserved.
      <router-link
        :to="{ name: 'Sitemap' }"
        class="text-decoration-none text-light"
        >Sitemap</router-link
      >
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
