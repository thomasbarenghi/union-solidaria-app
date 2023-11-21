import { Footer, Header } from '@/components'
import { getInitiative } from '@/services/initiatives/getInitiative.service'
import { nextauthOptions } from '@/utils/constants/auth.const'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import Data from './_components/Data'
import Hero from './_components/Hero/Hero'

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
  const isLogged = Boolean(session)

  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col'>
        <Hero
          initiative={data}
          currentUserId={session?.user.id ?? ''}
          currentIndex={searchParams.idx}
          isLogged={isLogged}
          isError={initiativeError}
          isLoading={false}
        />
        <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
          <Data data={data} currentUser={session?.user ?? undefined} />
        </article>
      </main>
      <Footer />
    </>
  )
}

export default Initiative
