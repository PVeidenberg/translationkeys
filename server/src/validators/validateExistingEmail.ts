import { CustomValidator } from "../../validate";
import { UserEntity } from "../entities/UserEntity";

export function validateExistingEmail(): CustomValidator {
  return {
    name: "existing-email",
    validate: async (email: string) => {
      // Allow users to insert uppercase letters and trailing space. Remove it here.
      const normalizedEmail = email.trim().toLowerCase();

      // set up user query
      const userQuery = UserEntity.createQueryBuilder("user").where("LOWER(TRIM(user.email)) = :normalizedEmail", {
        normalizedEmail,
      });


      // attempt to find user
      const user = await userQuery.getOne();

      return user !== undefined;
    },
    formatError: (_error) => {
      return "No account with given email exists";
    },
  };
}
