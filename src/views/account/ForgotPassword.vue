<template>
  <el-form label-position="left" label-width="6rem" :size="size">
    <el-form-item
      label="Email"
      prop="email"
      :rules="[
        {
          required: true,
          message: 'Email cannot be blank',
          trigger: 'blur',
        },
        {
          min: 3,
          message: 'Email must be 3 characters or more',
          trigger: 'blur',
        },
      ]"
    >
      <el-input v-model="email" placeholder="Input Email Address"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button style="margin-left: -4rem;" type="primary" @click="sendEmail()"
        >Reset Password</el-button
      >
    </el-form-item>

    <el-alert v-if="errorMsg" title="Error" type="error" effect="dark">
      {{ errorMsg }}
    </el-alert>
  </el-form>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      error: null,
      emailSending: false,
    };
  },
  methods: {
    sendEmail() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch(error => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>
