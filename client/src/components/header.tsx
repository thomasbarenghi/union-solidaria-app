import Image from "next/image";
import { useEffect, useState } from "react";
import { Nav, ProfileAction } from "@/components";

const itemsNav = [
  {
    name: "Inicio",
    href: "/",
    visible: true,
  },
  {
    name: "Nosotros",
    href: "/about",
    visible: true,
  },
  {
    name: "Iniciativas",
    href: "/initiatives",
    visible: true,
  },
  {
    name: "Ayuda",
    href: "/help",
    visible: true,
  },
];

type Props = {
  theme?: "dark" | "light";
};

export default function Header({ theme }: Props) {
  const [styles, setStyles] = useState("pt-7");

  return (
    <header
      className={`${styles} flex fixed z-50 section-padding-1 justify-center w-full bg-transparent`}
    >
      <div className="w-full  justify-between items-center flex 2xl:container">
      <Image
        src={`/icon/logo-${theme === "dark" ? "dark" : "light"}.svg`}
        alt="Vercel Logo"
        width={185}
        height={35}
      />
      <Nav
        items={itemsNav}
        className="hidden lg:flex"
        mode="horizontal"
        gap="gap-6"
        centerAbsolute={true}
        textStyles="text-white font-light"
      />
      <ProfileAction />
      </div>
    </header>
  );
}
