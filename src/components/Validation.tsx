import InputsConfig, { IInputsConfig } from "./UI/Input/InputsConfig";

const REQUIRED: string = "This field is required.";
const MIN_LENGTH = "Minimal length is ";
const BAD_FORMAT: string = "Bad format.";

export const InputValidation = (
  inputName: string,
  target: string | boolean
): string => {
  const rules = InputsConfig[inputName].rules;
  let inputValidationMessage: string = "";

  if (!rules) {
    return inputValidationMessage;
  }

  if (rules.pattern) {
    //const tmp = target.toString().trim();
    inputValidationMessage = !rules.pattern.test(target.toString())
      ? BAD_FORMAT
      : inputValidationMessage;
  }

  if (rules.required) {
    if (typeof target === "boolean") {
      inputValidationMessage = target ? inputValidationMessage : REQUIRED;
    } else {
      inputValidationMessage =
        target.trim() !== "" ? inputValidationMessage : REQUIRED;
    }
  }

  if (rules.minLength) {
    inputValidationMessage =
      inputValidationMessage.trim() === inputValidationMessage &&
      target.toString().trim().length >= rules.minLength
        ? inputValidationMessage
        : MIN_LENGTH.concat(rules.minLength.toString());
  }

  return inputValidationMessage;
};

export const getIsFormValid = (inputsValues: IInputsConfig): boolean => {
  let validForm: boolean = true;
  Object.keys(inputsValues).map((key: string) => {
    validForm =
      inputsValues[key].validationMessage === undefined ||
      inputsValues[key].validationMessage.trim() !== ""
        ? false
        : validForm;
  });
  return validForm;
};
