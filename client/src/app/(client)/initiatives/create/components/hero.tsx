'use client'
import { UsersHero } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'

const HeroSec = () => {
  const currentUser = useAppSelector(loggedUserSelector)
  return <UsersHero user={currentUser} />
}

export default HeroSec
