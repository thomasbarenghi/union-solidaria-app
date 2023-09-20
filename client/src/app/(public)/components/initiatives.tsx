'use client'
import { InitiativeGrid } from '@/components'
import { fetcher } from '@/services/fetcher.service'
import Endpoints from '@/utils/constants/endpoints.const'
import useSWR from 'swr'

const Initiatives = () => {
  const { data } = useSWR(Endpoints.INITIATIVES, fetcher)
  return (
    <section className='flex w-full flex-col gap-6'>
      <h1 className='titulo-3 w-full font-light'>
        Iniciativas <b className='font-semibold'>destacadas</b>
      </h1>
      <InitiativeGrid initiatives={data?.slice(0, 4)} />
    </section>
  )
}

export default Initiatives
