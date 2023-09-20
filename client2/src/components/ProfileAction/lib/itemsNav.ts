import Routes from "@/utils/constants/routes.const";

export const itemsNavBuilder = (currentUser: any) => {
  return [
    {
      name: "Inicio",
      href: Routes.HOME,
      visible: true,
    },
    {
      name: "Mi cuenta",
      href: "/@" + currentUser?.username,
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
};
