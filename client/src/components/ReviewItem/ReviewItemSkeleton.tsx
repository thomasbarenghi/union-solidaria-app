'use client'
import { Skeleton } from '@nextui-org/react'

const ReviewItem = () => (
  <div className='relative flex w-full cursor-pointer flex-col gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
    <div className='flex items-center gap-2'>
      <Skeleton className='h-[35px] w-[35px] rounded-full' />
      <Skeleton className='h-[15px] w-[60px] rounded-full' />
    </div>
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col gap-1'>
        <Skeleton className='h-[15px] w-[95%] rounded-full' />
        <Skeleton className='h-[15px] w-[85%] rounded-full' />
        <Skeleton className='h-[15px] w-[75%] rounded-full' />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <Skeleton className='h-[15px] w-[120px] rounded-full' />
          <Skeleton className='h-[15px] w-[100px] rounded-full' />
        </div>
        <p className='bodyText font-light text-black'>
          <Skeleton className='h-[15px] w-[75px] rounded-full' />
        </p>
      </div>
    </div>
  </div>
)

export default ReviewItem
