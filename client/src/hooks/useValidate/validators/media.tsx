type validResponse = {
  isValid: boolean;
  error: string;
};

export const isValidProfileImage = (value: File): validResponse => {
  //un archivo de imagen maximo 5 mb

  const isValid = value.size < 5242880;
  const isValidType = value.type === "image/png" || value.type === "image/jpeg";

  if (!isValid || !isValidType) {
    return {
      isValid: false,
      error: "El archivo no puede superar los 5 mb y debe ser una imagen",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};

export const isValidCoverImage = (value: File): validResponse => {
  //un archivo de imagen maximo 5 mb

  const isValid = value.size < 5242880;

  if (!isValid) {
    return {
      isValid: false,
      error: "El archivo no puede superar los 5 mb",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};
