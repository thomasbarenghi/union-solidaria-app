import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { getUser } from '@/services/user/getUser.service'
import { TabBar } from '@/components'
import Hero from './_components/Hero'
import { buildProfileTabs } from './buildProfileTabs'

interface Props {
  params: {
    username: string
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const username = props.params.username.slice(3)
  return {
    title: `@${username} | Union Solidaria`
  }
}

const Profile = async ({ params }: Props) => {
  const { data: user, error } = await getUser(params.username.slice(3))
  const session = await getServerSession(nextauthOptions)
  const tabItems = buildProfileTabs(
    user?.role === 'organization',
    user?.username === session?.user.username,
    error,
    false,
    user
  )

  return (
    <main className='flex min-h-screen flex-col'>
      <Hero user={user} session={session} isError={error} />
      <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
        <section className='flex w-full flex-col gap-4 '>
          <TabBar
            variant='solid'
            items={tabItems}
            tabContentClassName='group-data-[selected=true]:text-white px-4 '
            cursorClassName='group-data-[selected=true]:bg-green-800 shadow-none '
            isLoading={false}
            isError={error}
          />
        </section>
      </article>
    </main>
  )
}

export default Profile
