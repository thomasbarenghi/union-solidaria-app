'use client'
import { UsersHero } from '@/components'
import Routes from '@/utils/constants/routes.const'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'
import { fetcher } from '@/services/fetcher.service'

const HeroSec = ({ username }: { username: string }) => {
  const { data: currentActiveUser } = useSWR(Endpoints.USER_BY_ID(username), fetcher)
  const currentUser = useAppSelector(currentUserSelector)
  return (
    <UsersHero
      user={currentActiveUser?.user}
      withButton={currentActiveUser?.user?.id === currentUser?.id}
      buttonText='Editar cuenta'
      buttonLink={Routes.EDIT_ACCOUNT}
    />
  )
}

export default HeroSec
