import Hero from './components/HeroSection'
import Content from './components/Content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciativa | Union Solidaria'
}

interface Props {
  params: {
    initiativeId: string
  }
}

const Home = ({ params }: Props) => (
  <>
    <Hero id={params.initiativeId} />
    <article className='section-padding-1 container-section article-layout-1'>
      <Content id={params.initiativeId} />
    </article>
  </>
)

export default Home
