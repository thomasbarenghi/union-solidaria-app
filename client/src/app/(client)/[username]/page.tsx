import { TabBar } from '@/components'
import { getUserByEmail } from '@/services/user/get-user.service'
import { nextauthOptions } from '@/utils/constants/auth.const'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import { toast } from 'sonner'
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
  const { user, error } = await getUserByEmail(params.username.slice(3))
  const session = await getServerSession(nextauthOptions)

  if (user === undefined) notFound()

  const tabItems = buildProfileTabs(
    user?.role === 'organization',
    user?.username === session?.user.username,
    !!error,
    false,
    user
  )

  if (error) toast.error(error.message)

  return (
    <main className='flex min-h-screen flex-col'>
      <Hero user={user} sessionId={session?.user.id ?? ''} isError={!!error} />
      <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
        <section className='flex w-full flex-col gap-4 '>
          <TabBar
            variant='solid'
            items={tabItems}
            tabContentClassName='group-data-[selected=true]:text-white px-4 '
            cursorClassName='group-data-[selected=true]:bg-green-800 shadow-none '
          />
        </section>
      </article>
    </main>
  )
}

export default Profile
