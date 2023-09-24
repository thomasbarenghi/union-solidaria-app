'use client'
import { ReviewInterface } from '@/interfaces/review.interface'
import { User } from '@nextui-org/react'

interface Props {
  item: ReviewInterface
}

const ReviewItem = ({ item }: Props) => (
  <div
    className='relative flex w-full cursor-pointer flex-col gap-3 rounded-2xl border border-solid border-slate-200 p-6'
    key={item._id}
  >
    <User
      classNames={{
        name: '!text-black !smalltext font-medium',
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
          <p className='bodyText font-semibold'>{item?.initiative?.title}</p>
          <p className='smalltext font-light'>De {item?.initiativeOwner?.orgName}</p>
        </div>
        <p className='bodyText font-light text-black'>
          {item?.rating} <span className='text-yellow-400'>★</span>
        </p>
      </div>
    </div>
  </div>
)

export default ReviewItem
