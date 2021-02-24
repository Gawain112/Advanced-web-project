import { mount } from "@vue/test-utils";
import Login from "@/views/account/Login.vue";
import ElementPlus from "element-plus";

const wrapper = mount(Login, {
  global: {
    plugins: [ElementPlus],
  },
});

const email = "ccarr895@gmail.com";
const password = "password";

const usernameInput = wrapper.find("input[type=text]");
const passwordInput = wrapper.find("input[type=password]");

const submitButton = wrapper.find("button");

test("LoginValidateFailTest", async () => {
  await usernameInput.trigger("blur");

  expect(wrapper.find(".el-form-item__error").exists()).toBe(true);
});

test("LoginValidatePassTest", async () => {
  await usernameInput.setValue(email);
  await passwordInput.setValue(password);

  await submitButton.trigger("click");

  expect(wrapper.find(".el-form-item__error").exists()).toBe(false);
});
