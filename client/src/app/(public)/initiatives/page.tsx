import HeroSection from './_components/HeroSection'
import InitiativesSection from './_components/InitiativesSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciativas | Union Solidaria'
}

const Home = () => (
  <>
    <HeroSection />
    <article className='section-padding-1 listContainer container-section article-layout-1'>
      <InitiativesSection />
    </article>
  </>
)

export default Home
