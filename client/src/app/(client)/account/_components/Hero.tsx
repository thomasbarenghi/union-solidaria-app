'use client'
import useSWR from 'swr'
import { Session } from 'next-auth'
import { UsersHero } from '@/components'
import { UserInterface } from '@/interfaces'
import Endpoints from '@/utils/constants/endpoints.const'

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
