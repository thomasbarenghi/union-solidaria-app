"use client";
import { Search, Hero } from "@/components";

export default function HeroSec() {
  return (
    <Hero
      imageSrc="https://images.unsplash.com/photo-1472087982327-49192446ed6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      height="min-h-[50vh]"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4">
        <h1 className="text-center lg:text-start   w-full titulo-2 font-light text-white">
          Tu ayuda puede <b className="font-semibold">hacer la diferencia.</b>
        </h1>
        <Search className="max-w-[350px] " />
      </div>
    </Hero>
  );
}
