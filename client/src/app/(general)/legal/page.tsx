import { Footer, Header, TabBar, TextElement } from '@/components'
import type { Metadata } from 'next'
import { items } from './itemsTab'

export const metadata: Metadata = {
  title: 'Legales | Union Solidaria'
}

const Legal = () => (
  <>
    <Header theme='light' />
    <main className='section-padding-1 flex flex-col items-center gap-16 pt-[100px]'>
      <section className='w-full pt-10  2xl:container '>
        <div className='flex flex-col items-center justify-center'>
          <TextElement as='h1' type='t1' className='text-center'>
            Documentos Legales
          </TextElement>
          <TextElement as='p' type='base' className='max-w-none text-center lg:max-w-[550px]'>
            Al usar nuestro servicio aceptas nuestros terminos, y nos permites garantizar la seguridad de tus datos.
          </TextElement>
        </div>
      </section>
      <section className='flex min-h-[500px] w-full flex-col gap-2 2xl:container'>
        <TabBar
          items={items}
          variant='light'
          tabClassName='bg-default-100'
          tabContentClassName='group-data-[selected=true]:text-white px-4 text-gray-600'
          cursorClassName='group-data-[selected=true]:bg-green-800 '
        />
      </section>
    </main>
    <Footer />
  </>
)

export default Legal
