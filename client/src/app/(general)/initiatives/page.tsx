import { Footer, Header } from '@/components'
import Hero from './_components/Hero'
import Initiatives from './_components/Initiatives'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciativas | Union Solidaria'
}

const Home = () => (
  <>
    <Header />
    <main className='flex min-h-screen flex-col'>
      <Hero />
      <article className='section-padding-1 listContainer container-section article-layout-1'>
        <Initiatives />
      </article>
    </main>
    <Footer />
  </>
)

export default Home
