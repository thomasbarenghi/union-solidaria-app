import { InitiativeInterface, UserInterface } from '@/interfaces'
import InfoSection from './_components/Info/InfoSection'
import PostSection from './_components/Posts/Posts'
import VolunteersSection from './_components/Volunteers'
import ConfigSection from './_components/Config'

export const buildInitiativeTabs = (currentUser: UserInterface, data: InitiativeInterface) => {
  const isOrg = currentUser?.role === 'organization'
  const isCurrent = currentUser?._id === data?.owner?._id
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
