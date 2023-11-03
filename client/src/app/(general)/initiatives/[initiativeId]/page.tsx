import type { Metadata } from 'next'
import HeroSection from './_components/HeroSection/HeroSection'
import { getInitiative } from '@/services/initiatives/getInitiative.service'
import DataSection from './_components/DataSection'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { getUser } from '@/services/user/getUser.service'
import { Footer, Header } from '@/components'

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
  const { data, error: initiativeError } = await getInitiative(params.initiativeId)
  const session = await getServerSession(nextauthOptions)
  const { data: loggedUser, error: userError } = await getUser(session?.user?.email ?? '')
  const isLogged = Boolean(session?.user?.email)
  if (userError || initiativeError) throw new Error('Error al cargar la iniciativa')
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col'>
        <HeroSection
          initiative={data}
          currentUserId={loggedUser._id}
          currentIndex={searchParams.idx}
          isLogged={isLogged}
          isError={initiativeError}
          isLoading={false}
        />
        <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
          <DataSection data={data} currentUser={loggedUser} />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Home
