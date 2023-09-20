'use client'
import { UsersHero } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'

const HeroSec = () => {
  const currentUser = useAppSelector(currentUserSelector)
  return <UsersHero user={currentUser} withButton={false} />
}

export default HeroSec
