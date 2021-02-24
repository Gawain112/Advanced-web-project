<template>
  <el-form lable-width="95px" class="demo-ruleForm" @submit.prevent>
    <el-form-item label="Name" :rules="{ required: true }">
      <el-input
        v-model="name"
        type="text"
        placeholder="enter full name"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Address">
      <el-input
        v-model="address"
        type="text"
        placeholder="enter your address"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="number">
      <el-input
        v-model="number"
        type="text"
        placeholder="enter your telephone number"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Username" :rules="{ required: true }">
      <el-input
        v-model="username"
        type="text"
        placeholder="enter a unique username"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="E-Mail" :rules="{ required: true }">
      <el-input
        v-model="email"
        type="email"
        placeholder="enter your E-Mail address"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Institutional Affilation" :rules="{ required: true }">
      <el-input
        v-model="institutioanalAffilation"
        type="text"
        placeholder="enter your institutional affilation"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password" :rules="{ required: true }">
      <el-input
        v-model="password"
        type="password"
        placeholder="enter password"
        required
        autocomplete="off"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item label="Confirm Password" :rules="{ required: true }">
      <el-input
        v-model="confirmPassword"
        type="password"
        placeholder="re-enter password"
        required
        autocomplete="off"
        show-password
      ></el-input>
    </el-form-item>

    <div v-if="errorRegistration">
      <el-button plain type="danger" disabled icon="el-icon-error">
        {{ errorRegistration }}
      </el-button>
    </div>

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
import {
  firebaseAuthenticationService,
  firebaseFireStore,
} from "@/firebase/database";

export default {
  name: "RegisterForm",
  emits: ["register-clicked"],

  setup() {
    const name = ref("");
    const address = ref("");
    const number = ref("");
    const username = ref("");
    const email = ref("");
    const institutioanalAffilation = ref("");
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
        institutioanalAffilation: institutioanalAffilation.value,
        password: password.value,
      };

      console.log(router);

      try {
        const res = await firebaseAuthenticationService.createUserWithEmailAndPassword(
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
      institutioanalAffilation,
      password,
      confirmPassword,
      register,
      errorRegistration,
    };
  },
};
</script>
