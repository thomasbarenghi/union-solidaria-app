import { Heading } from '@/components'
import Accordion from './components/Accordion'
import ConsultForm from './components/ConsultForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ayuda | Unión Solidaria'
}

function HelpPage() {
  return (
    <main className='mx-auto max-w-screen-lg space-y-8 p-4'>
      <Heading>Ayuda</Heading>
      <section className=' space-y-6'>
        <Heading as='h2'>Preguntas frecuentes</Heading>
        <Accordion />
      </section>
      <section className=' space-y-6'>
        <Heading as='h2'>¿Tienes otra consulta?</Heading>
        <ConsultForm />
      </section>
    </main>
  )
}

export default HelpPage
