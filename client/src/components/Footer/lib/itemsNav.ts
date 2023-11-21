import { VerticalNavItemProps } from '@/components/Nav'
import Routes from '@/utils/constants/routes.const'

export const itemsNav: VerticalNavItemProps[] = [
  {
    name: 'Acerca de',
    href: Routes.ABOUT,
    visible: true
  },
  {
    name: 'Donar',
    href: Routes.DONATION,
    visible: true
  },
  {
    name: 'Ayuda',
    href: Routes.HELP,
    visible: true
  },
  {
    name: 'Legal',
    href: Routes.LEGAL,
    visible: true
  }
]
