<template>
  <footer class="app-footer page-footer bg-dark mt-3">
        <div class="footer-copyright text-light text-center py-3">
        &copy; 2021 MMU - 6G6Z1111_2021_9Z6 - Group 9. All Rights Reserved.
        </div>
        <router-link :to="{ name: 'Sitemap' }" class="text-decoration-none text-light">Site Map</router-link>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Footer'
    }
  }
}
</script>