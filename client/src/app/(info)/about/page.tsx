import HeroSection from './components/HeroSection'
import MissionVisionSection from './components/Content'
import TechnologiesSection from './components/TechnologiesSection'
import type { Metadata } from 'next'
import { Header } from '@/components'
import TeamSection from './components/TeamSection'

export const metadata: Metadata = {
  title: 'Nosotros | Union Solidaria'
}

const About = () => (
  <>
    <Header theme='light' />
    <HeroSection />
    <article className='section-padding-1 container-section article-layout-1'>
      <MissionVisionSection />
      <TeamSection />
      <TechnologiesSection />
    </article>
  </>
)

export default About
