import { UsersHero } from '@/components'
import { UserInterface } from '@/interfaces'

interface Props {
  user: UserInterface
  session: any
}

const HeroSec = ({ user, session }: Props) => (
  <UsersHero
    isLoading={false}
    user={user}
    withAccountButton={user?._id === session?.user.id}
    withInitiativesButton={user?.role === 'organization' && user?._id === session?.user.id}
  />
)

export default HeroSec
