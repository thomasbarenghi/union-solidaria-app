'use client'
import { PublicationFlex } from '@/components'
import { InitiativeInterface } from '@/interfaces'
import { PostInterface } from '@/interfaces/post.interface'
import Endpoints from '@/utils/constants/endpoints.const'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import useSWR from 'swr'
import Sidebar from './Sidebar'

const ContentSection = () => {
  const { data: session } = useSession()

  // TODO: handle case where user is not logged in
  const { data } = useSWR(Endpoints.USER_BY_ID(session?.user.username ?? ''))
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
