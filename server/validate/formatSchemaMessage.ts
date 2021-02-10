// import { ErrorObject } from "ajv";
// import i18n from "es2015-i18n-tag";
// import { JSONObject } from "../json";

// export function formatSchemaMessage(error: ErrorObject) {
//   const params = error.params as JSONObject;

//   switch (error.keyword) {
//     case "minLength": {
//       const limit = params.limit as number;

//       if (limit > 1) {
//         return i18n`Expected at least ${limit} characters`;
//       }

//       return i18n`This field is required`;
//     }

//     case "maxLength":
//       return i18n`Expected no more than ${params.limit} characters`;

//     default:
//       return i18n`Please use valid format`;
//   }
// }
