'use client'
import { SearchInput } from '@/components'

export default function HeroSec() {
  return (
    <section className='flex items-center justify-center'>
      <div className='flex w-full flex-col gap-4'>
        <h2 className='text-xl font-normal text-blue-600'>Buscar Iniciativas</h2>
        <div className='flex flex-col gap-2'>
          <SearchInput placeholder='Buscar' />
          <SearchInput placeholder='Ubicacion' icon='/icon/location_on_blue.svg' />
        </div>
      </div>
    </section>
  )
}
