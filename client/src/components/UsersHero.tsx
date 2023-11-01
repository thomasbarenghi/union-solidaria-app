import { Button, Hero, TextElement } from '@/components'
import { UserInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'

interface Props {
  user: UserInterface
  withAccountButton: boolean
  isLoading?: boolean
  withInitiativesButton: boolean
}

const Content = ({ user, withAccountButton, withInitiativesButton, isLoading = false }: Props) => (
  <div className='flex items-center justify-between'>
    <div className='flex items-center gap-4'>
      <Image
        src={user?.profileImage}
        alt='Picture of the author'
        width={70}
        height={70}
        className='aspect-square rounded-full border border-white object-cover p-1'
      />
      <div>
        <TextElement type='subtitle' as='h1' className='w-full !font-semibold text-white'>
          {user?.firstName + ' ' + user?.lastName}
        </TextElement>
        <TextElement type='small' as='p' className=' text-white'>
          @{user?.username}
        </TextElement>
      </div>
    </div>
    <div className='flex gap-2'>
      {withAccountButton && (
        <Button variant='flat' className='bg-green-50' title='Editar cuenta' href='/account' />
      )}
      {withInitiativesButton && <Button title='Crear iniciativa' href={Routes.CREATE_INITIATIVE} />}
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
