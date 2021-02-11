<template>
  <el-form
    label-position="left"
    label-width="6rem"
    :model="registerModel"
    :size="size"
    ref="registerModel"
  >
    <el-form-item
      label="Name"
      prop="name"
      :rules="[
        {
          required: true,
          message: 'name cannot be blank',
          trigger: 'blur'
        }
      ]"
    >
      <el-input
        v-model="registerModel.name"
        placeholder="Input name"
      ></el-input>
    </el-form-item>

    <el-form-item label="Address" prop="address">
      <el-input
        v-model="registerModel.address"
        placeholder="Input your home address"
      ></el-input>
    </el-form-item>

    <el-form-item label="Phone Number" prop="number">
      <el-input
        v-model="registerModel.number"
        placeholder="Input your telephone number"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Name"
      prop="name"
      :rules="[
        {
          required: true,
          message: 'name cannot be blank',
          trigger: 'blur'
        }
      ]"
    >
      <el-input
        v-model="registerModel.name"
        placeholder="Input name"
      ></el-input>
    </el-form-item>

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
        v-model="registerModel.username"
        placeholder="Input Username"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="E-Mail"
      prop="email"
      :rules="[
        {
          required: true,
          message: 'Email cannot be blank',
          trigger: 'blur'
        }
      ]"
    >
      <el-input
        v-model="registerModel.email"
        placeholder="Input E-mail"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Institutional Affilation"
      prop="institutioanalAffilation"
      :rules="{
        required: true,
        message: 'institutioanal affilation cannot be blank',
        trigger: 'blur'
      }"
    >
      <el-input
        v-model="registerModel.institutioanalAffilation"
        placeholder="Input institutioanal affilation"
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
        v-model="registerModel.password"
        placeholder="Input Password"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        style="margin-left: -4rem;"
        type="primary"
        @click="submitRegister('registerModel')"
        >Register</el-button
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
      registerModel: ref({
        name: "",
        address: "",
        number: "",
        username: "",
        email: "",
        institutioanalAffilation: "",
        password: ""
      })
    };
  },
  methods: {
    submitRegister(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.registerModel.name);
          console.log(this.registerModel.usernname);
          console.log(this.registerModel.password);
        } else {
          return false;
        }
      });
    }
  }
};
</script>
