'use client'
import { UsersHero } from '@/components'
import Endpoints from '@/utils/constants/endpoints.const'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const HeroSec = () => {
  const { data: session } = useSession()

  // TODO: handle case where user is not logged in and id cannot be passed to useSWR
  const { data: currentUser } = useSWR(Endpoints.USER_BY_ID(session?.user.id ?? ''))
  return <UsersHero user={currentUser} />
}

export default HeroSec
