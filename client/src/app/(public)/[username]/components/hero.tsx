"use client";
import { Hero } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { currentActiveUserSelector } from "@/redux/selectors/users";
import Image from "next/image";

export default function HeroSec() {
  const currentActiveUser = useAppSelector(currentActiveUserSelector);
  return (
    <Hero imageSrc={currentActiveUser.bannerImage} height="min-h-[50vh] ">
      <div className="flex gap-4 items-center">
        <Image
          src={currentActiveUser?.profileImage}
          alt="Picture of the author"
          width={80}
          height={80}
          className="aspect-square rounded-full object-cover p-2 border border-white"
        />
        <div>
          <h1 className=" w-full titulo-2 font-semibold text-white">
            {currentActiveUser?.firstName + " " + currentActiveUser?.lastName}
          </h1>
          <p className=" w-full bodyText text-white">
            @{currentActiveUser?.username}
          </p>
        </div>
      </div>
    </Hero>
  );
}
