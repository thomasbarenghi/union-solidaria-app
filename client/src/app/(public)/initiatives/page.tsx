import HeroSection from './components/hero'
import InitiativesSection from './components/initiatives'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciativas | Union Solidaria'
}

const Home = () => (
  <>
    <HeroSection />
    <article className='section-padding-1 container-section article-layout-1'>
      <InitiativesSection />
    </article>
  </>
)

export default Home
