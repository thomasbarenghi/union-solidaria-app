'use client'
import { UsersHero } from '@/components'
import { useSession } from 'next-auth/react'

const HeroSec = () => {
  const { data: session, status } = useSession()

  // TODO: improve loading state handling
  return <UsersHero user={session?.user} isLoading={status === 'loading'} />
}

export default HeroSec
