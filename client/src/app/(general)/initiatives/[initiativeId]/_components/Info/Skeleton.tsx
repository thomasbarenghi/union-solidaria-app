import { Skeleton as SkeletonUi } from '@nextui-org/react'

const Skeleton = () => (
  <section className='article-layout-1'>
    <div className='flex w-full flex-col gap-3'>
      <SkeletonUi className='h-6 w-[200px] rounded-full bg-gray-100' />
      <div className='flex flex-col gap-2'>
        <SkeletonUi className='h-4  w-[85%] rounded-full bg-gray-100' />
        <SkeletonUi className='h-4  w-[75%] rounded-full bg-gray-100' />
      </div>
    </div>
    <div className='flex w-full flex-col gap-3'>
      <SkeletonUi className='h-6 w-[200px] rounded-full bg-gray-100' />
      <div className='flex flex-col gap-2'>
        <SkeletonUi className='h-4  w-[100%] rounded-full bg-gray-100' />
        <SkeletonUi className='h-4  w-[85%] rounded-full bg-gray-100' />
        <SkeletonUi className='h-4  w-[70%] rounded-full bg-gray-100' />
      </div>
    </div>
  </section>
)

export default Skeleton
