import HeroSection from './_components/HeroSection'
import MissionVisionSection from './_components/Content'
import TechnologiesSection from './_components/TechnologiesSection'
import type { Metadata } from 'next'
import { Footer, Header } from '@/components'
import TeamSection from './_components/TeamSection'

export const metadata: Metadata = {
  title: 'Nosotros | Union Solidaria'
}

const About = () => (
  <>
    <Header theme='light' />
    <main className='flex min-h-screen flex-col'>
      <HeroSection />
      <article className='section-padding-1 container-section article-layout-1'>
        <MissionVisionSection />
        <TeamSection />
        <TechnologiesSection />
      </article>
    </main>
    <Footer />
  </>
)

export default About
