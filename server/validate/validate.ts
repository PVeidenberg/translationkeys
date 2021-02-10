import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import { JSONSchema4 } from "json-schema";
import { validateExistingEmail } from "../../src/validators/validateExistingEmail";
import { validateExistingTrack } from "../../src/validators/validateExistingTrack";
import { validateExistingUser } from "../../src/validators/validateExistingUser";
import { validateStrongPassword } from "../../src/validators/validateStrongPassword";
import { validateUniqueEmail } from "../../src/validators/validateUniqueEmail";
import { JSONObject } from "../json";

import { CustomValidator } from "./customValidator";
import { formatValidationError } from "./formatValidationError";
import { getFormats } from "./getFormats";
import { ValidationError } from "./ValidationError";

// list of default validators always available
const defaultValidators: CustomValidator[] = [
  validateStrongPassword(),
  validateUniqueEmail(),
  validateExistingUser(),
  validateExistingEmail(),
  validateExistingTrack(),
];

export async function validate(data: JSONObject, schema: JSONSchema4, extraValidators?: CustomValidator[]) {
  // configure validator
  const validators = [...defaultValidators, ...(extraValidators ? extraValidators : [])];
  const validator = new Ajv({
    allErrors: true,
    jsonPointers: true,
    async: true,
    formats: getFormats(validators),
  });

  // support custom error messages
  ajvErrors(validator);

  // compile schema
  const validate = validator.compile(schema);

  // perform validation
  try {
    // convert to JSON (stringifies dates etc)
    const jsonData = JSON.parse(JSON.stringify(data));

    // tslint:disable-next-line:await-promise
    await validate(jsonData);

    return true;
  } catch (error) {
    // rethrow unknown errors
    if (!(error instanceof Ajv.ValidationError)) {
      throw error;
    }

    // extract field errors
    const fieldErrors = formatValidationError(data, error, validators);

    // throw original error if no field errors could be extracted
    if (Object.keys(fieldErrors).length === 0) {
      throw error;
    }

    // throw field validation error
    throw new ValidationError(fieldErrors);
  }
}
