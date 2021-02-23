<template>
  <el-form class="demo-ruleForm" @submit.prevent>
    <el-form-item
      label="Name"
      prop="name"
      :rules="[
        {
          required: true,
          message: 'Name cannot be blank',
          trigger: 'blur',
        },
        {
          min: 3,
          message: 'Name must be 3 characters or more',
          trigger: 'blur',
        }
      ]">
        <el-input
          type="text"
          placeholder="Enter full name"
          v-model="name"
        ></el-input>
    </el-form-item>

    <el-form-item
    label="Address"
    prop="address">
      <el-input
        type="text"
        placeholder="Enter your address"
        v-model="address"
      ></el-input>
    </el-form-item>

    <el-form-item
    label="Phone Number"
    prop="number">
      <el-input
        type="tel"
        placeholder="Enter your telephone number"
        v-model="number"
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
        type="text"
        placeholder="Enter a unique username"
        v-model="username"
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
        type="email"
        placeholder="Enter your Email address"
        v-model="email"
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
        type="text"
        placeholder="Enter your institutional affilation"
        v-model="institutionalAffilation"
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
        type="password"
        placeholder="Enter password"
        v-model="password"
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
        type="password"
        placeholder="re-enter password"
        show-password
        v-model="confirmPassword"
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
import { firebaseAuthenticationService } from "@/firebase/database";

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

    function register() {
      const info = {
        email: email.value,
        password: password.value,
        username: username.value
      };

      if (!errorRegistration.value) {
        firebaseAuthenticationService
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            () => {
              router.replace("register");
            },
            (error) => {
              errorRegistration.value = error.message;
            }
          );
      }
    }

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
      errorRegistration
    };
  }
};
</script>
