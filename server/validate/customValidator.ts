import { ErrorObject } from "ajv";

export type CustomValidatorFn = (value: string) => Promise<boolean> | boolean;

export type ValidatorsMap = { [x: string]: { async: boolean; validate: CustomValidatorFn } };

export type ValidationErrorFormatterFn = (error: ErrorObject) => string;

export interface CustomValidator {
  name: string;
  validate: CustomValidatorFn;
  formatError: ValidationErrorFormatterFn;
}
