<template>
  <el-main>
    <div class="card">
      <div class="card-title border-bottom">
        <h1 class="display-1">Register</h1>
      </div>
      <div class="card-body">
        <RegisterForm size="medium" />
      </div>
    </div>
  </el-main>
</template>

<script>
import RegisterForm from "@/components/account/RegisterForm.vue";

export default {
  components: { RegisterForm }
};
</script>

<style></style>
