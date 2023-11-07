import { Footer, Header } from '@/components'
import HeroSection from './_components/HeroSection'
import InitiativesSection from './_components/InitiativesSection'
import MarketingSection from './_components/MarketingSection'
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
      <main className='flex flex-col items-center section-padding-1 pt-[100px] gap-24'>
        <HeroSection />
        <InitiativesSection initiatives={data} isError={error} />
        <MarketingSection />
      </main>
      <Footer />

    </>
  )
}

export default Home
