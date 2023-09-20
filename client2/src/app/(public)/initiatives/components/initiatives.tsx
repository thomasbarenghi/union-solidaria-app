"use client";
import useSWR from "swr";
import { InitiativeGrid } from "@/components";
import { fetcher } from "@/services/fetcher.service";
import Endpoints from "@/utils/constants/endpoints.const";

export default function InitiativesSection() {
  const { data } = useSWR(Endpoints.INITIATIVES, fetcher);

  return (
    <section className=" flex flex-col gap-6">
      <h1 className="w-full titulo-3 font-light">
        Iniciativas cerca de{" "}
        <b className="font-semibold">Moron, Buenos Aires</b>
      </h1>
      <InitiativeGrid initiatives={data} />
    </section>
  );
}
