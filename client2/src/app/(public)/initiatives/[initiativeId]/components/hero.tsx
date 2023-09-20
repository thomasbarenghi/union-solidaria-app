"use client";
import useSWR from "swr";
import { Hero } from "@/components";
import { fetcher } from "@/services/fetcher.service";
import Endpoints from "@/utils/constants/endpoints.const";

interface Props {
  id: string;
}

export default function HeroSec({ id }: Props) {
  const { data } = useSWR(Endpoints.INITIATIVES_BY_ID(id), fetcher);
  return (
    <Hero imageSrc={data?.thumbnail}>
      <div className="py-10 flex flex-col gap-3">
        <div>
          <h1 className=" w-full titulo-3 font-medium text-white">
            {data?.title}
          </h1>
          <p className="font-light bodyText text-white">{data?.locations}</p>
        </div>
        <button className="bg-green-800 w-max text-white font-medium rounded-full px-7 py-3">
          Inscríbete ahora
        </button>
      </div>
    </Hero>
  );
}
