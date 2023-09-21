'use client'
import useSWR from 'swr'
import { InitiativeGrid } from '@/components'
import Endpoints from '@/utils/constants/endpoints.const'

const InitiativesSection = () => {
  const { data, isLoading } = useSWR(Endpoints.INITIATIVES)

  return (
    <section className=' flex flex-col gap-6'>
      <h1 className='titulo-3 w-full font-light'>
        Iniciativas cerca de <b className='font-semibold'>Moron, Buenos Aires</b>
      </h1>
      <InitiativeGrid initiatives={data} isLoading={isLoading} />
    </section>
  )
}

export default InitiativesSection
