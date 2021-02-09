<template>
  <el-form
    label-position="left"
    label-width="5rem"
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
      <el-button type="primary" @click="submitLogin('loginModel')"
        >Login</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from "vue";

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
          console.log(this.loginModel.username);
          console.log(this.loginModel.password);
        } else {
          return false;
        }
      });
    }
  }
};
</script>
