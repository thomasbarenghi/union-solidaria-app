import type { Metadata } from 'next'
import DonateSec from './components/donateForm'
import HeroSec from './components/hero'

export const metadata: Metadata = {
  title: 'Donar | Unión Solidaria'
}

const DonationPage = () => (
  <>
    <HeroSec />
    <article className='section-padding-1 container-section article-layout-1'>
      <DonateSec />
    </article>
  </>
)

export default DonationPage
