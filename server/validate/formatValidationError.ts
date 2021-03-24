import { ValidationError } from "ajv";
import { JSONObject } from "../src/json";

import { CustomValidator } from "./customValidator";
import { formatErrorMessage } from "./formatErrorMessage";
import { getFieldName } from "./getFieldName";

export type FieldValidationErrorMap<T> = { [x in keyof T]?: string[] };

export function formatValidationError<T extends JSONObject>(
  data: T,
  error: ValidationError,
  validators: CustomValidator[],
): FieldValidationErrorMap<T> {
  const errorMap: FieldValidationErrorMap<T> = {};

  error.errors.forEach((error) => {
    const field = getFieldName(error, data);

    if (!field) {
      return;
    }

    const message = formatErrorMessage(error, validators);
    const fieldError = errorMap[field];

    if (fieldError === undefined) {
      errorMap[field] = [message];
    } else {
      fieldError.push(message);
    }
  });

  return errorMap;
}
