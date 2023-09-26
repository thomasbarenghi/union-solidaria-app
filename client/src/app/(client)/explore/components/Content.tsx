'use client'
import { TextElement } from '@/components'
import { InitiativeInterface } from '@/interfaces'
import { PostInterface } from '@/interfaces/post.interface'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'
import Endpoints from '@/utils/constants/endpoints.const'
import Routes from '@/utils/constants/routes.const'
import { User } from '@nextui-org/react'
import Link from 'next/link'
import { useState } from 'react'
import useSWR from 'swr'

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

interface PublicationFlexProps {
  posts: PostInterface[]
}

const PublicationFlex = ({ posts }: PublicationFlexProps) => (
  <div className='flex flex-col gap-5'>
    {posts?.map((item: PostInterface) => <PublicationItem key={item?._id} item={item} />)}
  </div>
)

interface SidebarProps {
  initiatives: InitiativeInterface[]
  activeInitiativeId: string
  setActiveInitiativeId: (id: string) => void
}

const Sidebar = ({ initiatives, activeInitiativeId, setActiveInitiativeId }: SidebarProps) => {
  const activeClass = '!font-semibold'
  return (
    <div className='h-max min-w-[250px] rounded-2xl border border-solid border-slate-200 p-6 '>
      <TextElement type='base' as='p' className='font-semibold'>
        Iniciativas
      </TextElement>
      <div className='flex flex-col gap-1'>
        <div onClick={() => setActiveInitiativeId('')}>
          <TextElement type='base' as='p' className={`cursor-pointer ${activeInitiativeId === '' ? activeClass : ''}`}>
            Todas las iniciativas
          </TextElement>
        </div>
        {initiatives.map((initiative: InitiativeInterface) => (
          <div key={initiative._id} onClick={() => setActiveInitiativeId(initiative._id)}>
            <TextElement
              type='base'
              as='p'
              className={`cursor-pointer ${activeInitiativeId === initiative._id ? activeClass : ''}`}
            >
              {initiative.title}
            </TextElement>
          </div>
        ))}
      </div>
    </div>
  )
}

const ContentSection = () => {
  const loggedUser = useAppSelector(loggedUserSelector)
  const { data } = useSWR(Endpoints.USER_BY_ID(loggedUser.username))
  const [activeInitiativeId, setActiveInitiativeId] = useState<string>('')
  const allPosts = data?.initiatives
    ?.map((initiative: InitiativeInterface) => initiative?.posts)
    .flat()
    .sort((a: PostInterface, b: PostInterface) => new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime())
    .filter((post: PostInterface) => post?.initiative?._id === activeInitiativeId || activeInitiativeId === '')

  return (
    <section className='flex gap-5'>
      <Sidebar
        initiatives={data?.initiatives}
        activeInitiativeId={activeInitiativeId}
        setActiveInitiativeId={setActiveInitiativeId}
      />
      <PublicationFlex posts={allPosts} />
    </section>
  )
}

export default ContentSection
