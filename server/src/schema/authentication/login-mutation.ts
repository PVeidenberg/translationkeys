import { mutationField, stringArg } from "@nexus/schema";
import { JSONSchema4 } from "json-schema";
import { validate } from "../../../validate";
import { UserEntity } from "../../entities/UserEntity";
import { validatePassword } from "../../validators/validatePassword";

const schema: JSONSchema4 = {
  $async: true,
  type: "object",
  properties: {
    email: {
      title: "Email",
      type: "string",
      format: "email",
    },
    password: {
      title: "Password",
      type: "string",
      format: "valid-password",
    },
  },
  required: ["email", "password"],
};

export default mutationField("login", {
  type: "Viewer",
  description: "Attempts to log user in",
  args: {
    email: stringArg({ description: "Email address" }),
    password: stringArg({ description: "Password" }),
  },
  resolve: async (_parent, args, context) => {
    // extract arguments
    const { email } = args;

    // validate arguments
    await validate(args, schema, [validatePassword(email)]);

    // attempt to find active user by email
    const user = await UserEntity.findOne({
      where: {
        email,
      },
    });

    // throw if no such user could be found
    /* istanbul ignore next */
    if (!user) {
      throw new Error("Email passed validation but the user could not be found, this should not happen");
    }

    // login user (logged in user id is stored in session)
    context.login(user.id);

    // return logged in user info
    return user;
  },
});
