import { ConfigOptions } from '@/app/(user)/account/components'
import { Heading } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cuenta',
  description: '...',
  themeColor: '#000000'
}

function AccountPage() {
  return (
    <main className='p-section flex flex-col gap-y-12'>
      <section className='items-start justify-start'>
        <div className='w-max'>
          <Heading>Configuración</Heading>
          <ConfigOptions />
        </div>
      </section>
    </main>
  )
}

export default AccountPage
