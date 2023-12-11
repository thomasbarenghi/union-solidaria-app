/* eslint-disable react/jsx-handler-names */
'use client'
import { Key } from 'react'
import { InitiativeInterface } from '@/interfaces'
import ModalManager from './ModalManager'
import { Hero, TextElement } from '@/components'
import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import OwnerAvatar from './OwnerAvatar'
import Chips from './Chips'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'

interface Props {
  initiative: InitiativeInterface
  isLoading: boolean
  isError: boolean
  currentIndex: Key
  currentUserId: string
  isLogged: boolean
}

const HeroSection = ({ initiative, isLoading = false, currentIndex, currentUserId, isLogged, isError }: Props) => {
  const { data } = useSWR(Endpoints.INITIATIVES_BY_ID(initiative._id), {
    fallbackData: initiative
  })
  return (
    <Hero imageSrc={data?.thumbnail} isLoading={isLoading} height='h-[65vh] lg:h-[50vh] ' isError={isError}>
      <div className='flex flex-col items-start justify-between gap-4 overflow-hidden py-10 md:flex-row lg:items-center'>
        <div className='flex flex-col gap-2'>
          <TextElement type='t2' as='h1' className='w-full text-ellipsis !font-semibold text-white'>
            {data?.title}
          </TextElement>
          <Link href={Routes.PROFILE(data?.owner?.username)}>
            <OwnerAvatar data={data} />
          </Link>
          <TextElement type='base' as='p' className='text-white'>
            {data?.locations}
          </TextElement>
          <Chips data={data} currentUserId={currentUserId} isLogged={isLogged} />
        </div>
        <ModalManager data={data} currentIndex={currentIndex} currentUserId={currentUserId} isLogged={isLogged} />
      </div>
    </Hero>
  )
}
export default HeroSection
