import HeroSection from './components/HeroSection'
import MissionVisionSection from './components/Content'
import TechnologiesSection from './components/TechnologiesSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros | Union Solidaria'
}

const About = () => (
  <>
    <HeroSection />
    <article className='section-padding-1 container-section article-layout-1'>
      <MissionVisionSection />
      <TechnologiesSection />
    </article>
  </>
)

export default About
