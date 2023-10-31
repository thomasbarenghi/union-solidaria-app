import type { Metadata } from 'next'
import HeroSection from './components/HeroSection/HeroSection'
import { getInitiative } from '@/services/initiatives/getInitiative.service'
import DataSection from './components/DataSection'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { getUser } from '@/services/user/getUser.service'

export const metadata: Metadata = {
  title: 'Iniciativa | Union Solidaria'
}

interface Props {
  params: {
    initiativeId: string
  }
  searchParams: Record<string, string>
}

const Home = async ({ params, searchParams }: Props) => {
  const { data } = await getInitiative(params.initiativeId)
  const session = await getServerSession(nextauthOptions)
  const isLogged = Boolean(session?.user?.email)
  const { data: loggedUser } = await getUser(session?.user?.email ?? '')
  return (
    <>
      <HeroSection data={data} currentIndex={searchParams.idx} isLogged={isLogged} currentUserId={session?.user?.id ?? ''} />
      <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
        <DataSection data={data} isLoading={false} currentUser={loggedUser} />
      </article>
    </>
  )
}

export default Home
