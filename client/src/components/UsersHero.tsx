import { Button, Hero, TextElement } from '@/components'
import { UserInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'
import { type User } from 'next-auth'
import Image from 'next/image'

interface Props {
  // TODO: remove UserInterface
  user: User | UserInterface | undefined
  withAccountButton?: boolean
  isLoading?: boolean
  withInitiativesButton?: boolean
  isError?: boolean
}

const Content = ({
  user,
  withAccountButton,
  withInitiativesButton
}: {
  user: User | UserInterface
  withAccountButton: boolean
  withInitiativesButton: boolean
}) => (
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
          {`@${user?.username}`}
        </TextElement>
      </div>
    </div>
    <div className='flex gap-2'>
      {withAccountButton && <Button variant='flat' className='bg-green-50' title='Editar cuenta' href='/account' />}
      {withInitiativesButton && <Button title='Crear iniciativa' href={Routes.CREATE_INITIATIVE} />}
    </div>
  </div>
)

const UsersHero = ({ user, withAccountButton = false, withInitiativesButton = false, isLoading = false }: Props) => (
  <Hero imageSrc={user?.bannerImage} height='min-h-[45vh] !rounded-none' isLoading={isLoading}>
    {!isLoading ? (
      <Content
        user={user as User}
        withAccountButton={withAccountButton}
        withInitiativesButton={withInitiativesButton}
      />
    ) : null}
  </Hero>
)

export default UsersHero
