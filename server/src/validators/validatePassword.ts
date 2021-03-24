import { CustomValidator } from "../../validate/customValidator";
import { UserEntity } from "../entities/UserEntity";
import { getKeyedHash } from "../services/getKeyedHash";

export function validatePassword(email: string): CustomValidator {
  return {
    name: "valid-password",
    validate: async (password: string) => {
      // find user by email (also needs to be active)
      const user = await UserEntity.findOne({
        where: {
          email,
        },
      });

      // return valid if user with given email exists
      if (!user) {
        return false;
      }

      // return invalid if user has no password associated with his account
      if (!user.passwordSalt || !user.passwordHash) {
        return false;
      }

      // check that provided password matches stored password
      const passwordHash = getKeyedHash(password, user.passwordSalt);
      const isPasswordCorrect = passwordHash === user.passwordHash;

      return isPasswordCorrect;
    },
    formatError: (_error: any) => {
      return "Invalid username or password";
    },
  };
}
