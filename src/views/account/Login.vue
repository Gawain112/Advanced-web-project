<template>
  <el-main>
    <div class="card">
      <div class="card-title border-bottom">
        <h1 class="display-1">Login</h1>
      </div>
      <div class="card-body">
        <LoginForm size="medium" v-on:loggedIn="logIn" />
      </div>
    </div>
  </el-main>
</template>

<script>
import LoginForm from "@/components/account/LoginForm.vue";
export default {
  name: "Login",
  components: { LoginForm },
  emits: ["loggedIn"],
  methods: {
    logIn(user) {
      this.$emit("loggedIn", user);
      this.$notify({
        title: "Success",
        message: "Hello, " + user.username + ". You are now logged in.",
        type: "success",
        duration: 3000
      });

      this.$router.push("/");
    }
  }
};
</script>
