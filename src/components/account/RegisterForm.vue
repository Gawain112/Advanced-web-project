<template>
  <el-form lable-width="95px" class="demo-ruleForm" @submit.prevent>
    <el-form-item label="Name">
      <el-input
        v-model="name"
        type="text"
        placeholder="enter full name"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
    label="Address"
    prop="address">
      <el-input
        v-model="address"
        type="text"
        placeholder="enter your address"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
    label="Phone Number"
    prop="number">
      <el-input
        v-model="number"
        type="text"
        placeholder="enter your telephone number"
        autocomplete="off"
      ></el-input>
    </el-form-item>

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
        }
      ]">
      <el-input
        v-model="username"
        type="text"
        placeholder="enter a unique username"
        autocomplete="off"
      ></el-input>
    </el-form-item>

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
        }
      ]">
      <el-input
        v-model="email"
        type="email"
        placeholder="enter your E-Mail address"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
    label="Institutional Affilation"
    prop="institutionalAffilation"
      :rules="
        {
          required: true,
          message: 'Email cannot be blank',
          trigger: 'blur',
        }">
      <el-input
        v-model="institutioanalAffilation"
        type="text"
        placeholder="enter your institutional affilation"
        required
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item
    label="Password"
    prop="password"
      :rules="[
        {
          required: true,
          message: 'Password cannot be blank',
          trigger: 'blur',
        },
        {
          min: 6,
          message: 'Password must be 6 characters or more',
          trigger: 'blur',
        }
      ]">
      <el-input
        v-model="password"
        type="password"
        placeholder="enter password"
        required
        autocomplete="off"
        show-password
      ></el-input>
    </el-form-item>

    <el-form-item
    label="Confirm Password"
    prop="confirmPassword"
      :rules="[
        {
          required: true,
          message: 'Password cannot be blank',
          trigger: 'blur',
        },
        {
          min: 6,
          message: 'Password must be 6 characters or more',
          trigger: 'blur',
        }
      ]">
      <el-input
        v-model="confirmPassword"
        type="password"
        placeholder="re-enter password"
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
      institutionalAffilation,
      password,
      confirmPassword,
      register,
      errorRegistration,
    };
  },
};
</script>
