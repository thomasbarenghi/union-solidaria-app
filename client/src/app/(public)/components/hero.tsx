import Image from 'next/image'
import { Button, TextElement } from '@/components'
import Routes from '@/utils/constants/routes.const'
import { srcData } from './heroSrcData'

const HeroSection = () => (
  <section className='mt-[100px] flex flex-col items-center justify-center  '>
    <div className='flex w-[65%] flex-col items-center justify-center gap-2 '>
      <TextElement as='h1' type='t1' className='text-center !font-light'>
        Transforma tu vida, colabora en causas benéficas,
        <br />
        <b className='font-semibold'> dile “Hola” al cambio.</b>
      </TextElement>
      <TextElement as='p' type='base' className='text-center'>
        Conviértete en el héroe de tu propia historia al unirte a proyectos emocionantes y causas inspiradoras. Únete a
        nuestra comunidad de voluntarios y comienza a aportar al libro de la humanidad.
      </TextElement>
      <Button className='mt-2' title='Explorar iniciativas' href={Routes.INITIATIVES} />
    </div>
    <FlexImages />
  </section>
)

interface FlexImagesProps {
  src: string
  height: string
}

const FlexImages = () => (
  <div className='flex h-[450px] w-full items-end justify-between gap-5'>
    {srcData.map((src: FlexImagesProps, index: number) => (
      <div key={index} className={`relative flex w-full  gap-5 ${src.height} `}>
        <Image src={src?.src} alt='Logo' fill className='object-cover' />
      </div>
    ))}
  </div>
)

export default HeroSection
