import { Header, TabBar } from '@/components'
import type { Metadata } from 'next'
import { items } from './itemsTab'
import HeroSection from './components/HeroSection'

export const metadata: Metadata = {
  title: 'Legales | Union Solidaria'
}

const Legal = () => (
  <>
    <Header theme='light' />
    <HeroSection />
    <article className='container-section article-layout-1'>
      <section className=' section-padding-x-1 flex min-h-[100vh] w-full flex-col gap-2 pb-16'>
        <TabBar
          items={items}
          variant='light'
          tabClassName='bg-default-100'
          tabContentClassName='group-data-[selected=true]:text-white p-4 text-gray-600'
          cursorClassName='group-data-[selected=true]:bg-green-800 '
          tabListClassName='text-default-500'
        />
      </section>
    </article>
  </>
)

export default Legal
