'use client'
import { UsersHero } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'

const HeroSec = ({ username }: { username: string }) => {
  const { data: currentUser, isLoading } = useSWR(Endpoints.USER_BY_ID(username))
  const loggedUser = useAppSelector(loggedUserSelector)
  return (
    <UsersHero
      isLoading={isLoading}
      user={currentUser}
      withAccountButton={currentUser?._id === loggedUser?._id}
      withInitiativesButton={currentUser?.role === 'organization'}
    />
  )
}

export default HeroSec
