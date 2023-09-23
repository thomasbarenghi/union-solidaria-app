import { Hero } from '@/components'
import { UserInterface } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  user: UserInterface
  withButton?: boolean
  buttonText?: string
  buttonAction?: () => void
  buttonLink?: string
  isLoading?: boolean
}

const Content = ({ user, withButton, buttonText, buttonAction, buttonLink = '', isLoading = false }: Props) => (
  <div className='flex items-center justify-between'>
    <div className='flex items-center gap-4'>
      <Image
        src={user?.profileImage}
        alt='Picture of the author'
        width={80}
        height={80}
        className='aspect-square rounded-full border border-white object-cover p-2'
      />
      <div>
        <h1 className=' titulo-2 w-full font-semibold text-white'>{user?.firstName + ' ' + user?.lastName}</h1>
        <p className=' bodyText w-full text-white'>@{user?.username}</p>
      </div>
    </div>
    {withButton === true && (
      <Link href={buttonLink} className='primaryButton' onClick={buttonAction}>
        {buttonText}
      </Link>
    )}
  </div>
)

const UsersHero = ({ user, withButton, buttonText, buttonAction, buttonLink = '', isLoading = false }: Props) => (
  <Hero imageSrc={user?.bannerImage} height='min-h-[50vh] !rounded-none' isLoading={isLoading}>
    <Content
      user={user}
      withButton={withButton}
      buttonText={buttonText}
      buttonAction={buttonAction}
      buttonLink={buttonLink}
      isLoading={isLoading}
    />
  </Hero>
)

export default UsersHero
