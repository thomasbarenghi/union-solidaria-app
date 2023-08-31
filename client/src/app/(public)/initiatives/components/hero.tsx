"use client";
import { Search, Hero } from "@/components";

export default function HeroSec() {
  return (
    <Hero imageSrc="https://images.unsplash.com/photo-1522600579804-c66aa476298e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80">
      <>
        <h1 className="text-center w-full titulo-3 font-light text-white">
          Encuentra la iniciativa que sea{" "}
          <b className="font-semibold">ideal para ti</b>
        </h1>
        <Search />
      </>
    </Hero>
  );
}
