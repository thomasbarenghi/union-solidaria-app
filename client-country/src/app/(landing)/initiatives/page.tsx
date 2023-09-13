import SearchSection from './components/search'
import FeaturedSec from './components/featured'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciativas',
  description: '...',
  themeColor: '#000000'
}

function InitiativesPage() {
  return (
    <main className='gap-10 flex flex-col p-section'>
      <SearchSection />
      <FeaturedSec />
    </main>
  )
}

export default InitiativesPage
