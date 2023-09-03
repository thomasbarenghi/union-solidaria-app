"use client";
import { InitiativeGrid } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { initiativesSelector } from "@/redux/selectors/initiatives";

export default function Initiatives() {
  const initiatives = useAppSelector(initiativesSelector);
  return (
    <section className="w-full flex flex-col gap-6">
      <h1 className="w-full titulo-3 font-light">
        Iniciativas <b className="font-semibold">destacadas</b>
      </h1>
      <InitiativeGrid initiatives={initiatives.slice(0, 4)} />
    </section>
  );
}
