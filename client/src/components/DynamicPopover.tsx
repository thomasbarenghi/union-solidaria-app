'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import Image from 'next/image'

interface DynamicPopoverProps {
  image: string
  children: React.ReactNode
  backdrop: 'blur' | 'opaque' | 'transparent'
}

const DynamicPopover = ({ image, children, backdrop }: DynamicPopoverProps) => (
  <div className='lg:flex'>
    <Popover
      key='backdrop'
      offset={10}
      placement='bottom-end'
      backdrop={backdrop}
      classNames={{ base: 'p-2 min-w-[150px] ' }}
    >
      <PopoverTrigger>
        <Image
          alt='Profile image'
          width={50}
          height={50}
          className='aspect-square h-[50px] min-w-[50px] cursor-pointer  rounded-full border border-white object-cover p-1'
          src={image}
        />
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  </div>
)

export default DynamicPopover
