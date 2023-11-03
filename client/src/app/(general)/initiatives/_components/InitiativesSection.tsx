'use client'
import useSWR from 'swr'
import { InitiativeGrid, TextElement } from '@/components'
import Endpoints from '@/utils/constants/endpoints.const'
import Filters from './Filters'
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

  const { data, isLoading, error } = useSWR(Endpoints.INITIATIVES(buildQueryString(query)))

  return (
    <section className='flex w-full flex-col gap-6'>
      <div className='flex flex-col gap-1'>
        <TextElement type='t2' as='h1' className='w-full !font-semibold'>
          Todas las iniciativas
        </TextElement>
        <TextElement type='base' as='p' className='w-full !font-light'>
          Apoya a las iniciativas que más te gusten y ayudalas a cumplir sus objetivos.
        </TextElement>
      </div>
      <Filters query={query} setQuery={setQuery} />
      <InitiativeGrid initiatives={data} isLoading={isLoading} isError={error} />
    </section>
  )
}

export default InitiativesSection
