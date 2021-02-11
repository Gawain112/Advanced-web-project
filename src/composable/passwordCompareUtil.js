/**
 * https://www.npmjs.com/package/bcryptjs
 */
import Bcrypt from "bcryptjs";

function comparePassword() {
  function comparePass(plainTextPassword, hashedPassword) {
    return Bcrypt.compare(plainTextPassword, hashedPassword);
  }

  return { comparePass };
}

export default comparePassword;
