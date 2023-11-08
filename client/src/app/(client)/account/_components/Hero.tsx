'use client'
import { UsersHero } from '@/components'
import { UserInterface } from '@/interfaces'
import Endpoints from '@/utils/constants/endpoints.const'
import { Session } from 'next-auth'
import useSWR from 'swr'

interface Props {
  session: Session
  currentUser: UserInterface
}

const Hero = ({ session, currentUser }: Props) => {
  const { data: user } = useSWR(Endpoints.USER_BY_EMAIL(session?.user?.username), {
    fallbackData: currentUser
  })
  return <UsersHero user={user} withAccountButton={false} withInitiativesButton={false} />
}

export default Hero
