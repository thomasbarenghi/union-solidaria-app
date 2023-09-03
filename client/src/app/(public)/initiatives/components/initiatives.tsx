"use client";
import { InitiativeGrid } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { initiativesSelector } from "@/redux/selectors/initiatives";

export default function Initiatives() {
  const initiatives = useAppSelector(initiativesSelector);
  return (
    <section className=" flex flex-col gap-6">
      <h1 className="w-full titulo-3 font-light">
        Iniciativas cerca de{" "}
        <b className="font-semibold">Moron, Buenos Aires</b>
      </h1>
      <InitiativeGrid initiatives={initiatives} />
    </section>
  );
}
