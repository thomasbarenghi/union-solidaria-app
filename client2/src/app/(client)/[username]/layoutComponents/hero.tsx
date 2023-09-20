'use client'
import { UsersHero } from '@/components'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'
import { currentActiveUserSelector, currentUserSelector } from '@/redux/selectors/users'

const HeroSec = () => {
  const currentActiveUser = useAppSelector(currentActiveUserSelector)
  const currentUser = useAppSelector(currentUserSelector)
  return (
    <UsersHero
      user={currentActiveUser}
      withButton={currentActiveUser?.id === currentUser?.id}
      buttonText='Editar cuenta'
      buttonLink={Routes.EDIT_ACCOUNT}
    />
  )
}

export default HeroSec
