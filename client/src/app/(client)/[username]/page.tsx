import Content from './components/content'
import HeroSec from './components/hero'

interface Props {
  params: {
    username: string
  }
}

const Profile = ({ params }: Props) => (
  <>
    <HeroSec username={params.username.slice(3)} />
    <article className='section-padding-1 container-section article-layout-1 listContainer'>
      <Content username={params.username.slice(3)} />
    </article>
  </>
)

export default Profile
