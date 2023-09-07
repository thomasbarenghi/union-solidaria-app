import HeroSec from './components/hero'
import DonateSec from './components/donateForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donaciones',
  description: '...',
  themeColor: '#000000'
}

function DonationPage() {
  return (
    <main className='gap-main'>
      <article>
        <HeroSec />
      </article>
      <article className='px-section 2xl:container'>
        <DonateSec />
      </article>
    </main>
  )
}

export default DonationPage
