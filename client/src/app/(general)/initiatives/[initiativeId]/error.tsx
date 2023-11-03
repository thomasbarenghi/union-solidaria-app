'use client'
import { Button, Footer, Header, TextElement } from '@/components'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ reset }: Props) => (
  <>
    <Header theme='light' />
    <main className='flex min-h-screen flex-col'>
      <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
        <div className='min-h-[70vh] flex flex-col items-center justify-center'>
          <Image src='/icon/Frame1.svg' alt='Hero' fill className='z-[-1] ' />
          <TextElement as='h1' type='t1' className='!font-light text-center'>
            Ocurrió un error <b className='font-semibold'>al cargar la iniciativa.</b>
          </TextElement>
          <TextElement as='p' type='base' className='text-center'>
            Esto puede deberse a un error de conexión o a que la iniciativa no existe
          </TextElement>
          <div className='flex gap-2'>
            <Button href={Routes.INITIATIVES} title='Volver a iniciativas' className='mt-4' />
            <Button onClick={reset} title='Reintentar' className='mt-4' variant='flat' />
          </div>
        </div>
      </article>
    </main>
    <Footer />
  </>

)

export default Error
