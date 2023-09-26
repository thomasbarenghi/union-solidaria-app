import { HelpHero } from '@/components'
import FAQs from './components/FaqsSection'
import Contact from './components/ContactSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ayuda | Union Solidaria'
}

const Help = () => (
  <>
    <HelpHero
      title='Como en todo equipo, estamos para ayudarnos.'
      description='En nuestro centro de ayuda encontrarás las respuestas a las preguntas más frecuentes, como también podrás contactarnos para resolver tus dudas.'
      imageSrc='https://images.unsplash.com/photo-1593132517397-ceb31d77194a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80'
    />
    <article className='section-padding-1 container-section article-layout-1'>
      <FAQs />
      <Contact />
    </article>
  </>
)

export default Help
