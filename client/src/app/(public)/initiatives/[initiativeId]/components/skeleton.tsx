'use client'
import { Skeleton as SkeletonUI } from '@nextui-org/react'

const Skeleton = () => (
  <section className='article-layout-1'>
    <div className='flex w-full flex-col gap-3'>
      <SkeletonUI className='h-6 w-[200px] rounded-full' />
      <div className='flex flex-col gap-2'>
        <SkeletonUI className='h-4  w-[85%] rounded-full' />
        <SkeletonUI className='h-4  w-[75%] rounded-full' />
      </div>
    </div>
    <div className='flex w-full flex-col gap-3'>
      <SkeletonUI className='h-6 w-[200px] rounded-full' />
      <div className='flex flex-col gap-2'>
        <SkeletonUI className='h-4  w-[100%] rounded-full' />
        <SkeletonUI className='h-4  w-[85%] rounded-full' />
        <SkeletonUI className='h-4  w-[70%] rounded-full' />
      </div>
    </div>
  </section>
)

export default Skeleton
