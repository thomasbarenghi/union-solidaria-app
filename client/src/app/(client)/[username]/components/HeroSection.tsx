'use client'
import { UsersHero } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'

const HeroSec = ({ username }: { username: string }) => {
  console.log(username)
  const { data: currentUser, isLoading } = useSWR(Endpoints.USER_BY_ID(username))
  console.log(currentUser)
  const loggedUser = useAppSelector(loggedUserSelector)
  return (
    <UsersHero
      isLoading={isLoading}
      user={currentUser}
      withAccountButton={currentUser?._id === loggedUser?._id}
      withInitiativesButton={currentUser?.role === 'organization' && currentUser?._id === loggedUser?._id}
    />
  )
}

export default HeroSec
