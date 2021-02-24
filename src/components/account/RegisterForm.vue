<template>
  <el-form
    ref="registrationModel"
    :model="registrationModel"
    lable-width="95px"
    class="demo-ruleForm"
    @submit.prevent
  >
    <el-form-item
      label="Name"
      prop="name"
      :rules="{ 
        required: true, 
        message: 'Do not leave blank.',
        trigger: 'blur',
      }"
    >
      <el-input
        v-model="registrationModel.name"
        type="text"
        placeholder="Enter full name"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Address"
      prop="address"
    >
      <el-input
        v-model="registrationModel.address"
        type="text"
        placeholder="Enter your address"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Phone Number"
      prop="number"
    >
      <el-input
        v-model="registrationModel.number"
        type="text"
        placeholder="Enter your telephone number"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Username"
      prop="username"
      :rules="{
        required: true,
        message: 'Do not leave blank.',
        trigger: 'blur',
      }"
    >
      <el-input
        v-model="registrationModel.username"
        type="text"
        placeholder="Enter a unique username"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Email"
      prop="email"
      :rules="{
        required: true,
        message: 'Do not leave blank.',
        trigger: 'blur',
      }"
    >
      <el-input
        v-model="registrationModel.email"
        type="email"
        placeholder="Enter your E-Mail address"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Institutional Affilation"
      prop="institutionalAffilation"
      :rules="{
        required: true,
        message: 'Do not leave blank.',
        trigger: 'blur',
      }"
    >
      <el-input
        v-model="registrationModel.institutionalAffilation"
        type="text"
        placeholder="Enter your institutional affilation"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Password"
      prop="password"
      :rules="{
        required: true,
        message: 'Do not leave blank.',
        trigger: 'blur',
      }"
    >
      <el-input
        v-model="registrationModel.password"
        type="password"
        placeholder="Enter password"
        autocomplete="off"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item
      label="Confirm Password"
      prop="confirmPassword"
      :rules="{
        required: true,
        message: 'Do not leave blank.',
        trigger: 'blur',
      }"
    >
      <el-input
        v-model="registrationModel.confirmPassword"
        type="password"
        placeholder="Re-enter password"
        show-password
      ></el-input>
    </el-form-item>

    <el-alert v-if="errorRegistration" title="Error" prop="errorRegistration" type="error" effect="dark">
      {{ errorRegistration }}
    </el-alert>

    <el-form-item>
      <el-button style="center" type="success" @click="validateRegistration('registrationModel')"
        >Register
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication, firebaseFireStore } from "@/firebase/database";

export default {
  name: "RegisterForm",
  emits: ["register-clicked"],

  setup() {
    const password = "";
    const confirmPassword = "";
    const errorRegistration = "";

    watch(confirmPassword, () => {
      if (
        password.value !== "" &&
        confirmPassword.value !== "" &&
        password.value !== confirmPassword.value
      ) {
        errorRegistration.value = "Passwords do not match!";
      } else {
        errorRegistration.value = null;
      }
    });
  },

  data() {
    return {
      registrationModel: ref({ 
        name: "", 
        address: "", 
        number: "", 
        username: "", 
        email: "", 
        institutionalAffilation: "", 
        password: "", 
        confirmPassword: ""
      }),
      errorRegistration: ref(""),
    };
  },
  
  methods: {
    validateRegistration(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.register();
        } else {
          return false;
        }
      });
    },
    
    register() {
      const router = useRouter();

       async () => {
        const info = {
          name: this.registrationModel.name,
          address: this.registrationModel.address,
          number: this.registrationModel.number,
          username: this.registrationModel.username,
          email: this.email.registrationModel,
          institutionalAffilation: this.registrationModel.institutionalAffilation,
          password: this.registrationModel.password,
        };

        console.log(router);

        try {
          const res = await firebaseAuthentication.createUserWithEmailAndPassword(
            info.email,
            info.password,
          );

          await res.user.sendEmailVerification();

          await firebaseFireStore
            .collection("users")
            .doc(`${res.user.uid}`)
            .set(info);

          router.push({ name: "Login" });
        } catch (err) {
          console.log(err);
          this.errorRegistration.value = err.message;
        }
      };
    },
  },
};
</script>
