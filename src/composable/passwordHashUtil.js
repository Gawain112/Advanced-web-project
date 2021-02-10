/**
 * https://www.npmjs.com/package/bcryptjs
 */
import Bcrypt from "bcryptjs";
import { ref } from "vue";

function hashPassword() {
  let hashedPassword = ref("");
  const salt = Bcrypt.genSaltSync(5);

  function hash(plainTextPassword) {
    hashedPassword = Bcrypt.hashSync(plainTextPassword, salt);
    return hashedPassword;
  }

  function comparePass(plainTextPassword) {
    return Bcrypt.compare(plainTextPassword, hashedPassword);
  }

  return { hashedPassword, hash, comparePass };
}

export default hashPassword;
