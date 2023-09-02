type validResponse = {
  isValid: boolean;
  error: string;
};

export const isDescriptionValid = (value: string): validResponse => {
  if (!value || value.trim() === "") {
    return {
      isValid: false,
      error: "Description is required",
    };
  }
  //regex
  const isValid = value.length <= 60;

  if (!isValid) {
    return {
      isValid: false,
      error: "La descripción no puede superar los 60 caracteres",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};

export const isAccessCodeValid = (value: string): validResponse => {
  if (!value || value.trim() === "") {
    return {
      isValid: false,
      error: "El código de acceso es requerido",
    };
  }
  //regex
  const isValid = value.length <= 10 && value.length >= 4;

  if (!isValid) {
    return {
      isValid: false,
      error: "El código de acceso debe tener entre 4 y 10 caracteres",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};

export const isLongDescriptionValid = (value: string): validResponse => {
  if (!value || value.trim() === "") {
    return {
      isValid: false,
      error: "La descripción es requerida",
    };
  }
  //regex
  const isValid = value.length <= 300;

  if (!isValid) {
    return {
      isValid: false,
      error: "La descripción no puede superar los 300 caracteres",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};
