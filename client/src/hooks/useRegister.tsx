import { useState } from "react";

type Error = {
  firstName: string | null;
  lastName: string | null;
  password: string | null;
  email: string | null;
  username: string | null;
  nickName: string | null;
};

type DataRegister = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  username: string;
};

const useRegister = () => {
  const [error, setError] = useState<Error>({
    firstName: null,
    lastName: null,
    password: null,
    email: null,
    username: null,
    nickName: null,
  });

  const [data, setData] = useState<DataRegister>({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const errorForm = Object.values(error).some((e) => e != null);

  const EmptyForm = Object.values(data).some((e) => e.trim() == "");

  const isValidForm = errorForm || EmptyForm;

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(e);
    handleNamesErrors(e);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(e);
    handleNamesErrors(e);
  };

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(e);
    handleNamesErrors(e);
  };

  const handleNamesErrors = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidName =
      /[^a-zA-ZÀ-ÿ\s]/.test(e.target.value) ||
      e.target.value.length < 3 ||
      e.target.value.length > 15;

    setError({
      ...error,
      [e.target.name]: isValidName
        ? "No se aceptan caracteres especiales y debe tener entre 3 y 15 caracteres"
        : null,
    });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(e);
    handleEmailError(e);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(e);
    handlePasswordError(e);
  };

  const handleEmailError = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValidEmail: boolean = !/^\S+@\S+\.\S+$/.test(e.target.value);
    setError({
      ...error,
      email: isValidEmail ? "Ingresa un correo electrónico válido" : null,
    });
  };

  const handlePasswordError = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { password } = data;
    const isValidPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{7,}$/.test(e.target.value); //.test(e.target.value);

    setError({
      ...error,
      password: !isValidPassword
        ? "la contraseñase debe tener al menos 8 caracteres"
        : null,
    });
  };

  const setInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return {
    data,
    error,
    handleFirstName,
    handleLastName,
    handleUserName,
    handleEmail,
    handlePassword,
    isValidForm,
    errorForm,
  };
};

export default useRegister;
