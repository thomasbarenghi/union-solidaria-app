"use client";
import { Search, Hero } from "@/components";

export default function HeroSec() {
  return (
    <Hero imageSrc="https://images.unsplash.com/photo-1577049205905-e4d91edc0a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80">
      <>
        <div className="py-10 flex flex-col gap-3">
          <div>
            <h1 className=" w-full titulo-3 font-medium text-white">
              Todos por los capibara
            </h1>
            <p className="font-light bodyText text-white">
              Tigre, Buenos Aires
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
