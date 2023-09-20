"use client";
import Link from "next/link";
import Image from "next/image";
import Routes from "@/utils/constants/routes.const";
import { useAppSelector } from "@/redux/hooks";
import { currentUserSelector } from "@/redux/selectors/users";
import { DynamicPopover } from "@/components";
import { itemsNavBuilder } from "./lib/itemsNav";
import { Nav } from "@/components";

export default function ProfileAction() {
  const currentUser = useAppSelector(currentUserSelector);

  const childrenTrigger = (
    <div>
      <Image
        alt="Vercel Logo"
        width={50}
        height={50}
        className="aspect-square rounded-full object-cover p-1 border border-white"
        src={currentUser.profileImage}
      />
    </div>
  );

  return (
    <>
      {currentUser.id ? (
        <DynamicPopover childrenTrigger={childrenTrigger} backdrop="opaque">
          <Nav items={itemsNavBuilder(currentUser)} />
        </DynamicPopover>
      ) : (
        <Link
          className="button primaryButton hidden lg:flex"
          href={Routes.LOGIN}
        >
          Iniciar sesión
        </Link>
      )}
    </>
  );
}
