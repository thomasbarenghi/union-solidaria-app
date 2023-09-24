import { InitiativeGrid, ReviewGrid } from '@/components'
import { UserInterface } from '@/interfaces'

export const profileTabItemsBuilder = (
  isOrg: boolean,
  isCurrent: boolean,
  isLoading: boolean,
  currentUser: UserInterface
) => [
  {
    title: isOrg ? 'Iniciativas organizadas' : 'Iniciativas',
    content: <InitiativeGrid initiatives={currentUser?.initiatives} isLoading={isLoading} isCurrent={isCurrent} />
  },
  {
    title: 'Favoritos',
    content: <InitiativeGrid initiatives={currentUser?.favorites} isLoading={isLoading} isCurrent={isCurrent} />,
    visible: isCurrent
  },
  {
    title: isOrg ? 'Reseñas recibidas' : 'Reseñas',
    content: <ReviewGrid reviews={currentUser?.reviews} isLoading={isLoading} isCurrent={isCurrent} />
  }
]
