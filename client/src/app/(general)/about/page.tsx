import Hero from './_components/Hero'
import MissionVision from './_components/MissionVision'
import Technologies from './_components/Technologies'
import type { Metadata } from 'next'
import { Footer, Header } from '@/components'
import Team from './_components/Team'

export const metadata: Metadata = {
  title: 'Nosotros | Union Solidaria'
}

const About = () => (
  <>
    <Header theme='light' />
    <main className='section-padding-y-1 flex flex-col items-center gap-24 pt-[100px]'>
      <Hero />
      <article className='section-padding-x-1 flex w-full flex-col items-center gap-24'>
        <MissionVision />
        <Team />
        <Technologies />
      </article>
    </main>
    <Footer />
  </>
)

export default About
