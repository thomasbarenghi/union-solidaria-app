import { InitiativeInterface, UserInterface } from '@/interfaces'
import InfoSection from './_components/InfoSection/InfoSection'
import PostSection from './_components/PostsSection/PostSection'
import VolunteersSection from './_components/VolunteersSection'
import ConfigSection from './_components/ConfigSection'

export const initiativeTabItemsBuilder = (
  currentUser: UserInterface,
  data: InitiativeInterface
) => {
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
