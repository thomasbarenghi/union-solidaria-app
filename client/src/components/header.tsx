import Image from "next/image";
import { useEffect, useState } from "react";
import { ProfileAction } from "@/components";

export default function Header() {
  const [styles, setStyles] = useState("pt-7");

  return (
    <header
      className={`${styles} flex fixed z-50 pb-7  items-center justify-between px-6 w-full bg-transparent`}
    >
      <Image
        src="/icon/logo-light.svg"
        alt="Vercel Logo"
        width={185}
        height={35}
      />
      <ProfileAction />
    </header>
  );
}
