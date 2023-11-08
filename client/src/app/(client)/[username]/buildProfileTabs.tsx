import { InitiativeGrid } from '@/components'
import { UserInterface } from '@/interfaces'
import Favorites from './_components/Favorites'
import Reviews from './_components/Reviews'

export const buildProfileTabs = (
  isOrg: boolean,
  isCurrent: boolean,
  isError: boolean,
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
