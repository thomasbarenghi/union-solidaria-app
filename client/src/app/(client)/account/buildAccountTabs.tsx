import { Session } from 'next-auth'
import { UserInterface } from '@/interfaces'
import Edit from './_components/Account/EditAccountForm'
import PasswordForm from './_components/Account/ChangePasswordForm'
import OrganizationForm from './_components/OrganizationForm'

export const buildAccountTabs = (currentUser: UserInterface, session: Session) => [
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
