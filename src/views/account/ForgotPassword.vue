<template>
  <el-main>
    <el-card class="box-card">
      <template #header>
        <div class="card-header border-bottom">
          <h1 class="display-1">Password Reset</h1>
        </div>
      </template>
      <div>
        <ForgotPasswordForm size="medium" @emailSent="resetPassword" />
      </div>
    </el-card>
  </el-main>
</template>

<script>
import ForgotPasswordForm from "@/components/account/ForgotPasswordForm.vue";
export default {
  name: "ForgotPassword",
  components: { ForgotPasswordForm },
  emits: ["emailSent"],
  methods: {
    resetPassword(email) {
      this.$emit("emailSent", email);
      this.$notify({
        title: "Success",
        message: "Email sent to, " + email + " with a password reset link.",
        type: "success",
        duration: 3000,
      });

      this.$router.push("/");
    },
  },
};
</script>
