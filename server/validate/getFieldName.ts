import { ErrorObject } from "ajv";
import { JSONObject } from "../json";

export function getFieldName<T extends JSONObject>(error: ErrorObject, data: T): keyof T | undefined {
  const fieldNames = Object.keys(data);

  // attempt to find exact match first
  for (const fieldName of fieldNames) {
    if (error.dataPath.substring(1) === fieldName) {
      return fieldName;
    }
  }

  // attempt to find partial match
  for (const fieldName of fieldNames) {
    if (error.dataPath.includes(fieldName)) {
      return fieldName;
    }
  }

  // no match found
  return undefined;
}
