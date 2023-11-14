import { Session } from 'next-auth'
import { UsersHero } from '@/components'
import { UserInterface } from '@/interfaces'

interface Props {
  user: UserInterface
  session: Session | null
  isError: boolean
}

const Hero = ({ user, session, isError }: Props) => (
  <UsersHero
    isLoading={false}
    user={user}
    withAccountButton={user?._id === session?.user.id}
    withInitiativesButton={user?.role === 'organization' && user?._id === session?.user.id}
    isError={isError}
  />
)

export default Hero
