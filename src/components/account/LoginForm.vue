<template>
  <el-form
    label-position="left"
    label-width="6rem"
    :model="loginModel"
    :size="size"
    ref="loginModel"
  >
    <el-form-item
      label="Username"
      prop="username"
      :rules="[
        {
          required: true,
          message: 'Username cannot be blank',
          trigger: 'blur'
        },
        {
          min: 3,
          message: 'Username must be 3 characters or more',
          trigger: 'blur'
        }
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
        trigger: 'blur'
      }"
    >
      <el-input
        v-model="loginModel.password"
        placeholder="Input Password"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        style="margin-left: -4rem;"
        type="primary"
        @click="submitLogin('loginModel')"
        >Login</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from "vue";
import hashPassword from "@/composable/passwordHashUtil";

export default {
  name: "LoginForm",
  props: {
    size: {
      name: "size",
      type: String,
      required: false,
      default: "large"
    }
  },
  data() {
    return {
      loginModel: ref({ username: "", password: "" })
    };
  },
  methods: {
    submitLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { hashedPassword, hash, comparePass } = hashPassword();

          let plainTextPass = this.loginModel.password;
          hashedPassword = hash(plainTextPass);

          console.log(hashedPassword);
          console.log(plainTextPass);

          comparePass(plainTextPass).then(
            function(res) {
              console.log(res);
            },
            function(err) {
              console.log("incorrect password formatting");
              console.log(err);
            }
          );
        } else {
          return false;
        }
      });
    }
  }
};
</script>
