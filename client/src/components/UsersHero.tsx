import { Hero } from '@/components'
import { UserInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  user: UserInterface
  withAccountButton?: boolean
  isLoading?: boolean
  withInitiativesButton?: boolean
}

const Content = ({ user, withAccountButton, withInitiativesButton, isLoading = false }: Props) => (
  <div className='flex items-center justify-between'>
    <div className='flex items-center gap-4'>
      <Image
        src={user?.profileImage}
        alt='Picture of the author'
        width={60}
        height={60}
        className='aspect-square rounded-full border border-white object-cover p-1'
      />
      <div>
        <h1 className=' subtitulo w-full font-semibold text-white'>{user?.firstName + ' ' + user?.lastName}</h1>
        <p className=' smalltext w-full text-white'>@{user?.username}</p>
      </div>
    </div>
    <div className='flex gap-2'>
      {withAccountButton === true && (
        <Link href={Routes.ACCOUNT} className='secondaryButton'>
          Editar cuenta
        </Link>
      )}
      {withInitiativesButton === true && (
        <Link href={Routes.ACCOUNT} className='primaryButton'>
          Crear iniciativa
        </Link>
      )}
    </div>
  </div>
)

const UsersHero = ({ user, withAccountButton = false, isLoading = false, withInitiativesButton = false }: Props) => (
  <Hero imageSrc={user?.bannerImage} height='min-h-[45vh] !rounded-none' isLoading={isLoading}>
    <Content
      user={user}
      withAccountButton={withAccountButton}
      isLoading={isLoading}
      withInitiativesButton={withInitiativesButton}
    />
  </Hero>
)

export default UsersHero
