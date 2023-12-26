import { PublicationFlex } from '@/components'
import { InitiativeInterface, UserInterface } from '@/interfaces'
import { PostInterface } from '@/interfaces/post.interface'
import Sidebar from './Sidebar'

interface ContentSectionProps {
  currentUser: UserInterface
}

// TODO: La interfaz de la prop currentUser debe ser la de User de next-auth, y las inciativas deben conseguirse a traves del
// futuro endpoint de iniciativas por userId
const ContentSection = ({ currentUser }: ContentSectionProps) => {
  const allPosts = currentUser?.initiatives
    ?.map((initiative: InitiativeInterface) => initiative?.posts)
    .flat()
    .sort((a: PostInterface, b: PostInterface) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  return (
    <section className='flex flex-col-reverse gap-5 lg:flex-row'>
      <PublicationFlex posts={allPosts} isLoading={false} />
      {currentUser?.initiatives?.length > 0 && <Sidebar initiatives={currentUser?.initiatives?.slice(0, 5)} />}
    </section>
  )
}

export default ContentSection
