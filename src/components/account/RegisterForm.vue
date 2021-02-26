<template>
  <el-form
    ref="registerModel"
    lable-width="95px"
    class="demo-ruleForm"
    :model="registerModel"
    @submit.prevent
  >
    <el-form-item
      label="Name"
      prop="name"
      :rules="[{ required: true, trigger: 'blur' }]"
    >
      <el-input
        v-model="registerModel.name"
        type="text"

        placeholder="Input Name"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Address" prop="address">
      <el-input
        v-model="registerModel.address"
        type="text"
        placeholder="Input Address"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Phone Number" prop="number">
      <el-input
        v-model="registerModel.number"
        type="number"
        placeholder="Input Telephone Number"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item prop="username" label="Username" :rules="{ required: true }">
      <el-input
        v-model="registerModel.username"
        type="text"
        placeholder="Input Username"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
      prop="email"
      label="E-Mail"
      :rules="[{ required: true, validator: checkValidEmail, trigger: 'blur' }]"
    >

      <el-input
        v-model="registerModel.email"
        type="email"
        placeholder="Input Email Address"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
      prop="institutionalAffilation"
      label="Institutional Affilation"
      :rules="{ required: true }"
    >
      <el-input
        v-model="registerModel.institutionalAffilation"
        type="text"
        placeholder="Input Institutional Affilation"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item prop="password" label="Password" :rules="{ required: true }">
      <el-input
        v-model="registerModel.password"
        type="password"
        placeholder="Input Password"
        required
        autocomplete="off"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item
      prop="confirmPassword"
      label="Confirm Password"
      :rules="{ required: true }"
    >
      <el-input
        v-model="registerModel.confirmPassword"
        type="password"
        placeholder="Input Password Again"
        show-password
        @blur="checkPasswordsMatch()"
      ></el-input>
    </el-form-item>

    <el-alert
      v-if="registerModel.errorRegistration"
      title="Error"
      type="error"
      effect="dark"
    >
      {{ registerModel.errorRegistration }}
    </el-alert>

    <el-form-item>
      <el-button
        style="center"
        type="success"
        @click="validateRegister('registerModel')"
        >Register
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from "vue";
import { firebaseAuthentication, firebaseFireStore } from "@/firebase/database";
import validator from "email-validator";

export default {
  name: "RegisterForm",
  emits: ["register-clicked"],
  data() {
    return {
      registerModel: ref({
        name: "",
        address: "",
        number: "",
        username: "",
        email: "",
        institutionalAffilation: "",
        password: "",
        confirmPassword: "",
        errorRegistration: "",
      }),
    };
  },
  methods: {
    validateRegister(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.register();
        } else {
          return false;
        }
      });
    },
    checkPasswordsMatch() {
      console.log(global.registerModel);
      if (
        this.registerModel.password !== "" &&
        this.registerModel.confirmPassword !== "" &&
        this.registerModel.password !== this.registerModel.confirmPassword
      ) {
        this.registerModel.errorRegistration = "Passwords do not match!";
      } else {
        this.registerModel.errorRegistration = null;
      }
    },
    checkValidEmail(rule, value, callback) {
      if (validator.validate(value) == true) {
        callback();
      } else {
        callback(new Error("The email address is badly formatted."));
      }
    },
    register() {
      const info = {
        name: this.registerModel.name,
        address: this.registerModel.address,
        number: this.registerModel.number,
        username: this.registerModel.username,
        email: this.registerModel.email,
        institutionalAffilation: this.registerModel.institutionalAffilation,
      };

      const res = firebaseAuthentication
        .createUserWithEmailAndPassword(info.email, this.registerModel.password)
        .catch(err => {
          this.registerModel.errorRegistration = err.message;
        });
      let context = this;
      context.$emit("register-clicked");

      if (res.user) {
        res.user.sendEmailVerification();

        firebaseFireStore
          .collection("users")
          .doc(`${res.user.uid}`)
          .set(info);
      }
    },
  },
};
</script>
