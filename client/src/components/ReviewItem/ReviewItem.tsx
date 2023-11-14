'use client'
import { ReviewInterface } from '@/interfaces/review.interface'
import { UserInterface } from '@/interfaces/user.interface'
import { User } from '@nextui-org/react'
import { TextElement } from '..'
import { InitiativeInterface } from '@/interfaces'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import { useSession } from 'next-auth/react'

interface Props {
  item: ReviewInterface
}

const ReviewItem = ({ item }: Props) => {
  const { data: session } = useSession()
  const { author, initiativeOwner, initiative } = item as {
    author: UserInterface
    initiativeOwner: UserInterface
    initiative: InitiativeInterface
  }
  const alreadyReviewed = author?._id === session?.user?.id
  return (
    <>
      <div className='relative flex w-full cursor-pointer flex-col gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
        <div className='flex justify-between gap-4'>
          <User
            classNames={{
              name: '!text-black !text-sm font-light leading-[155%] font-medium',
              base: 'flex gap-2 items-center justify-start cursor-pointer'
            }}
            name={author?.firstName + ' ' + author?.lastName}
            avatarProps={{
              src: author?.profileImage,
              className: 'aspect-square h-[30px] w-[30px]'
            }}
          />
          {alreadyReviewed && (
            <div className='flex gap-2'>
              <EditModal review={item} />
              <DeleteModal reviewId={item._id} />
            </div>
          )}
        </div>
        <div className='flex flex-col gap-3'>
          <p className='smallText font-light text-black'>{item?.body}</p>
          <div className='flex flex-col gap-2'>
            <div>
              <TextElement type='base' as='p' className='font-semibold'>
                {initiative?.title}
              </TextElement>
              <TextElement type='small' as='p'>
                De {initiativeOwner?.orgName}
              </TextElement>
            </div>
            <TextElement type='base' as='p'>
              {item?.rating} <span className='text-yellow-400'>★</span>
            </TextElement>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewItem
