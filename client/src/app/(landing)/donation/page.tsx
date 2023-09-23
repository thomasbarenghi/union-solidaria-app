import type { Metadata } from 'next'
import DonateSec from './components/donateForm'
import HeroSec from './components/hero'

export const metadata: Metadata = {
  title: 'Donar | Unión Solidaria'
}

function DonationPage() {
  return (
    <main className='gap-main'>
      <HeroSec />
      <DonateSec />
    </main>
  )
}

export default DonationPage
