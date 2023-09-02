import { isValidImage } from "./validators";

type ValidationFunction = (value: File) => validResponse;

type ValidationRules = {
  [key: string]: ValidationFunction;
};

type validResponse = {
  isValid: boolean;
  error: string;
};

export const validationRules: ValidationRules = {
  profileImage: (value: File): validResponse => imageValidation(value),
  coverImage: (value: File): validResponse => imageValidation(value),
  image: (value: File): validResponse => imageValidation(value),
};

const imageValidation = (value: File): validResponse => {
  const isValid = isValidImage(value);
  return isValid;
};
