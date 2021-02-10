<template>
  <el-form
    label-position="left"
    label-width="6rem"
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
      <el-button
        style="margin-left: -4rem;"
        type="primary"
        @click="validateLogin('loginModel')"
        >Login</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { ref } from "vue";
import comparePassword from "@/composable/passwordCompareUtil";

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
  emits: ["loggedIn"],
  data() {
    return {
      loginModel: ref({ username: "", password: "" })
    };
  },
  methods: {
    validateLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.attemptLogin();
        } else {
          return false;
        }
      });
    },
    attemptLogin() {
      let context = this;

      let { comparePass } = comparePassword();

      let plainTextPass = this.loginModel.password;
      let username = this.loginModel.username;

      let user = this.getUserWithUsername(username);

      comparePass(plainTextPass, user.password).then(
        function(res) {
          if (res) {
            //correct password
            context.$emit("loggedIn", user);
          } else {
            //wrong password
            console.log("incorrect password!");
          }
        },
        function(err) {
          console.log("incorrect password formatting");
          console.log(err);
        }
      );
    },
    getUserWithUsername(username) {
      //to be updated with actual db functionality
      const users = [
        {
          username: "aLbUs_PeRcIvAl_WuLfRiC_bRiAn_DuMbLeDoOr",
          password:
            "$2y$05$bbvyM9MUYIpizKCw4BzZRu9qmdjq.IDFRxzifqeTMVihgNkYiQ892" //password: Password
        },
        {
          username: "harry_potter",
          password:
            "$2y$05$TWsLJh.cSZog/xKrIX9UPuM9Y9izcCDs0CjnYTxdLz52SdkRbk..u" //password: chosen_1
        },
        {
          username: "hagrid",
          password:
            "$2y$05$BHk1aIYXs/ViSU6imwM1Ouena9gG2f2ILcYIX7InrhJ1.aAf4HrtS" //password: griffin
        },
        {
          username: "snape",
          password:
            "$2y$05$JuPekDr/PMAHl.2/r6o9gef.j60pLaf.qmo6Sb131vyEd4OZZMv86" //password: SIMP
        }
      ];

      return users.find(user => user.username == username);
    }
  }
};
</script>
