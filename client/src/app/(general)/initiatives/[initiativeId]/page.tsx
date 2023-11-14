import type { Metadata } from 'next'
import Hero from './_components/Hero/Hero'
import { getInitiative } from '@/services/initiatives/getInitiative.service'
import Data from './_components/Data'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { getUser } from '@/services/user/getUser.service'
import { Footer, Header } from '@/components'

interface Props {
  params: {
    initiativeId: string
  }
  searchParams: Record<string, string>
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { data } = await getInitiative(props.params.initiativeId)
  return {
    title: `${data?.title} | Union Solidaria`
  }
}

const Initiative = async ({ params, searchParams }: Props) => {
  const { data, error: initiativeError } = await getInitiative(params.initiativeId)
  const session = await getServerSession(nextauthOptions)
  const { data: loggedUser } = await getUser(session?.user?.email ?? '')
  const isLogged = Boolean(session?.user?.email)

  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col'>
        <Hero
          initiative={data}
          currentUserId={loggedUser._id}
          currentIndex={searchParams.idx}
          isLogged={isLogged}
          isError={initiativeError}
          isLoading={false}
        />
        <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
          <Data data={data} currentUser={loggedUser} />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Initiative
