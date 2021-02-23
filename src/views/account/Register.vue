<template>
  <el-main>
    <el-card class="box-card">
      <template #header>
        <div class="card-header border-bottom">
          <h1 class="display-1">Register</h1>
        </div>
      </template>
      <div>
        <RegisterForm size="medium" />
      </div>
    </el-card>
  </el-main>
</template>

<script>
import RegisterForm from "@/components/account/RegisterForm.vue";

export default {
  name: "Register",
  components: { RegisterForm }
};
</script>

<style></style>
