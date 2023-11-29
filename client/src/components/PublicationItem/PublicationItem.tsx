'use client'
import { User } from '@nextui-org/react'
import { TextElement } from '..'
import { PostInterface } from '@/interfaces/post.interface'
import Routes from '@/utils/constants/routes.const'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

interface PublicationItemProps {
  item: PostInterface
}

const PublicationItem = ({ item }: PublicationItemProps) => {
  const { data: session } = useSession()
  const isOwner = item?.author._id === session?.user?.id
  return (
    <div className='relative flex w-full flex-col items-start gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
      <div className='flex w-full justify-between gap-4'>
        <User
          name={item.author?.orgName}
          description={<Link href={Routes.PROFILE(item.author?.username)}>{item.author?.username}</Link>}
          avatarProps={{
            src: item?.author?.profileImage
          }}
        />
        {isOwner && (
          <div className='flex gap-4'>
            <EditModal item={item} />
            <DeleteModal reviewId={item._id} />
          </div>
        )}
      </div>
      <TextElement type='base' as='p'>
        {item.body}
      </TextElement>
      <div>
        <TextElement type='base' as='p' className='font-semibold'>
          {item?.initiative?.title}
        </TextElement>
      </div>
    </div>
  )
}

export default PublicationItem
