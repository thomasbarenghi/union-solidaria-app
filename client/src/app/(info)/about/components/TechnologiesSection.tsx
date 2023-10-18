import Image from 'next/image'
import { technologies, TechnologyItem } from '../lib/technologies'
import { TextElement } from '@/components'

const TechnologiesSection = () => (
  <section className='flex w-full flex-col items-center justify-center gap-10 bg-white'>
    <div className='flex w-full flex-col items-center gap-1 text-center'>
      <TextElement type='t1' as='h1' className='font-semibold'>
        Tecnologías que usamos
      </TextElement>
      <TextElement type='base' as='p'>
        Nuestro equipo de desarrollo trabaja con las últimas tecnologías para brindarle
        <br /> a nuestros usuarios la mejor experiencia.
      </TextElement>
    </div>
    <div className='lg:gap-estilo1 grid grid-cols-1 gap-10 md:grid-cols-2'>
      {technologies.map((tecnologia: TechnologyItem, index) => (
        <div className='flex flex-col gap-3' key={index}>
          <div className='flex flex-row items-center justify-start gap-3 align-middle'>
            <div className='relative h-[50px] max-h-[50px]  w-[50px] max-w-[50px] '>
              <Image src={tecnologia.image} alt={tecnologia.title} layout='fill' className='object-contain ' />
            </div>
            <TextElement type='t3' as='h1' className='font-medium'>
              {tecnologia.title}
            </TextElement>
          </div>
          <TextElement type='base' as='p'>
            {tecnologia.description}
          </TextElement>
        </div>
      ))}
    </div>
  </section>
)

export default TechnologiesSection
