<template>
  <el-main>
    <div class="card">
      <div class="card-title border-bottom">
        <h1 class="display-1">Login</h1>
      </div>
      <div class="card-body">
        <LoginForm size="medium" />
      </div>
    </div>
  </el-main>
</template>

<script>
import LoginForm from "@/components/account/LoginForm.vue";

export default {
  name: "Login",
  components: { LoginForm }
};
</script>
