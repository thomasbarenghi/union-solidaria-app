import Image from 'next/image'
import { technologies, TechnologyItem } from '../lib/technologies'

const TechnologiesSection = () => (
  <section className='centerInner bg-white'>
    <div className='centerInner gap-10'>
      <div className='flex w-full flex-col gap-1'>
        <h1 className='titulo-3'>Tecnologías que usamos</h1>
        <p className='bodyText'>
          Nuestro equipo de desarrollo trabaja con las últimas tecnologías para brindarle a nuestros usuarios la mejor
          experiencia.
        </p>
      </div>
      <div className='lg:gap-estilo1 grid grid-cols-1 gap-10 md:grid-cols-2'>
        {technologies.map((tecnologia: TechnologyItem, index) => (
          <div className='flex flex-col gap-3' key={index}>
            <div className='flex flex-row items-center justify-start gap-3 align-middle'>
              <div className='relative h-[50px] max-h-[50px]  w-[50px] max-w-[50px] '>
                <Image src={tecnologia.image} alt={tecnologia.title} layout='fill' className='object-contain ' />
              </div>
              <h3 className='titulo-3  text-center'>{tecnologia.title}</h3>
            </div>
            <p className='bodyText'>{tecnologia.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TechnologiesSection
