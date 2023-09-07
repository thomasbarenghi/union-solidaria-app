import FormSec from './components/form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crear iniciativa',
  description: '...',
  themeColor: '#000000'
}

function FormPage() {
  return (
    <main className='p-section gap-main'>
      <FormSec />
    </main>
  )
}

export default FormPage
