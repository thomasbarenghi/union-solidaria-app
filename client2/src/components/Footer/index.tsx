import Image from "next/image";
import { Nav } from "@/components";
import { itemsNav } from "./lib/itemsNav";

export default function Footer() {
  return (
    <footer className="flex items-start gap-8 flex-col lg:flex-row justify-between w-full  bg-green-800 section-padding-1">
      <div className="flex flex-col gap-2">
        <Image
          src="/icon/logo-light.svg"
          alt="Vercel Logo"
          width={185}
          height={35}
        />
        <p className="smallText text-white font-light">
          © 2023 Union Solidaria S.A. Todos los derechos reservados.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="bodyText text-white font-medium">Quizas te interese</h3>
        <Nav items={itemsNav} textStyles="text-white font-light" />
      </div>
    </footer>
  );
}
