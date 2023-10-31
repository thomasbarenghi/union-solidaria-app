import type { Metadata } from 'next'
import DonateSec from './_components/DonateSection'
import HeroSec from './_components/HeroSection'
import { Header } from '@/components'
import TestimonialsSection from './_components/TestimonialsSection'

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
