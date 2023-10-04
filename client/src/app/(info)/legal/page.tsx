import { HelpHero, TabBar } from '@/components'
import type { Metadata } from 'next'
import { items } from './itemsTab'

export const metadata: Metadata = {
  title: 'Legales | Union Solidaria'
}

const Legal = () => (
  <>
    <HelpHero
      title='Al usar nuestro servicio aceptas nuestros terminos, y nos permites garantizar tu seguridad.'
      description='En nuestro centro de ayuda encontrarás las respuestas a las preguntas más frecuentes, como también podrás contactarnos para resolver tus dudas.'
      imageSrc='https://images.unsplash.com/photo-1593132517397-ceb31d77194a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80'
    />
    <article className='container-section article-layout-1'>
      <section className='section-padding-1 flex min-h-[100vh] w-full flex-col gap-2'>
        <TabBar items={items} variant='underlined' />
      </section>
    </article>
  </>
)

export default Legal
