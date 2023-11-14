import type { Metadata } from 'next'
import Donate from './_components/Donate'
import { Footer, Header, TextElement } from '@/components'
import Testimonials from './_components/Testimonials'

export const metadata: Metadata = {
  title: 'Donar | Unión Solidaria'
}

const DonationPage = () => (
  <>
    <Header theme='light' />
    <main className='section-padding-y-1 flex flex-col items-center gap-24 pt-[100px]'>
      <section className='section-padding-x-1 flex w-full  justify-center  bg-gradient-to-r from-[#ECFBF9] to-[#E5FCDE] lg:h-[min(40vh,_400px)] '>
        <div className=' flex w-full flex-col items-center justify-center py-14 xl:container '>
          <div className='flex w-full flex-col items-center justify-center gap-2 text-center'>
            <TextElement type='t1' as='h1' className='!font-light '>
              Nuestra causa se sostiene con tu ayuda,
              <b className='font-semibold'> tu donación nos mantiene activos.</b>
            </TextElement>
            <TextElement type='base' as='p' className='lg:max-w-[70%] '>
              Cada donación que recibimos es un pilar fundamental que sostiene nuestras iniciativas y nos permite
              continuar nuestra labor en pro de un mundo mejor. Tu apoyo nos mantiene activos y nos inspira a seguir
              haciendo el bien.
            </TextElement>
          </div>
        </div>
      </section>
      <article className='section-padding-x-1 flex w-full flex-col items-center gap-24'>
        <Testimonials />
        <Donate />
      </article>
    </main>
    <Footer />
  </>
)

export default DonationPage
