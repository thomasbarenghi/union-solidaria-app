'use client'
import { InitiativesFlex } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { currentFilters } from '@/redux/selectors/filters'
import { useGetFilteredInitiativesQuery } from '@/redux/services/initiatives.service'
import Image from 'next/image'
import Link from 'next/link'

export default function RecentSec() {
  const filters = useAppSelector(currentFilters)
  const { data } = useGetFilteredInitiativesQuery(filters)

  return (
    <section className='flex w-full items-center justify-center'>
      <div className='container flex flex-col gap-4'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-normal text-blue-600'>Recientes</h2>
          <Link href='/initiatives' className='flex items-center gap-4 '>
            <span className='text-base font-normal leading-4 text-blue-500'>ver todas</span>
            <Image src='/icon/arrow-right.svg' className='h-3 w-2' width={8} height={12} alt='arrow-right' />
          </Link>
        </div>
        <InitiativesFlex initiatives={data || []} />
      </div>
    </section>
  )
}
