'use client'

import { UsersHero } from '@/components'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'
import { useSession } from 'next-auth/react'

const HeroSec = ({ username }: { username: string }) => {
  const { data: session } = useSession()
  const { data: currentUser, isLoading } = useSWR(Endpoints.USER_BY_ID(username))

  return (
    <UsersHero
      isLoading={isLoading}
      user={currentUser}
      withAccountButton={currentUser?._id === session?.user.id}
      withInitiativesButton={currentUser?.role === 'organization' && currentUser?._id === session?.user.id}
    />
  )
}

export default HeroSec
