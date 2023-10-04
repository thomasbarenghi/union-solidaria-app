'use client'
import { InitiativeGrid, TextElement } from '@/components'
import Endpoints from '@/utils/constants/endpoints.const'
import useSWR from 'swr'

const Initiatives = () => {
  const { data, isLoading } = useSWR(Endpoints.INITIATIVES)
  return (
    <section className='flex w-full flex-col gap-6'>
      <TextElement type='t2' as='h1' className=' w-full font-light'>
        Iniciativas <b className='font-semibold'>destacadas</b>
      </TextElement>
      <InitiativeGrid initiatives={data?.slice(0, 4)} isLoading={isLoading} />
    </section>
  )
}

export default Initiatives
