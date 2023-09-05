"use client";
import { Hero } from "@/components";
import Image from "next/image";
import Link from "next/link";

type Props = {
  user: any;
  withButton?: boolean;
  buttonText?: string;
  buttonAction?: () => void;
  buttonLink?: string;
};

export default function UsersHero({
  user,
  withButton,
  buttonText,
  buttonAction,
  buttonLink = "",
}: Props) {
  return (
    <Hero imageSrc={user.bannerImage} height="min-h-[50vh] ">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            src={user?.profileImage}
            alt="Picture of the author"
            width={80}
            height={80}
            className="aspect-square rounded-full object-cover p-2 border border-white"
          />
          <div>
            <h1 className=" w-full titulo-2 font-semibold text-white">
              {user?.firstName + " " + user?.lastName}
            </h1>
            <p className=" w-full bodyText text-white">@{user?.username}</p>
          </div>
        </div>
        {withButton && (
          <Link
            href={buttonLink}
            className="primaryButton"
            onClick={buttonAction}
          >
            {buttonText}
          </Link>
        )}
      </div>
    </Hero>
  );
}
