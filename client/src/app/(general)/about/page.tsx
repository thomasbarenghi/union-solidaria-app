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
    <main className='section-padding-y-1 flex flex-col items-center gap-24 pt-[100px]'>
      <HeroSection />
      <article className='section-padding-x-1 flex w-full flex-col items-center gap-24'>
        <MissionVisionSection />
        <TeamSection />
        <TechnologiesSection />
      </article>
    </main>
    <Footer />
  </>
)

export default About
