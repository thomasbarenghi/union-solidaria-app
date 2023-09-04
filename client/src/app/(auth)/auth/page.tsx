"use client";
import { Input } from "@/components";
import AuthBase from "./authBase";
import useValidate from "@/hooks/useValidate";
import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/slices/authSession";
import { changeManager, submitManager } from "@/utils/forms/validateAndSend";
import Link from "next/link";
import Head from "next/head";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Routes from "@/constants/routes";

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const validate = useValidate();
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeManager({
      e,
      setFormValues,
      setErrors,
      validate,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const response = await submitManager({
        e,
        formValues,
        errors,
        dispatch,
        actionToDispatch: login,
        setFormValues,
      });
      router.push(
        `/?userId=${response.payload.userId}&sessionId=${response.payload.sessionId}`,
      );
    } catch (error) {
      console.error(error);
      toast.error("Verifica los campos del formulario");
    }
  };

  return (
    <>
      <Head>
        <title>Iniciar sesion | Articly</title>
        <meta name="theme-color" content="#1e40af" />
      </Head>
      <AuthBase image="https://images.unsplash.com/photo-1644726270363-e746b37b482b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80">
        <h1 className="titulo-3 mb-6 font-normal">
          Hola, bienvenido <b>de nuevo</b>
        </h1>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          <Input
            type="email"
            name="email"
            label="Correo electrónico"
            placeholder="Correo electrónico"
            className="w-full"
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Contraseña"
            placeholder="Contraseña"
            onChange={handleChange}
            error={errors.password}
          />
          <button type="submit" className="primaryButton">
            Ingresar
          </button>
        </form>
        <p className="mt-6 w-full text-center font-light">
          ¿No tienes una cuenta?{" "}
          <Link href={Routes.REGISTER} className="font-medium text-emerald-800">
            Regístrate
          </Link>
        </p>
      </AuthBase>
    </>
  );
}
