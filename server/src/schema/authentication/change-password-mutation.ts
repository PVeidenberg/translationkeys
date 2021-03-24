// import { mutationField, stringArg } from "@nexus/schema";
// import { JSONSchema4 } from "json-schema";
// import { UnauthorizedError, validate } from "../../../validate";
// import { validatePassword } from "../../validators/validatePassword";

// const schema: JSONSchema4 = {
//   $async: true,
//   type: "object",
//   properties: {
//     currentPassword: {
//       title: "Current password",
//       type: "string",
//       format: "valid-password",
//       minLength: 8,
//     },
//     newPassword: {
//       title: "New password",
//       type: "string",
//       minLength: 8,
//     },
//   },
//   required: ["currentPassword", "newPassword"],
// };

// export default mutationField("changePassword", {
//   type: "Viewer",
//   description: "Changes current user password",
//   args: {
//     currentPassword: stringArg({ description: "Current password" }),
//     newPassword: stringArg({ description: "New password" }),
//   },
//   authorize: (_parent, _args, context) => context.isLoggedIn(),
//   resolve: async (_parent, args, context) => {
//     // extract arguments
//     const { newPassword } = args;
//     const { viewer } = context;

//     if (!viewer) {
//       throw new UnauthorizedError();
//     }

//     // validate arguments
//     await validate(args, schema, [validatePassword(viewer.email)]);

//     await viewer.updatePassword(newPassword);

//     return viewer;
//   },
// });
