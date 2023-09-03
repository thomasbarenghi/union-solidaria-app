import { HamburgerMenu, Popover, Nav } from "@/components";
import Link from "next/link";
import Image from "next/image";
import Routes from "@/constants/routes";
import { useAppSelector } from "@/redux/hooks";
import { currentUserSelector } from "@/redux/selectors/users";

export default function ProfileAction() {
  const currentUser = useAppSelector(currentUserSelector);
  const itemsNav = [
    {
      name: "Inicio",
      href: Routes.HOME,
      visible: true,
    },
    {
      name: "Mi cuenta",
      href: "/" + currentUser?.username,
      visible: true,
    },
    {
      name: "Iniciativas",
      href: Routes.INITIATIVES,
      visible: true,
    },
    {
      name: "Ayuda",
      href: Routes.HELP,
      visible: true,
    },
    {
      name: "Cerrar sesión",
      href: Routes.LOGOUT,
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
              <Nav items={itemsNav} />
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
          <Link href={Routes.LOGIN} >Iniciar sesión</Link>
        </button>
      )}
    </>
  );
}
