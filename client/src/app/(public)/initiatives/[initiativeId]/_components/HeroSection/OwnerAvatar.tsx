'use client'
import { User as UserUI } from '@nextui-org/react'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  data: InitiativeInterface

}

const OwnerAvatar = ({ data }: Props) => (
  <UserUI
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

)

export default OwnerAvatar
