import { TextElement } from '@/components'

const HeroSection = () => (
  <section className='section-padding-x-1 min-h-[40vh] mt-[95px] flex  justify-center bg-gradient-to-r from-[#ECFBF9] to-[#E5FCDE] '>
    <div className=' flex w-full flex-col gap-10 py-14 xl:container  lg:flex-row lg:gap-[60px] '>
      <div className='flex w-full flex-col justify-center items-center gap-2 text-center'>
        <TextElement type='t1' as='h1' className='!font-light '>
          Nuestra causa se sostiene con tu ayuda,
          <b className='font-semibold'> tu donación nos mantiene activos.</b>
        </TextElement>
        <TextElement type='base' as='p' className='lg:max-w-[70vw] '>
          Cada donación que recibimos es un pilar fundamental que sostiene nuestras iniciativas y nos permite continuar
          nuestra labor en pro de un mundo mejor. Tu apoyo nos mantiene activos y nos inspira a seguir haciendo el bien.
        </TextElement>
      </div>
    </div>
  </section>
)

export default HeroSection
