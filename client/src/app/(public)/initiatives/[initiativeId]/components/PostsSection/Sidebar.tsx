'use client'
import { InitiativeInterface } from '@/interfaces'
import { User } from '@nextui-org/react'

interface SidebarProps {
  data: InitiativeInterface
  isLoading: boolean
}

const Sidebar = ({ data }: SidebarProps) => (
  <div className='flex h-max w-full lg:w-auto lg:min-w-[300px] flex-col gap-3 rounded-2xl border border-solid border-slate-200 p-6 '>
    <div className='flex flex-col gap-1'>
      <User
        classNames={{
          name: ' !text-sm !leading-[155%] font-medium',
          base: 'flex gap-3 items-center justify-start cursor-pointer'
        }}
        name={data?.owner?.orgName}
        description={data?.owner?.username}
        avatarProps={{
          src: data?.owner?.profileImage,
          className: 'aspect-square h-[45px] w-[45px]'
        }}
      />
    </div>
  </div>
)

export default Sidebar
