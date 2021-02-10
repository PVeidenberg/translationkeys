import { CustomValidator, ValidatorsMap } from "./customValidator";

// maps list of default and custom validators to a map of validators with keys as names
export function getFormats(validators: CustomValidator[]): ValidatorsMap {
  return validators.reduce<ValidatorsMap>((validatorMap, validator) => {
    validatorMap[validator.name] = {
      async: true,
      validate: validator.validate,
    };

    return validatorMap;
  }, {});
}
