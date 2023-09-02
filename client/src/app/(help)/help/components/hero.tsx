"use client";
import { Hero } from "@/components";

export default function HeroSec() {
  return (
    <Hero
      imageSrc="https://images.unsplash.com/photo-1593132517397-ceb31d77194a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
      height="min-h-[50vh]"
    >
      <div className="w-full flex flex-col  gap-1">
        <h1 className="text-start   w-full titulo-2 font-light text-white">
          Como en todo equipo,{" "}
          <b className="font-semibold">estamos para ayudarnos.</b>
        </h1>
        <p className="text-start   w-full bodyText font-light text-white">
          En nuestro centro de ayuda encontrarás las respuestas a las preguntas
          más frecuentes, como también podrás contactarnos para resolver tus
          dudas.
        </p>
      </div>
    </Hero>
  );
}
