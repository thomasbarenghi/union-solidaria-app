'use client'
import { ButtonLink, Heading } from '@/components'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'

interface PromoItemProps {
  iconSrc: string
  text: string
  className?: string
}

function PromoItem({ iconSrc, text, className }: PromoItemProps) {
  return (
    <div className='flex flex-col gap-2 lg:items-center'>
      <div className='relative aspect-[4/3] h-auto w-full lg:aspect-auto lg:h-[200px]'>
        <Image src={iconSrc} fill alt='example' priority />
      </div>
      <p className='text-center'>{text}</p>
    </div>
  )
}

export default function PromoSec() {
  return (
    <>
      <div className='relative flex items-center justify-center p-9'>
        <Image src='/image/home/foto.png' className='-z-10 rounded-xl object-cover' fill priority alt='banner' />
        <div className='flex flex-col items-center gap-5'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-center text-xl  font-semibold text-white'>
              Iniciativas que
              <br />
              cambian el mundo
            </h1>
            <p className='text-center text-white'>
              Únete a Unión Solidaria
              <br />y comenzá a hacer la diferencia
            </p>
          </div>
          <ButtonLink variant='primary' href={Routes.REGISTER}>
            Únete ahora
          </ButtonLink>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <Heading as='h2'>¿Qué es Unión Solidaria?</Heading>
        <div className='grid grid-cols-1 justify-center  gap-5 rounded-xl p-6 shadow-initiativeItem sm:grid-cols-2 md:p-8 lg:gap-10 lg:p-8 xl:gap-14 xl:p-10'>
          <PromoItem
            iconSrc='/icon/home/promo2.svg'
            text='Como voluntario/a, es donde encontrar la próxima iniciativa de la que podés ser parte.'
          />
          <PromoItem
            iconSrc='/icon/home/promo1.svg'
            text='Como organización, es donde encontrarás voluntarios/as para tu iniciativa.'
          />
        </div>
      </div>
    </>
  )
}
