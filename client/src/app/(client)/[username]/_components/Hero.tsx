import { UsersHero } from '@/components'
import { UserInterface } from '@/interfaces'

interface Props {
  user: UserInterface
  sessionId: string
  isError: boolean
}

const Hero = ({ user, sessionId, isError }: Props) => (
  <UsersHero
    isLoading={false}
    user={user}
    withAccountButton={user?._id === sessionId}
    withInitiativesButton={user?.role === 'organization' && user?._id === sessionId}
    isError={isError}
  />
)

export default Hero
