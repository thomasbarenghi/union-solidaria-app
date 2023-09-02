import {
  isValidFirstName,
  isValidEmail,
  isValidPassword,
  isValidUsername,
  isDescriptionValid,
  isAccessCodeValid,
  isLongDescriptionValid,
} from "./validators";

type ValidationFunction = (value: string) => validResponse;

type ValidationRules = {
  [key: string]: ValidationFunction;
};

type validResponse = {
  isValid: boolean;
  error: string;
};

export const validationRules: ValidationRules = {
  //User
  firstName: (value: string): validResponse => nameValidation(value),
  lastName: (value: string): validResponse => nameValidation(value),
  password: (value: string): validResponse => isValidPassword(value),
  oldPassword: (value: string): validResponse => isValidPassword(value),
  newPassword: (value: string): validResponse => isValidPassword(value),
  username: (value: string): validResponse => {
    if (!value || value.trim() === "") {
      return {
        isValid: false,
        error: "Username is required",
      };
    }
    const isValid = isValidUsername(value);
    return isValid;
  },
  email: (value: string): validResponse => {
    if (!value || value.trim() === "") {
      return {
        isValid: false,
        error: "Email is required",
      };
    }
    const isValid = isValidEmail(value);
    return isValid;
  },
  //Space and Room
  name: (value: string): validResponse => nameValidation(value),
  title: (value: string): validResponse => nameValidation(value),
  description: (value: string): validResponse => isDescriptionValid(value),
  accessCode: (value: string): validResponse => isAccessCodeValid(value),
  longDescription: (value: string): validResponse =>
    isLongDescriptionValid(value),
};

const nameValidation = (value: string): validResponse => {
  if (!value || value.trim() === "" || value.length <= 1) {
    return {
      isValid: false,
      error: "Campo requerido",
    };
  }

  const isValid = isValidFirstName(value);
  return isValid;
};
