import { InitiativeGrid, ReviewGrid } from '@/components'
import { UserInterface } from '@/interfaces'

export const profileTabItemsBuilder = (
  isOrg: boolean,
  isCurrent: boolean,
  isError: boolean,
  isErrorReview: boolean,
  isLoading: boolean,
  currentUser: UserInterface
) => [
  {
    title: isOrg ? 'Iniciativas organizadas' : 'Iniciativas',
    content: <InitiativeGrid initiatives={currentUser?.initiatives} isLoading={isLoading} isCurrent={isCurrent} isError={isError} />
  },
  {
    title: 'Favoritos',
    content: <InitiativeGrid initiatives={currentUser?.favorites} isLoading={isLoading} isCurrent={isCurrent} isError={isError} />,
    visible: isCurrent
  },
  {
    title: isOrg ? 'Reseñas recibidas' : 'Reseñas',
    content: <ReviewGrid reviews={currentUser?.reviews} isLoading={isLoading} isCurrent={isCurrent} isError={isErrorReview} />
  }
]
