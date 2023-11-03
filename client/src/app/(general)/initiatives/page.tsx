import { Footer, Header } from '@/components'
import HeroSection from './_components/HeroSection'
import InitiativesSection from './_components/InitiativesSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciativas | Union Solidaria'
}

const Home = () => (
  <>
    <Header />
    <main className='flex min-h-screen flex-col'>
      <HeroSection />
      <article className='section-padding-1 listContainer container-section article-layout-1'>
        <InitiativesSection />
      </article>
    </main>
    <Footer />
  </>
)

export default Home
