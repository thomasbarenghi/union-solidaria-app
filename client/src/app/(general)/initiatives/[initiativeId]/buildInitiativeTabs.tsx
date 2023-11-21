import { type InitiativeInterface } from '@/interfaces'
import { type User } from 'next-auth'
import ConfigSection from './_components/Config'
import InfoSection from './_components/Info/InfoSection'
import PostSection from './_components/Posts/Posts'
import VolunteersSection from './_components/Volunteers'

export const buildInitiativeTabs = (currentUser: User | undefined, data: InitiativeInterface) => {
  const isOrg = currentUser?.role === 'organization'
  const isCurrent = currentUser?.id === data.owner._id
  return [
    {
      title: 'Informacion',
      content: <InfoSection data={data} />
    },
    {
      title: 'Publicaciones',
      content: <PostSection data={data} />
    },
    {
      title: 'Voluntarios',
      content: <VolunteersSection data={data} />,
      visible: isOrg && isCurrent
    },
    {
      title: 'Configuracion',
      content: <ConfigSection initiative={data} />,
      visible: isOrg && isCurrent
    }
  ]
}
