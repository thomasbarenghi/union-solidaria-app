import Edit from './_components/GeneralForm'
import PasswordForm from './_components/PasswordForm'
import { UserInterface } from '@/interfaces'

export const accountTabItemsBuilder = (
  currentUser: UserInterface,
  session: any
) => [
  {
    title: 'Informacion general',
    content: <Edit currentUser={currentUser} />
  },
  {
    title: 'Contraseña',
    content: <PasswordForm session={session} />
  }
]
