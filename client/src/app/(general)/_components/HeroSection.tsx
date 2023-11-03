import Image from 'next/image'
import { Button, TextElement } from '@/components'
import Routes from '@/utils/constants/routes.const'
import { srcData } from './heroSrcData'

const HeroSection = () => (
  <section className='flex min-h-screen flex-col items-center justify-between pt-[100px]  '>
    <div className='flex lg:px-0 section-padding-x-1 w-full lg:w-[70%] flex-col items-center justify-center gap-2 py-5 lg:py-10 '>
      <TextElement as='h1' type='t1' className='text-center !font-light'>
        Transforma tu vida, colabora en causas benéficas,
        <br />
        <b className='font-semibold'> dile “Hola” al cambio.</b>
      </TextElement>
      <TextElement as='p' type='base' className='text-center w-full xl:max-w-[80%] 2xl:max-w-[65%] '>
        Conviértete en el héroe de tu propia historia al unirte a proyectos emocionantes y causas inspiradoras. Únete a
        nuestra comunidad de voluntarios y comienza a aportar al libro de la humanidad.
      </TextElement>
      <Button className='mt-2' title='Explorar iniciativas' href={Routes.INITIATIVES} />
    </div>
    <FlexImages />
    <Image src='/icon/Frame1.svg' alt='Hero' fill className='z-[-1] ' />
  </section>
)

interface FlexImagesProps {
  src: string
  height: string
}

const FlexImages = () => (
  <div className='flex h-[450px] lg:h-[500px] pt-10 lg:pt-0  w-full overflow-auto lg:overflow-visible flex-grow items-end justify-between gap-5 px-4'>
    {srcData.map((src: FlexImagesProps, index: number) => (
      <div key={index} className={`relative flex w-full min-w-[70vw] md:min-w-[45vw] lg:min-w-0 gap-5 ${src.height} `}>
        <Image src={src?.src} alt='Logo' fill className='rounded-[40px]  object-cover' />
      </div>
    ))}
  </div>
)

export default HeroSection
