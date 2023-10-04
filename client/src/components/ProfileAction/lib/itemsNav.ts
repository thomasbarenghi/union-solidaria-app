import { UserInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'

export interface ItemNavInterface {
  label: string
  key: string
  href: string
  visible: boolean
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default' | undefined
}

export const itemsNavBuilder = (currentUser: UserInterface): ItemNavInterface[] => [
  {
    key: Routes.HOME,
    label: 'Inicio',
    href: Routes.HOME,
    visible: true
  },
  {
    key: Routes.PROFILE(currentUser?.username),
    label: 'Mi cuenta',
    href: Routes.PROFILE(currentUser?.username),
    visible: true
  },
  {
    key: Routes.INITIATIVES,
    label: 'Iniciativas',
    href: Routes.INITIATIVES,
    visible: true
  },
  {
    key: Routes.HELP,
    label: 'Ayuda',
    href: Routes.HELP,
    visible: true
  }
  // {
  //   key: Routes.LOGOUT,
  //   label: 'Cerrar sesión',
  //   href: Routes.LOGOUT,
  //   visible: true,
  //   color: 'danger'
  // }
]
