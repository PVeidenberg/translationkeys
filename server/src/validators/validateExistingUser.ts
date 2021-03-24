import { CustomValidator } from "../../validate";
import { UserEntity } from "../entities/UserEntity";

export function validateExistingUser(): CustomValidator {
  return {
    name: "existing-user",
    validate: async (userId: string) => {
      const user = await UserEntity.findOne({ id: userId });

      return user !== undefined;
    },
    formatError: (_error) => {
      return "No account with given id does not exist";
    },
  };
}
