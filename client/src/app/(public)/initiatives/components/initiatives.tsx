'use client'
import useSWR from 'swr'
import { InitiativeGrid } from '@/components'
import Endpoints from '@/utils/constants/endpoints.const'
import Filters from './filters'
import { useState } from 'react'
import { buildQueryString } from '@/utils/functions/buildQueryString.utils'

const InitiativesSection = () => {
  const [query, setQuery] = useState({
    title: '',
    country: '',
    province: '',
    opportunities: '',
    themes: ''
  })

  const { data, isLoading } = useSWR(Endpoints.INITIATIVES(buildQueryString(query)))

  return (
    <section className='flex w-full flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <h1 className='titulo-3 w-full font-light'>
          Iniciativas que pueden <b className='font-semibold'>cambiar el mundo</b>
        </h1>
        <p className='bodyText'>Apoya a las iniciativas que más te gusten y ayudalas a cumplir sus objetivos.</p>
      </div>
      <Filters query={query} setQuery={setQuery} />
      <InitiativeGrid initiatives={data} isLoading={isLoading} />
    </section>
  )
}

export default InitiativesSection
