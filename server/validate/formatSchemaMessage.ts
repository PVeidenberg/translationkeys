import { ErrorObject } from "ajv";
import { JSONObject } from "../src/json";

export function formatSchemaMessage(error: ErrorObject) {
  const params = error.params as JSONObject;

  switch (error.keyword) {
    case "minLength": {
      const limit = params.limit as number;

      if (limit > 1) {
        return "Expected at least ${limit} characters";
      }

      return "This field is required";
    }

    case "maxLength":
      return "Expected no more than ${params.limit} characters";

    default:
      return "Please use valid format";
  }
}
