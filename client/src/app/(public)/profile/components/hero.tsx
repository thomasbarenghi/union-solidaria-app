"use client";
import { Hero } from "@/components";
import Image from "next/image";

export default function HeroSec() {
  return (
    <Hero
      imageSrc="https://images.unsplash.com/photo-1608535002897-27b2aa592456?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      height="min-h-[50vh] "
    >
      <div className="flex gap-4 items-center">
        <Image
          src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Picture of the author"
          width={80}
          height={80}
          className="aspect-square rounded-full object-cover p-2 border border-white"
        />
        <div>
          <h1 className=" w-full titulo-2 font-semibold text-white">
            Maria Jose
          </h1>
          <p className=" w-full bodyText text-white">@mariajose</p>
        </div>
      </div>
    </Hero>
  );
}
