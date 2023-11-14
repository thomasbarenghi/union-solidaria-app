import { Footer, Header, HelpHero } from '@/components'
import FAQs from './_components/Faqs'
import Contact from './_components/Contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ayuda | Union Solidaria'
}

const Help = () => (
  <>
    <Header />
    <main className='flex flex-col'>
      <HelpHero
        title='Como en todo equipo, estamos para ayudarnos.'
        description='En nuestro centro de ayuda encontrarás las respuestas a las preguntas más frecuentes, como también podrás contactarnos para resolver tus dudas.'
        imageSrc='https://images.unsplash.com/photo-1568994105591-922d787135dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1491&q=80'
      />
      <article className='listContainer section-padding-1 flex w-full flex-col items-center gap-16'>
        <FAQs />
        <Contact />
      </article>
    </main>
    <Footer />
  </>
)

export default Help
