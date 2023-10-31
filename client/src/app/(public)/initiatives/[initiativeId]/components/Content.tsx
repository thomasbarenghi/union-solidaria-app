'use client'
import Endpoints from '@/utils/constants/endpoints.const'
import { Key, useState } from 'react'
import useSWR from 'swr'
import HeroSection from './HeroSection'
import DataSection from './DataSection'

const Content = ({ id }: { id: string }) => {
  const { data, isLoading } = useSWR(Endpoints.INITIATIVES_BY_ID(id))
  const [currentIndex, setCurrentIndex] = useState<Key>(0)
  return (
    <>
      <HeroSection data={data} isLoading={isLoading} currentIndex={currentIndex} />
      <article className='section-padding-1 container-section listContainer article-layout-1 !py-14'>
        <DataSection data={data} isLoading={isLoading} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </article>
    </>
  )
}

export default Content
