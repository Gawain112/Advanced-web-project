import { mount } from "@vue/test-utils";
import Register from "@/views/account/Register.vue";
import ElementPlus from "element-plus";

const mockRouter = jest.fn();
const useRouterMock = jest.fn();

const wrapper = mount(Register, {
  global: {
    plugins: [ElementPlus, mockRouter],
    mocks: { router: mockRouter, useRouter: useRouterMock },
  },
});

const email = "testregister@gmail.com";
const password = "password";

const emailInput = wrapper.find("input[type=email]");
const passwordInput0 = wrapper.findAll("input[type=password]")[0];
const passwordInput1 = wrapper.findAll("input[type=password]")[1];

const submitButton = wrapper.find("button");

test("NoEmailShouldFailTest", async () => {
  await emailInput.setValue("asdwew");
  await passwordInput0.setValue(password);
  await passwordInput1.setValue(password);

  console.log(passwordInput0);
  console.log(passwordInput1);

  await submitButton.trigger("click");

  setTimeout(() => {
    //this response comes from firestore - need to wait for it
    expect(wrapper.html()).toContain("The email address is badly formatted.");
  }, 3000);
});
