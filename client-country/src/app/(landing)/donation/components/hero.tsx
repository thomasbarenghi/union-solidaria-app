import { Heading } from '@/components'
import Image from 'next/image'

export default function HeroSec() {
  return (
    <section className='flex w-full flex-col items-center  justify-center'>
      <div className='relative h-[35vh] min-h-[250px] w-full '>
        <Image
          src='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          alt='Hero'
          className='object-cover'
          fill
        />
      </div>
      <div className='mx-auto flex w-full max-w-screen-lg flex-col gap-4 p-4'>
        <Heading>La solidaridad nos mantiene y la unión nos hace más grandes</Heading>
        <Heading as='h2'>¿Estás listo/a para marcar la diferencia?</Heading>
        <p>
          Tu donación es una inversión en un mundo más solidario y compasivo. Al unirte a nuestra causa, te conviertes
          en parte de una comunidad que trabaja incansablemente para construir un futuro mejor. <br />
          <br />
          En Unión Solidaria, creemos en el poder de la unión. Tu donación es el combustible que nos impulsa a seguir
          conectando, creciendo y transformando vidas. Te agradecemos por ser parte de esta valiosa misión y por ser un
          agente de cambio en Latinoamérica.
        </p>
      </div>
    </section>
  )
}
