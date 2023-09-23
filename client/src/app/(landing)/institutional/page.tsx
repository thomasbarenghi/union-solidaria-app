import { TabBar } from '@/components'
import Privacy from './components/privacy'
import Terms from './components/terms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Institucional | Unión Solidaria'
}

function InstitutionalPage() {
  const content = [
    {
      title: 'Terminos y Condiciones',
      content: <Terms />
    },
    {
      title: 'Politica de privacidad',
      content: <Privacy />
    }
  ]

  return (
    <div className='bg-white pt-1'>
      <h1 className='leading-30 mx-auto mb-8 mt-8  w-11/12 text-2xl font-bold text-pink-500'>Institucional</h1>
      <TabBar content={content} />
    </div>
  )
}

export default InstitutionalPage
