import { InitiativeGrid } from '@/components'
import { UserInterface } from '@/interfaces'
import Favorites from './Favorites'
import Reviews from './Reviews'

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
    content: (
      <InitiativeGrid
        initiatives={currentUser?.initiatives}
        isLoading={isLoading}
        isCurrent={isCurrent}
        isError={isError}
      />
    )
  },
  {
    title: 'Favoritos',
    content: <Favorites currentUser={currentUser} isCurrent={isCurrent} />,
    visible: isCurrent
  },
  {
    title: isOrg ? 'Reseñas recibidas' : 'Reseñas',
    content: <Reviews currentUser={currentUser} isCurrent={isCurrent} />
  }
]
