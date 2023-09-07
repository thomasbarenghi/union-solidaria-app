'use client'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'
import { fetcher } from '@/services/fetcher.service'

interface Props {
  id: string
}

function InitiativesPage({ id }: Props) {
  const { data } = useSWR(`${Endpoints.INITIATIVES}/${id}`, fetcher)
  console.log(data)

  return (
    <section>
      <h1 className='text-3xl font-semibold'>Iniciativa Individual</h1>
      <p>title: {data?.title}</p>
      <p>desc: {data?.description}</p>
    </section>
  )
}

export default InitiativesPage
