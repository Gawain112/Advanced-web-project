<template>
  <el-form lable-width="95px" class="demo-ruleForm" @submit.prevent>
    <el-form-item label="Name">
      <el-input
        type="text"
        placeholder="enter full name"
        required
        autocomplete="off"
        v-model="name"
      ></el-input>
    </el-form-item>

    <el-form-item label="Address">
      <el-input
        type="text"
        placeholder="enter your address"
        autocomplete="off"
        v-model="address"
      ></el-input>
    </el-form-item>

    <el-form-item label="number">
      <el-input
        type="text"
        placeholder="enter your telephone number"
        autocomplete="off"
        v-model="number"
      ></el-input>
    </el-form-item>

    <el-form-item label="Username">
      <el-input
        type="text"
        placeholder="enter a unique username"
        required
        autocomplete="off"
        v-model="username"
      ></el-input>
    </el-form-item>

    <el-form-item label="E-Mail">
      <el-input
        type="email"
        placeholder="enter your E-Mail address"
        required
        autocomplete="off"
        v-model="email"
      ></el-input>
    </el-form-item>

    <el-form-item label="Institutional Affilation">
      <el-input
        type="text"
        placeholder="enter your institutional affilation"
        required
        autocomplete="off"
        v-model="institutioanalAffilation"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input
        type="password"
        placeholder="enter password"
        required
        autocomplete="off"
        show-password
        v-model="password"
      ></el-input>
    </el-form-item>

    <el-form-item label="Confirm Password">
      <el-input
        type="password"
        placeholder="re-enter password"
        required
        autocomplete="off"
        show-password
        v-model="confirmPassword"
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
import { firebaseAuthentication } from "@/firebase/database";

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

    function register() {
      const info = {
        email: email.value,
        password: password.value,
        username: username.value
      };

      if (!errorRegistration.value) {
        firebaseAuthentication
          .createUserWithEmailAndPassword(info.email, info.password)
          .then(
            (userCredentials) => {
              return userCredentials.user
                .updateProfile({
                  username: info.username,
                })
            .then(() => {
              router.replace("register");
            });
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
      institutioanalAffilation,
      password,
      confirmPassword,
      register,
      errorRegistration
    };
  }
};
</script>
