import HeroSection from './_components/HeroSection'
import MissionVisionSection from './_components/Content'
import TechnologiesSection from './_components/TechnologiesSection'
import type { Metadata } from 'next'
import { Header } from '@/components'
import TeamSection from './_components/TeamSection'

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
