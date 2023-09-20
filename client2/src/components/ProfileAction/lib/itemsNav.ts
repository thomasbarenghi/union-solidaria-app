import { UserInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'

export interface ItemNavInterface {
  name: string
  href: string
  visible: boolean
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default' | undefined
}

export const itemsNavBuilder = (currentUser: UserInterface): ItemNavInterface[] => [
  {
    name: 'Inicio',
    href: Routes.HOME,
    visible: true
  },
  {
    name: 'Mi cuenta',
    href: Routes.PROFILE(currentUser?.username),
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
    visible: true,
    color: 'danger'
  }
]
