import { TextElement } from '@/components'
import Image from 'next/image'

const HeroSection = () => (
  <section className='section-padding-x-1 mt-[95px] flex  justify-center bg-gradient-to-r from-[#e0e7ff] to-[#ccfbf1] '>
    <div className=' flex flex-col lg:flex-row w-full gap-4 lg:gap-[60px]  py-14 xl:container '>
      <div className='flex w-full flex-col justify-center gap-3 text-start'>
        <TextElement type='t1' as='h1' className='!font-light '>
          Construimos historias a través del voluntariado.{' '}
          <b className='font-semibold'>Aportamos nuestro granito de arena en la lucha social.</b>
        </TextElement>
        <TextElement type='base' as='p'>
          Nuestra pasión por el voluntariado es el motor que impulsa nuestro compromiso diario en la búsqueda incansable
          de un impacto positivo en las comunidades que servimos. Únete a nosotros en esta emocionante aventura de
          construir un mundo más justo y equitativo a través de la acción voluntaria.
        </TextElement>
      </div>
      <div>
        <div className='relative aspect-[4/3] lg:w-[500px] w-full '>
          <Image src='/image/publicAbout/hero.png' alt='Hero' fill className='object-contain' />
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
