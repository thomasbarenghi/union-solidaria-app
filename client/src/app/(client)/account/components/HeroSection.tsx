'use client'
import { UsersHero } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'
import Endpoints from '@/utils/constants/endpoints.const'
import useSWR from 'swr'

const HeroSec = () => {
  const loggedUser = useAppSelector(loggedUserSelector)
  const { data: currentUser } = useSWR(Endpoints.USER_BY_ID(loggedUser.username))
  return <UsersHero user={currentUser} />
}

export default HeroSec
