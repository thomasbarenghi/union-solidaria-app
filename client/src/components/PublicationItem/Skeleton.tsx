'use client'
import { Skeleton } from '@nextui-org/react'

const PublicationItemSkeleton = () => (
  <div className='relative flex w-full cursor-pointer flex-col items-start gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
    <div className='flex items-center justify-start gap-2'>
      <Skeleton className='h-[40px] w-[40px] rounded-full' />
      <div className='flex flex-col gap-[4px] '>
        <Skeleton className='h-[15px] w-[100px] rounded-full' />
        <Skeleton className='h-[10px] w-[60px] rounded-full' />
      </div>
    </div>
    <div className='flex w-full flex-col gap-1'>
      <Skeleton className='h-[15px] w-[100%] rounded-full' />
      <Skeleton className='h-[15px] w-[85%] rounded-full' />
      <Skeleton className='h-[15px] w-[75%] rounded-full' />
      <Skeleton className='h-[15px] w-[65%] rounded-full' />
    </div>
    <div>
      <Skeleton className='h-[15px] w-[100px] rounded-full' />
    </div>
  </div>
)

export default PublicationItemSkeleton
