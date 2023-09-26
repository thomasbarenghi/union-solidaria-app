import Content from './components/Content'
import HeroSec from './components/HeroSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usuario | Union Solidaria'
}

interface Props {
  params: {
    username: string
  }
}

const Profile = ({ params }: Props) => (
  <>
    <HeroSec username={params.username.slice(3)} />
    <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
      <Content username={params.username.slice(3)} />
    </article>
  </>
)

export default Profile
