'use client'
import useSWR from 'swr'
import { Hero } from '@/components'
import Endpoints from '@/utils/constants/endpoints.const'

interface Props {
  id: string
}

const HeroSec = ({ id }: Props) => {
  const { data } = useSWR(Endpoints.INITIATIVES_BY_ID(id))
  return (
    <Hero imageSrc={data?.thumbnail}>
      <div className='flex flex-col gap-3 py-10'>
        <div>
          <h1 className=' titulo-3 w-full font-medium text-white'>{data?.title}</h1>
          <p className='bodyText font-light text-white'>{data?.locations}</p>
        </div>
        <button className='w-max rounded-full bg-green-800 px-7 py-3 font-medium text-white'>Inscríbete ahora</button>
      </div>
    </Hero>
  )
}

export default HeroSec
