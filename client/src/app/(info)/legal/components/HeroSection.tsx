import { TextElement } from '@/components'

const HeroSection = () => (
  <>
    <section className='section-padding-x-1 mt-[95px] py-10 pb-16 '>
      <div className='flex justify-center flex-col items-center'>
        <TextElement as='h1' type='t1' className='text-center'>
          Documentos Legales
        </TextElement>
        <TextElement as='p' type='base' className='text-center lg:max-w-[550px] max-w-none'>
          Al usar nuestro servicio aceptas nuestros terminos, y nos permites garantizar la seguridad de tus datos.
        </TextElement>
      </div>
    </section>
  </>
)

export default HeroSection
