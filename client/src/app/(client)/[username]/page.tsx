import type { Metadata } from 'next'
import Content from './_components/Content'
import HeroSec from './_components/HeroSection'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { getUser } from '@/services/user/getUser.service'

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
  const username = params.username.slice(3)
  const { data: user } = await getUser(username)

  return (
    <>
      <HeroSec user={user} session={session} />
      <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
        <Content user={user} session={session} />
      </article>
    </>
  )
}

export default Profile
