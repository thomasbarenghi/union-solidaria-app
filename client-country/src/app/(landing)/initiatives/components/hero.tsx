'use client'
import { SearchInput } from '@/components'
import Image from 'next/image'

export default function HeroSec() {
  return (
    <section className='flex w-full items-center justify-center'>
      <div className='flex w-full gap-8'>
        <div className='flex items-center justify-center rounded-full bg-pink-100 p-3'>
          <Image src='/icon/tune.svg' alt='tune' width={24} height={24} />
        </div>
        <SearchInput placeholder='Buscar' />
      </div>
    </section>
  )
}
