import HeroSec from './components/hero'
import FeaturedSec from './components/featured'
import RecentSec from './components/recent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciativas',
  description: '...',
  themeColor: '#000000'
}

function InitiativesPage() {
  return (
    <div className='flex flex-col gap-10 py-7'>
      <HeroSec />
      <FeaturedSec />
      <RecentSec />
    </div>
  )
}

export default InitiativesPage
