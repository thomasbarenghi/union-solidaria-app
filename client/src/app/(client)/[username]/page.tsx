import type { Metadata } from 'next'
import Content from './components/Content'
import HeroSec from './components/HeroSection'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'

interface Props {
  params: {
    username: string
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const username = props.params.username.slice(3)
  return {
    title: `${username} | Union Solidaria`
  }
}

const Profile = async ({ params }: Props) => {
  const session = await getServerSession(nextauthOptions)
  console.log(session)
  // removes '@' char
  const username = params.username.slice(3)

  return (
    <>
      <HeroSec username={username} />
      <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
        <Content username={username} />
      </article>
    </>
  )
}

export default Profile
