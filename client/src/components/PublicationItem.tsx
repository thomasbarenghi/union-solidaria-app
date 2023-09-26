'use client'
import { User } from '@nextui-org/react'
import { TextElement } from '.'
import { PostInterface } from '@/interfaces/post.interface'
import Routes from '@/utils/constants/routes.const'
import Link from 'next/link'

interface PublicationItemProps {
  item: PostInterface
}

const PublicationItem = ({ item }: PublicationItemProps) => (
  <div className='relative flex w-full cursor-pointer flex-col items-start gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
    <User
      name={item.author?.orgName}
      description={<Link href={Routes.PROFILE(item.author?.username)}>{item.author?.username}</Link>}
      avatarProps={{
        src: item?.author?.profileImage
      }}
    />
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

export default PublicationItem
