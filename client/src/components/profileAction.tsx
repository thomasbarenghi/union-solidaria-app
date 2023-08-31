import { HamburgerMenu, Popover, VerticalNav } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function ProfileAction() {
  const itemsNav = [
    {
      name: "Inicio",
      href: "/",
      visible: true,
    },
    {
      name: "Mi cuenta",
      href: "/profile",
      visible: true,
    },
    {
      name: "Iniciativas",
      href: "/iniciatives",
      visible: true,
    },
    {
      name: "Ayuda",
      href: "/help",
      visible: true,
    },
    {
      name: "Cerrar sesión",
      href: "/auth/logout",
      visible: true,
    },
  ];

  const childrenTrigger = (
    <>
      <div>
        <Image
          alt="Vercel Logo"
          width={50}
          height={50}
          className="aspect-square rounded-full object-cover p-1 border border-white"
          src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        />
      </div>
    </>
  );

  return (
    <>
      {true ? (
        <div>
          <div className="hidden lg:flex">
            <Popover childrenTrigger={childrenTrigger}>
              <VerticalNav items={itemsNav} />
            </Popover>
          </div>
          <div className="flex lg:hidden">
            <HamburgerMenu
              childrenTrigger={childrenTrigger}
              itemsNav={itemsNav}
            />
          </div>
        </div>
      ) : (
        <button className="button terceryButton hidden lg:flex">
          <Link href={"/auth"}>Iniciar sesión</Link>
        </button>
      )}
    </>
  );
}
