"use client";
import { Hero } from "@/components";

export default function HeroSec() {
  return (
    <Hero
      imageSrc="https://images.unsplash.com/photo-1458847462994-d6e8043299f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
      gap="gap-1"
    >
      <>
        <h1 className="text-center w-full titulo-2 font-semibold text-white">
          Sobre Union Solidaria ❤️
        </h1>
        <p className="text-center w-full bodyText text-white">
          Juntos, somos mas
        </p>
      </>
    </Hero>
  );
}
