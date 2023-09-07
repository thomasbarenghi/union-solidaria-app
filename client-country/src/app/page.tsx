import HeroSec from './components/hero'
import PromoSec from './components/promo'
import InitiativesSec from './components/initiatives'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: '...',
  themeColor: '#000000'
}

function Home() {
  return (
    <main className='p-section gap-main'>
      <HeroSec />
      <PromoSec />
      <InitiativesSec />
    </main>
  )
}

export default Home
