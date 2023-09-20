'use client'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

interface DynamicPopoverProps {
  childrenTrigger: React.ReactNode
  children: React.ReactNode
  backdrop: 'blur' | 'opaque' | 'transparent'
}

const DynamicPopover = ({ childrenTrigger, children, backdrop }: DynamicPopoverProps) => (
  <div className='hidden lg:flex'>
    <Popover key='backdrop' showArrow offset={10} placement='bottom' backdrop={backdrop}>
      <PopoverTrigger>{childrenTrigger}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  </div>
)

export default DynamicPopover
