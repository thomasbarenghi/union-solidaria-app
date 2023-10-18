import type { Metadata } from 'next'
import DonateSec from './components/DonateSection'
import HeroSec from './components/HeroSection'
import { Header } from '@/components'
import TestimonialsSection from './components/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Donar | Unión Solidaria'
}

const DonationPage = () => (
  <>
    <Header theme='light' />
    <HeroSec />
    <article className='section-padding-1 container-section article-layout-1'>
      <TestimonialsSection />
      <DonateSec />
    </article>
  </>
)

export default DonationPage
