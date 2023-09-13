import type { Metadata } from 'next'
import HeroSec from './components/hero'
import InitiativesSec from './components/initiatives'
import PromoSec from './components/promo'

export const metadata: Metadata = {
  title: 'Home',
  description: '...',
  themeColor: '#000000'
}

function Home() {
  return (
    <main className='mx-auto grid max-w-screen-md gap-y-10 p-4'>
      <HeroSec />
      <PromoSec />
      <InitiativesSec />
    </main>
  )
}

export default Home
