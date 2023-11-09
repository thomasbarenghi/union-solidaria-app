import { PublicationFlex } from '@/components'
import { InitiativeInterface, UserInterface } from '@/interfaces'
import { PostInterface } from '@/interfaces/post.interface'
import Sidebar from './Sidebar'

interface ContentSectionProps {
  currentUser: UserInterface
}

const ContentSection = ({ currentUser }: ContentSectionProps) => {
  console.log(currentUser?.initiatives)
  const allPosts = currentUser?.initiatives
    ?.map((initiative: InitiativeInterface) => initiative?.posts)
    .flat()
    .sort((a: PostInterface, b: PostInterface) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return (
    <section className='flex flex-col-reverse gap-5 lg:flex-row'>
      <PublicationFlex posts={allPosts} isLoading={false} />
      <Sidebar initiatives={currentUser?.initiatives.slice(0, 5)} />
    </section>
  )
}

export default ContentSection
