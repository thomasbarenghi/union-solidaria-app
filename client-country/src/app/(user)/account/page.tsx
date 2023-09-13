import { ConfigOptions } from '@/app/(user)/account/components'
import { Heading } from '@/components'
import type { Metadata } from 'next'
import Main from './components/edit/main'

export const metadata: Metadata = {
  title: 'Cuenta',
  description: '...',
  themeColor: '#000000'
}

function AccountPage() {
  return (
    <main className='p-section flex flex-col gap-y-12'>
      <section className='flex flex-col gap-11 lg:flex-row items-start justify-start'>
        <div className='w-full lg:w-max'>
          <Heading>Configuración</Heading>
          <ConfigOptions />
        </div>
        <Main />
      </section>
    </main>
  )
}

export default AccountPage
