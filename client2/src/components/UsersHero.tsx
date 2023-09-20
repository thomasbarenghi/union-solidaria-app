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
}

const UsersHero = ({ user, withButton, buttonText, buttonAction, buttonLink = '' }: Props) => (
  <Hero imageSrc={user?.bannerImage} height='min-h-[50vh] '>
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
  </Hero>
)

export default UsersHero
