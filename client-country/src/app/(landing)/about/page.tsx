import { Heading } from '@/components'
import { pinkBlurDataURL } from '@/utils/constants/images.const'
import Image from 'next/image'

function AboutPage() {
  return (
    <main className='mb-12'>
      <div className='relative flex h-48 w-full items-center justify-center bg-white/50 lg:h-96'>
        <Image
          className='-z-10 object-cover'
          src='/assets/about-image.webp'
          fill
          priority
          placeholder='blur'
          blurDataURL={pinkBlurDataURL}
          sizes='100vw'
          alt='image de personas apoyando una iniciativa'
        />
        <Image
          src='/assets/logo.webp'
          width={100}
          height={100}
          priority
          placeholder='blur'
          blurDataURL={pinkBlurDataURL}
          sizes='100vw'
          className='lg:h-52 lg:w-52'
          alt='logo de la plataforma'
        />
      </div>
      <section className='mx-auto max-w-screen-lg space-y-3 p-4'>
        <Heading as='h2'>¿Quiénes somos?</Heading>
        <p className='text-base text-black'>
          Desde su fundación en el año 2003, Unión Solidaria ha desempeñado un papel fundamental en la promoción del
          voluntariado y el servicio comunitario en Latinoamérica. Nuestra organización se ha convertido en un puente
          sólido que une a voluntarios comprometidos con organizaciones que buscan apoyo para diversas iniciativas
          sociales, desde la preservación del medio ambiente hasta la educación y la atención médica.
        </p>
      </section>
      <section className='mx-auto max-w-screen-lg space-y-3 p-4'>
        <Heading as='h2'>Nuestra Misión</Heading>
        <p className='whitespace-pre-line text-base text-black'>
          {`En Unión Solidaria, nuestra misión es simple pero poderosa: fortalecer la solidaridad en Latinoamérica al facilitar la colaboración entre voluntarios y organizaciones sin fines de lucro. Creemos en el poder de las personas para generar un cambio positivo en sus comunidades por lo tanto, trabajamos incansablemente para hacer que el voluntariado sea accesible y efectivo.
          
          Lo que nos diferencia es nuestra capacidad para conectar de manera efectiva a apasionados organizaciones que necesitan su ayuda. Nuestro enfoque en la diversidad de causas, que educación, salud y más, permite que cualquier persona encuentre una oportunidad de que se sus intereses y valores.`}
        </p>
      </section>
      <section className='mx-auto max-w-screen-lg space-y-3 p-4'>
        <Heading as='h2'>Recursos y Oportunidades</Heading>
        <p className='text-base text-black'>
          Además de servir como plataforma de conexión, Unión Solidaria brinda recursos valiosos y oportunidades de
          aprendizaje para voluntarios y organizaciones. Nuestra comunidad en línea ofrece herramientas educativas,
          capacitación y eventos para enriquecer la experiencia de voluntariado y promover un impacto positivo y
          duradero.
        </p>
      </section>
      <section className='mx-auto max-w-screen-lg space-y-3 p-4'>
        <Heading as='h2'>Donaciones</Heading>
        <p className='text-base text-black'>
          Para seguir cumpliendo nuestra misión, dependemos en gran medida de las generosas donaciones de individuos y
          organizaciones comprometidos con el voluntariado y el bienestar de las comunidades en Latinoamérica. Cada
          contribución nos ayuda a continuar conectando a quienes desean servir con quienes necesitan su apoyo.
        </p>
      </section>
    </main>
  )
}
export default AboutPage
