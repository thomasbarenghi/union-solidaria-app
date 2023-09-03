"use client";
import { useAppSelector } from "@/redux/hooks";
import { currentInitiativeSelector } from "@/redux/selectors/initiatives";
import Image from "next/image";

function formatDate(date: Date) {
  const fechaOriginal = new Date(date);
  const dia = fechaOriginal.getDate().toString().padStart(2, "0");
  const mes = (fechaOriginal.getMonth() + 1).toString().padStart(2, "0");
  const anio = fechaOriginal.getFullYear().toString();
  const fechaFormateada = `${dia}/${mes}/${anio}`;
  return fechaFormateada;
}

function OrganizationInfo() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="w-full titulo-3 font-medium">Organización</h1>
      <div className="flex flex-col gap-2">
        <p className="bodyText font-light">
          Carpinchos Felices ORG es una organización sin fines de lucro que
          busca proteger la especie capibara. dev: pendiente
        </p>
        <p className="bodyText font-light">
          El responsable de esta organización es{" "}
          <b className="font-semibold">Federico Hernández</b> y su identidad fue
          verificada por Unión Solidaria. dev: pendiente
        </p>
      </div>
    </div>
  );
}

function InitiativeGeneralInfo() {
  const currentInitiative = useAppSelector(currentInitiativeSelector);
  return (
    <div className="flex flex-col gap-2">
      <h1 className="w-full titulo-3 font-medium">Descripcion</h1>
      <div className="flex flex-col gap-2">
        <p className="bodyText font-light">{currentInitiative?.description}</p>
      </div>
    </div>
  );
}

type Props = {
  icon: string;
  text: string;
};

function DateInfoItem({ icon, text }: Props) {
  return (
    <div className="flex gap-2">
      <Image src={icon} width={24} height={24} alt="Vercel Logo" />
      <p className="bodyText font-light">{text}</p>
    </div>
  );
}

function InitiativeDateInfo() {
  const currentInitiative = useAppSelector(currentInitiativeSelector);
  const startDate = formatDate(currentInitiative?.startDate);
  const endDate = formatDate(currentInitiative?.endDate);
  const date = `${startDate} - ${endDate}`;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="w-full titulo-3 font-medium">Información</h1>
      <div className="flex flex-col gap-4">
        <DateInfoItem icon="/icon/calendar.svg" text={date} />
        <DateInfoItem
          icon="/icon/location.svg"
          text={currentInitiative?.locations}
        />
        <DateInfoItem icon="/icon/info.svg" text="dev: pendiente" />
      </div>
    </div>
  );
}

export default function Info() {
  return (
    <section className="flex flex-col gap-6 lg:gap-10">
      <OrganizationInfo />
      <InitiativeGeneralInfo />
      <InitiativeDateInfo />
    </section>
  );
}
