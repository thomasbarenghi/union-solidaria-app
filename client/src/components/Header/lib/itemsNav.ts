import Routes from '@/utils/constants/routes.const'

export const itemsNav = (isMobile: boolean) => [
  {
    name: 'Inicio',
    href: Routes.HOME,
    visible: true
  },
  {
    name: 'Nosotros',
    href: Routes.ABOUT,
    visible: true
  },
  {
    name: 'Iniciativas',
    href: Routes.INITIATIVES,
    visible: true
  },
  {
    name: 'Donar',
    href: Routes.DONATION,
    visible: isMobile
  },
  {
    name: 'Ayuda',
    href: Routes.HELP,
    visible: true
  }
]
