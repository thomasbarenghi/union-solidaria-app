'use client'
import { Skeleton } from '@nextui-org/react'

const InitiativeItemSkeleton = () => (
  <div className='flex w-full flex-col'>
    <div className='flex w-full flex-col gap-4 '>
      <div className='relative aspect-[1/1]  w-full'>
        <Skeleton className='absolute aspect-[1/1] h-full w-full !animate-none rounded-2xl' />
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-[20px] w-[150px] rounded-full' />
          <Skeleton className='h-[15px] w-[120px] rounded-full' />
        </div>
        <Skeleton className='h-[15px] w-[100px] rounded-full' />
      </div>
    </div>
  </div>
)

export default InitiativeItemSkeleton
