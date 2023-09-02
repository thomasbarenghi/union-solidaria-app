type validResponse = {
  isValid: boolean;
  error: string;
};

export const isValidFirstName = (value: string): validResponse => {
  //const isValid = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value);
  //Permitimos numeros
  const isValid = /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/.test(value);
  if (!isValid) {
    return {
      isValid: false,
      error:
        "El nombre no puede contener caracteres especiales y debe tener entre 1 y 40 caracteres",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};

export const isValidLastName = (value: string): validResponse => {
  const isValid = /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value);

  if (!isValid) {
    return {
      isValid: false,
      error:
        "El apellido no puede contener números ni caracteres especiales y debe tener entre 1 y 40 caracteres",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};

export const isValidUsername = (value: string): validResponse => {
  const isValid = /^[a-zA-Z0-9]{1,40}$/.test(value);

  if (!isValid) {
    return {
      isValid: false,
      error:
        "El nombre de usuario no puede contener caracteres especiales y debe tener entre 1 y 40 caracteres",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};

export const isValidEmail = (value: string): validResponse => {
  const isValid = /^\S+@\S+\.\S+$/.test(value);

  if (!isValid) {
    return {
      isValid: false,
      error: "El email no es válido",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};

export const isValidPassword = (value: string): validResponse => {
  if (!value || value.trim() === "") {
    return {
      isValid: false,
      error: "La contraseña es requerida",
    };
  }
  const isValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/.test(
      value,
    );

  if (!isValid) {
    return {
      isValid: false,
      error:
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un caracter especial",
    };
  } else {
    return {
      isValid: true,
      error: "",
    };
  }
};
