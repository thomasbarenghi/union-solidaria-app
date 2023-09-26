import HeroSection from './components/Hero'
import Content from './components/Content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explorar | Union Solidaria'
}

const Explore = () => (
  <>
    <HeroSection />
    <article className='section-padding-1 container-section article-layout-1'>
      <Content />
    </article>
  </>
)

export default Explore
