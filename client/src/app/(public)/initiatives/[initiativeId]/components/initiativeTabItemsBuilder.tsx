import { InitiativeInterface, UserInterface } from '@/interfaces'
import InfoSection from './InfoSection/InfoSection'
import PostSection from './PostsSection/PostSection'
import VolunteersSection from './VolunteersSection/VolunteersSection'

export const initiativeTabItemsBuilder = (
  currentUser: UserInterface,
  isLoading: boolean,
  data: InitiativeInterface
) => {
  const isOrg = currentUser?.role === 'organization'
  const isCurrent = currentUser?._id === data?.owner?._id
  return [
    {
      title: 'Informacion',
      content: <InfoSection data={data} isLoading={isLoading} />
    },
    {
      title: 'Publicaciones',
      content: <PostSection data={data} isLoading={isLoading} />
    },
    {
      title: 'Voluntarios',
      content: <VolunteersSection data={data} isLoading={isLoading} />,
      visible: isOrg && isCurrent
    },
    {
      title: 'Configuracion',
      content: <> </>,
      visible: isOrg && isCurrent
    }
  ]
}
