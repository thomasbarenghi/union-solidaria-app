"use client";
import { Search, Hero } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { currentInitiativeSelector } from "@/redux/selectors/initiatives";

export default function HeroSec() {
  const currentInitiative = useAppSelector(currentInitiativeSelector);
  return (
    <Hero imageSrc={currentInitiative?.thumbnail}>
      <>
        <div className="py-10 flex flex-col gap-3">
          <div>
            <h1 className=" w-full titulo-3 font-medium text-white">
              {currentInitiative?.title}
            </h1>
            <p className="font-light bodyText text-white">
              {currentInitiative?.locations}
            </p>
          </div>
          <button className="bg-green-800 w-max text-white font-medium rounded-full px-7 py-3">
            Inscríbete ahora
          </button>
        </div>
      </>
    </Hero>
  );
}
