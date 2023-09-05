"use client";
import { Input } from "@/components";
import useValidate from "@/hooks/useValidate";
import { useAppDispatch } from "@/redux/hooks";
import { login } from "@/redux/slices/authSession";
import { changeManager, submitManager } from "@/utils/forms/validateAndSend";
import Link from "next/link";
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
        `/?userId=${response.payload.userId}&sessionId=${response.payload.sessionId}`
      );
    } catch (error) {
      console.error(error);
      toast.error("Verifica los campos del formulario");
    }
  };

  return (
    <div>
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
    </div>
  );
}
