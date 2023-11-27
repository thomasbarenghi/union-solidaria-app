import { Button, Header, TextElement } from '@/components'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'

const ProfileNotFound = async () => (
  <>
    <Header theme='light' />
    <main className='flex flex-col'>
      <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
        <div className='flex min-h-[70vh] flex-col items-center justify-center'>
          <Image src='/icon/Frame1.svg' alt='Hero' fill className='z-[-1] ' />
          <TextElement as='h1' type='t1' className='text-center !font-light'>
            El usuario que intentas buscar <b className='font-semibold'>no existe.</b>
          </TextElement>
          <TextElement as='p' type='base' className='text-center'>
            Asegurate de haber escrito correctamente el nombre de usuario
          </TextElement>
          <div className='flex gap-2'>
            <Button href={Routes.HOME} title='Volver al inicio' className='mt-4' />
          </div>
        </div>
      </article>
    </main>
  </>
)

export default ProfileNotFound
