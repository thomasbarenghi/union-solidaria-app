import { Footer, Header } from '@/components'
import Hero from './_components/Hero'
import Initiatives from './_components/Initiatives'
import Marketing from './_components/Marketing'
import type { Metadata } from 'next'
import { getInitiatives } from '@/services/initiatives/getInitiatives.service'

export const metadata: Metadata = {
  title: 'Cambiemos el mundo juntos | Union Solidaria'
}

const Home = async () => {
  const { data, error } = await getInitiatives()
  return (
    <>
      <Header theme='light' />
      <main className='section-padding-1 flex flex-col items-center gap-24 pt-[100px]'>
        <Hero />
        <Initiatives initiatives={data} isError={error} />
        <Marketing />
      </main>
      <Footer />
    </>
  )
}

export default Home
