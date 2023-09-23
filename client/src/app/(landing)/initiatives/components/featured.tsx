'use client'
import { InitiativesFlex } from '@/components'
import { useGetFilteredInitiativesQuery } from '@/redux/services/initiatives.service'
import { useSearchParams } from 'next/navigation'

export default function FeaturedSec() {
  const params = useSearchParams()
  const filters = Object.fromEntries(params.entries())

  const { data } = useGetFilteredInitiativesQuery(filters)
  return (
    <section className='flex w-full items-center justify-center'>
      <div className='container flex flex-col gap-4'>
        <div className='flex justify-between'>
          <h2 className='text-xl font-normal text-blue-600'>Iniciativas</h2>
        </div>
        <InitiativesFlex initiatives={data || []} />
      </div>
    </section>
  )
}
