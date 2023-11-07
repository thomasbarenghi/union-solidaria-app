import { Session } from 'next-auth'
import Edit from './_components/GeneralForm'
import PasswordForm from './_components/PasswordForm'
import { UserInterface } from '@/interfaces'
import OrganizationForm from './_components/OrganizationForm'

export const accountTabItemsBuilder = (currentUser: UserInterface, session: Session) => [
  {
    title: 'Informacion general',
    content: <Edit currentUser={currentUser} session={session} />
  },
  {
    title: 'Organizacion',
    content: <OrganizationForm session={session} currentUser={currentUser} />,
    visible: currentUser?.role === 'organization'
  },
  {
    title: 'Contraseña',
    content: <PasswordForm session={session} />
  }
]
