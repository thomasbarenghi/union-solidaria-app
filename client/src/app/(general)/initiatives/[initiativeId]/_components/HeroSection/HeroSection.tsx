/* eslint-disable react/jsx-handler-names */
import { Key } from 'react'
import { InitiativeInterface } from '@/interfaces'
import ModalManager from './ModalManager'
import { Hero, TextElement } from '@/components'
import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import OwnerAvatar from './OwnerAvatar'
import Chips from './Chips'

interface Props {
  initiative: InitiativeInterface
  isLoading: boolean
  isError: boolean
  currentIndex: Key
  currentUserId: string
  isLogged: boolean
}

const HeroSection = ({ initiative, isLoading = false, currentIndex, currentUserId, isLogged, isError }: Props) => (
  <Hero imageSrc={initiative?.thumbnail} isLoading={isLoading} height='h-[50vh] ' isError={isError}>
    <div className='flex items-center justify-between py-10'>
      <div className='flex flex-col gap-2'>
        <TextElement type='t2' as='h1' className='w-full !font-semibold text-white'>
          {initiative?.title}
        </TextElement>
        <Link href={Routes.PROFILE(initiative?.owner?.username)}>
          <OwnerAvatar data={initiative} />
        </Link>
        <TextElement type='base' as='p' className='text-white'>
          {initiative?.locations}
        </TextElement>
        <Chips data={initiative} currentUserId={currentUserId} isLogged={isLogged} />
      </div>
      <ModalManager data={initiative} currentIndex={currentIndex} currentUserId={currentUserId} isLogged={isLogged} />
    </div>
  </Hero>
)

export default HeroSection
