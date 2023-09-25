'use client'
import { ReviewInterface } from '@/interfaces/review.interface'
import { User } from '@nextui-org/react'
import { TextElement } from '..'

interface Props {
  item: ReviewInterface
}

const ReviewItem = ({ item }: Props) => (
  <div
    className='relative flex w-full cursor-pointer flex-col gap-3 rounded-2xl border border-solid border-slate-200 p-6'
  >
    <User
      classNames={{
        name: '!text-black !text-sm font-light leading-[155%] font-medium',
        base: 'flex gap-2 items-center justify-start cursor-pointer'
      }}
      name={item?.author?.firstName + ' ' + item?.author?.lastName}
      avatarProps={{
        src: item?.author?.profileImage,
        className: 'aspect-square h-[30px] w-[30px]'
      }}
    />
    <div className='flex flex-col gap-3'>
      <p className='smallText font-light text-black'>{item?.body}</p>
      <div className='flex flex-col gap-2'>
        <div>
          <TextElement type='base' as='p' className='font-semibold'>
            {item?.initiative?.title}
          </TextElement>
          <TextElement type='small' as='p'>
            De {item?.initiativeOwner?.orgName}
          </TextElement>
        </div>
        <TextElement type='base' as='p'>
          {item?.rating} <span className='text-yellow-400'>★</span>
        </TextElement>
      </div>
    </div>
  </div>
)

export default ReviewItem
