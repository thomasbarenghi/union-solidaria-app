import FormSec from './components/form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editar cuenta',
  description: '...',
  themeColor: '#000000'
}

function EditPage() {
  return (
    <main className='p-section gap-main'>
      <FormSec />
    </main>
  )
}

export default EditPage
