"use client";
import { InitiativeGrid } from "@/components";
import { fetcher } from "@/services/fetcher.service";
import Endpoints from "@/utils/constants/endpoints.const";
import useSWR from "swr";

export default function Initiatives() {
  const { data } = useSWR(Endpoints.INITIATIVES, fetcher);
  return (
    <section className="w-full flex flex-col gap-6">
      <h1 className="w-full titulo-3 font-light">
        Iniciativas <b className="font-semibold">destacadas</b>
      </h1>
      <InitiativeGrid initiatives={data?.slice(0, 4)} />
    </section>
  );
}
