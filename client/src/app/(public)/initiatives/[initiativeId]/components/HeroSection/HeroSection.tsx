'use client'
import { Hero, TextElement } from '@/components'
import { Chip, User } from '@nextui-org/react'
import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'
import { InitiativeInterface } from '@/interfaces'
import { statusChipBuilder } from './statusChipBuilder'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector, currentAuthSelector } from '@/redux/selectors/users'
import { dateStatusChipBuilder } from './dateStatusChipBuilder'

interface Props {
  data: InitiativeInterface
  isLoading: boolean
  children?: React.ReactNode
}

const HeroSec = ({ data, isLoading, children }: Props) => {
  const currentUser = useAppSelector(loggedUserSelector)
  const auth = useAppSelector(currentAuthSelector)
  const chipData = statusChipBuilder(data, currentUser)
  const dateChipData = dateStatusChipBuilder(data)
  return (
    <Hero imageSrc={data?.thumbnail} isLoading={isLoading} height='h-[50vh] '>
      <div className='flex items-center justify-between py-10'>
        <div className='flex flex-col gap-2'>
          <TextElement type='t2' as='h1' className='w-full !font-semibold text-white'>
            {data?.title}
          </TextElement>
          <Link href={Routes.PROFILE(data?.owner?.username)}>
            <User
              classNames={{
                name: '!text-white !text-sm !leading-[155%] font-light',
                base: 'flex gap-2 items-center justify-start cursor-pointer'
              }}
              name={data?.owner?.orgName}
              avatarProps={{
                src: data?.owner?.profileImage,
                className: 'aspect-square h-[30px] w-[30px]'
              }}
            />
          </Link>
          <TextElement type='base' as='p' className='text-white'>
            {data?.locations}
          </TextElement>
          <div className='flex gap-1'>
            {auth.isLogged && (
              <Chip
                color={chipData.color}
                classNames={{
                  content: '!font-semibold !text-[12px]'
                }}
              >
                {chipData.title}
              </Chip>
            )}
            <Chip
              color={dateChipData.color}
              classNames={{
                content: '!font-semibold !text-[12px] '
              }}
            >
              {dateChipData.title}
            </Chip>
          </div>
        </div>
        {children}
      </div>
    </Hero>
  )
}

export default HeroSec
