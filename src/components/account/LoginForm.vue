<template>
  <el-form
    ref="loginModel"
    label-position="left"
    label-width="6rem"
    :model="loginModel"
    :size="size"
  >
    <el-form-item
      label="Username"
      prop="username"
      :rules="[
        {
          required: true,
          message: 'Username cannot be blank',
          trigger: 'blur',
        },
        {
          min: 3,
          message: 'Username must be 3 characters or more',
          trigger: 'blur',
        },
      ]"
    >
      <el-input
        v-model="loginModel.username"
        placeholder="Input Username"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Password"
      prop="password"
      :rules="{
        required: true,
        message: 'Password cannot be blank',
        trigger: 'blur',
      }"
    >
      <el-input
        v-model="loginModel.password"
        type="password"
        placeholder="Input Password"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        style="margin-left: -4rem;"
        type="primary"
        @click="validateLogin('loginModel')"
        >Login</el-button
      >
    </el-form-item>

    <el-alert v-if="errorMsg" title="Error" type="error" effect="dark">
      {{ errorMsg }}
    </el-alert>
  </el-form>
</template>

<script>
import { ref } from "vue";
import { firebaseAuthentication } from "@/firebase/database";

export default {
  name: "LoginForm",
  props: {
    size: {
      name: "size",
      type: String,
      required: false,
      default: "large",
    },
  },
  emits: ["loggedIn"],
  data() {
    return {
      loginModel: ref({ username: "", password: "" }),
      loginAttempts: 0,
      errorMsg: ref(""),
    };
  },
  methods: {
    validateLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.attemptLogin();
        } else {
          return false;
        }
      });
    },
    attemptLogin() {
      let context = this;

      let password = this.loginModel.password;
      let username = this.loginModel.username;

      firebaseAuthentication
        .signInWithEmailAndPassword(username, password)
        .then(
          () => {
            context.$emit("loggedIn", username);
          },
          error => {
            if (context.loginAttempts > 4) {
              //user failed to log in 5 times
              context.$router.push("/about");
            }
            context.loginAttempts++;
            context.updateErrorMessage(error.message);
          },
        );
    },
    updateErrorMessage(withMessage) {
      this.errorMsg = withMessage;
    },
  },
};
</script>
