'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

interface DynamicPopoverProps {
  childrenTrigger: React.ReactNode
  children: React.ReactNode
  backdrop: 'blur' | 'opaque' | 'transparent'
}

const DynamicPopover = ({ childrenTrigger, children, backdrop }: DynamicPopoverProps) => (
  <div className='hidden lg:flex'>
    <Popover
      key='backdrop'
      offset={10}
      placement='bottom-end'
      backdrop={backdrop}
      classNames={{ base: 'p-2 min-w-[150px] ' }}
    >
      <PopoverTrigger>{childrenTrigger}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  </div>
)

export default DynamicPopover
