import { mutationField, stringArg } from "@nexus/schema";
import { JSONSchema4 } from "json-schema";
import { validate } from "../../../validate";
import { fieldLength } from "../../constants";
import { UserEntity } from "../../entities/UserEntity";
import { getKeyedHash } from "../../services/getKeyedHash";

const schema: JSONSchema4 = {
  $async: true,
  type: "object",
  properties: {
    name: {
      title: "Name",
      type: "string",
      minLength: 1,
      maxLength: fieldLength.name,
    },
    email: {
      title: "Email",
      type: "string",
      maxLength: fieldLength.email,
      allOf: [
        {
          format: "email",
        },
        {
          format: "unique-email",
        },
      ],
    },
    password: {
      title: "Password",
      type: "string",
      // format: "strong-password",
      minLength: 8,
    },
  },
  required: ["name", "email", "password"],
};

export default mutationField("register", {
  type: "Viewer",
  description: "Registers new user",
  args: {
    name: stringArg({ description: "Full name" }),
    email: stringArg({ description: "Email address" }),
    password: stringArg({ description: "Password" }),
  },
  resolve: async (_parent, args, context) => {
    // log out existing user if any
    context.logout();

    // extract arguments
    const { name, email, password } = args;

    // validate arguments
    await validate(args, schema);

    // register user
    const user = await UserEntity.register({
      name,
      email,
      password,
    });

    // check if user has password associated with his account
    /* istanbul ignore next */
    if (!user.passwordSalt || !user.passwordHash) {
      throw new Error("Created user does not have password set, this should not happen");
    }

    // calculate salted password hash
    const passwordHash = getKeyedHash(password, user.passwordSalt);
    const isPasswordCorrect = passwordHash === user.passwordHash;

    // throw if password is incorrect (should have failed validation)
    /* istanbul ignore next */
    if (!isPasswordCorrect) {
      throw new Error("Password passed validation but the password is incorrect, this should not happen");
    }

    // store logged in user id
    context.login(user.id);

    // return logged in user info
    return user;
  },
});
