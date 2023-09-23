import FormSec from './form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editar cuenta',
  description: '...',
  themeColor: '#000000'
}

function EditPage() {
  return (
    <main className='w-full gap-main'>
      <FormSec />
    </main>
  )
}

export default EditPage
