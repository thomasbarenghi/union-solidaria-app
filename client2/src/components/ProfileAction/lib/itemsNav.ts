import Routes from '@/utils/constants/routes.const'

export const itemsNavBuilder = (currentUser: any) => [
  {
    name: 'Inicio',
    href: Routes.HOME,
    visible: true
  },
  {
    name: 'Mi cuenta',
    href: Routes.PROFILE(currentUser?.id),
    visible: true
  },
  {
    name: 'Iniciativas',
    href: Routes.INITIATIVES,
    visible: true
  },
  {
    name: 'Ayuda',
    href: Routes.HELP,
    visible: true
  },
  {
    name: 'Cerrar sesión',
    href: Routes.LOGOUT,
    visible: true
  }
]
