import type { Metadata } from 'next'
import DonateSec from './components/Form'
import HeroSec from './components/HeroSection'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'Donar | Unión Solidaria'
}

const DonationPage = () => (
  <>
    <Header />
    <HeroSec />
    <article className='section-padding-1 container-section article-layout-1'>
      <DonateSec />
    </article>
  </>
)

export default DonationPage
