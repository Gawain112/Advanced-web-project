<template>
  <el-form :label-position="left" :rules="loginRules" :model="loginModel">
    <el-form-item label="username">
      <el-input
        v-model="loginModel.username"
        placeholder="Input Username"
      ></el-input>
    </el-form-item>
    <el-form-item label="password">
      <el-input
        v-model="loginModel.password"
        placeholder="Input Password"
        show-password
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginForm",
  setup() {
    const loginRules = {
      username: [
        { required: true, message: "Username cannot be blank", trigger: "blur" }
      ],
      password: [
        { required: true, message: "Password cannot be blank", trigger: "blur" }
      ]
    };

    const loginModel = ref({ username: "", password: "" });

    return { loginModel, loginRules };
  }
};
</script>
