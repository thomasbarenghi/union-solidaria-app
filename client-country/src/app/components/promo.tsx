'use client'
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
        <Image src={iconSrc} fill alt='example' />
      </div>
      <p className='text-center'>{text}</p>
    </div>
  )
}

export default function PromoSec() {
  return (
    <>
      <section className=' flex w-full items-center justify-center'>
        <div className='relative flex aspect-[4/3] h-full min-h-[300px] w-full items-center justify-center md:aspect-auto'>
          <Image src='/image/home/foto.png' className='z-[0] rounded-xl object-cover' fill alt='banner' />
          <div className='relative z-[1] flex flex-col items-center gap-5'>
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
            <button className='w-max rounded-full bg-blue-600 px-6 py-2 font-semibold text-white shadow-xl'>
              Únete ahora
            </button>
          </div>
        </div>
      </section>
      <section className=' flex w-full items-center justify-center'>
        <div className='flex w-full flex-col gap-4'>
          <h2 className='text-xl font-normal text-blue-600'>¿Qué es Unión Solidaria?</h2>
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
      </section>
    </>
  )
}
