"use client";
import { Input } from "@/components";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { editUser } from "@/redux/slices/authSession";
import { useState } from "react";
import useValidate from "@/hooks/useValidate";
import { changeManager, submitManager } from "@/utils/forms/validateAndSend";
import { toast } from "sonner";

export default function Security() {
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
      await submitManager({
        e,
        formValues,
        errors,
        dispatch,
        actionToDispatch: editUser,
        setFormValues,
      });
    } catch (error) {
      console.error(error);
      toast.error("Verifica los campos del formulario");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full grid-cols-2  flex-col gap-4 lg:grid"
      >
        <div id="col1" className="flex w-full flex-col gap-4">
          <Input
            type="password"
            name="oldPassword"
            label="Contraseña actual"
            placeholder="Contraseña actual"
            className="w-full"
            onChange={handleChange}
            error={errors.oldPassword}
          />
        </div>
        <div id="col2" className="flex w-full flex-col gap-4">
          <Input
            type="password"
            name="newPassword"
            label="Nueva contraseña"
            placeholder="Nueva contraseña"
            className="w-full"
            onChange={handleChange}
            error={errors.newPassword}
          />
        </div>
        <button type="submit" className="primaryButton w-40">
          Guardar
        </button>
      </form>
    </>
  );
}
