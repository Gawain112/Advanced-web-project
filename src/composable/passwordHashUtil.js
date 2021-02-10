/**
 * https://www.npmjs.com/package/bcryptjs
 */
import Bcrypt from "bcryptjs";

function hashPassword() {
  const salt = Bcrypt.genSaltSync(5);

  function hash(plainTextPassword) {
    return Bcrypt.hashSync(plainTextPassword, salt);
  }

  return { hash };
}

export default hashPassword;
