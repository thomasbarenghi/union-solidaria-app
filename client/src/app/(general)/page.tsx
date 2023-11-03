import { Header } from '@/components'
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
      <HeroSection />
      <article className='section-padding-1 container-section article-layout-1'>
        <InitiativesSection initiatives={data} isError={error} />
        <MarketingSection />
      </article>
    </>
  )
}

export default Home
