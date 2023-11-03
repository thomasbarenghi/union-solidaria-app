import { UsersHero } from '@/components'
import { UserInterface } from '@/interfaces'

interface Props {
  user: UserInterface
  session: any
  isError: boolean
}

const HeroSec = ({ user, session, isError }: Props) => (
  <UsersHero
    isLoading={false}
    user={user}
    withAccountButton={user?._id === session?.user.id}
    withInitiativesButton={user?.role === 'organization' && user?._id === session?.user.id}
    isError={isError}
  />
)

export default HeroSec
