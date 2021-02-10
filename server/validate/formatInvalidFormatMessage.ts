// import { ErrorObject } from "ajv";
// import i18n from "es2015-i18n-tag";
// import { CustomValidator } from "./customValidator";
// import { isFormatError } from "./isFormatError";

// export function formatInvalidFormatMessage(error: ErrorObject, validators: CustomValidator[]) {
//   if (!isFormatError(error.params)) {
//     return error.message || "Invalid format";
//   }

//   const format = error.params.format;
//   const validator = validators.find((validator) => validator.name === format);

//   if (!validator) {
//     switch (format) {
//       case "email":
//         return i18n`Please enter valid email`;
//     }

//     // the error message is not translated so use a generic message
//     // return error.message || i18n`Please use valid format`;
//     return i18n`Please use valid format`;
//   }

//   return validator.formatError(error);
// }
