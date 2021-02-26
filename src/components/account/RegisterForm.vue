<template>
  <el-form lable-width="95px" class="demo-ruleForm" @submit.prevent>
    <el-form-item label="Name" :rules="{ required: true }">
      <el-input
        v-model="name"
        type="text"
        placeholder="Input Name"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Address" prop="address">
      <el-input
        v-model="address"
        type="text"
        placeholder="Input Address"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Phone Number" prop="number">
      <el-input
        v-model="number"
        type="text"
        placeholder="Input Telephone Number"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Username" :rules="{ required: true }">
      <el-input
        v-model="username"
        type="text"
        placeholder="Input Username"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Email" :rules="{ required: true }">
      <el-input
        v-model="email"
        type="email"
        placeholder="Input Email Address"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Institutional Affilation" :rules="{ required: true }">
      <el-input
        v-model="institutionalAffilation"
        type="text"
        placeholder="Input Institutional Affilation"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password" :rules="{ required: true }">
      <el-input
        v-model="password"
        type="password"
        placeholder="Input Password"
        required
        autocomplete="off"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item label="Confirm Password" :rules="{ required: true }">
      <el-input
        v-model="confirmPassword"
        type="password"
        placeholder="Input Password Again"
        show-password
      ></el-input>
    </el-form-item>

    <el-alert v-if="errorRegistration" title="Error" type="error" effect="dark">
      {{ errorRegistration }}
    </el-alert>

    <el-form-item>
      <el-button style="center" type="success" @click="register"
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
    const name = ref("");
    const address = ref("");
    const number = ref("");
    const username = ref("");
    const email = ref("");
    const institutionalAffilation = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const errorRegistration = ref("");

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

    const router = useRouter();

    const register = async () => {
      const info = {
        name: name.value,
        address: address.value,
        number: number.value,
        username: username.value,
        email: email.value,
        institutionalAffilation: institutionalAffilation.value,
        password: password.value,
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
        errorRegistration.value = err.message;
      }
    };

    return {
      name,
      address,
      number,
      username,
      email,
      institutionalAffilation,
      password,
      confirmPassword,
      register,
      errorRegistration,
    };
  },
};
</script>
