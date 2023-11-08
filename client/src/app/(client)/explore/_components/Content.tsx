'use client'
import { useState } from 'react'
import { PublicationFlex } from '@/components'
import { InitiativeInterface, UserInterface } from '@/interfaces'
import { PostInterface } from '@/interfaces/post.interface'
import Sidebar from './Sidebar'

interface ContentSectionProps {
  currentUser: UserInterface
}

const ContentSection = ({ currentUser }: ContentSectionProps) => {
  const [activeInitiativeId, setActiveInitiativeId] = useState<string>('')

  const allPosts = currentUser?.initiatives
    ?.map((initiative: InitiativeInterface) => initiative?.posts)
    .flat()
    .sort((a: PostInterface, b: PostInterface) => new Date(a?.createdAt).getTime() - new Date(b?.createdAt).getTime())
    .filter((post: PostInterface) => post?.initiative?._id === activeInitiativeId || activeInitiativeId === '')

  return (
    <section className='flex gap-5'>
      <Sidebar
        initiatives={currentUser?.initiatives}
        activeInitiativeId={activeInitiativeId}
        setActiveInitiativeId={setActiveInitiativeId}
      />
      <PublicationFlex posts={allPosts} isLoading={false} />
    </section>
  )
}

export default ContentSection
