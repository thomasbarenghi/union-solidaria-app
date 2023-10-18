'use client'
import { Skeleton } from '@nextui-org/react'

const VolunteerItemSkeleton = () => (
  <div className='relative flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
    <div className='flex items-center gap-4'>
      <div className='flex items-center justify-start gap-2'>
        <Skeleton className='h-[40px] w-[40px] rounded-full' />
        <div className='flex flex-col gap-[4px] '>
          <Skeleton className='h-[15px] w-[100px] rounded-full' />
          <Skeleton className='h-[10px] w-[60px] rounded-full' />
        </div>
      </div>
      <Skeleton className='h-[15px] w-[50px] rounded-full' />
    </div>
    <div className='flex gap-2'>
      <Skeleton className='h-[30px] w-[80px] rounded-full' />
      <Skeleton className='h-[30px] w-[80px] rounded-full' />
    </div>
  </div>
)

export default VolunteerItemSkeleton
