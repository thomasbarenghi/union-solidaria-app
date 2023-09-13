'use client'
import { Heading, SearchInput } from '@/components'
import Routes from '@/utils/constants/routes.const'
import { debounce } from 'lodash'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

export default function HeroSec() {
  const router = useRouter()

  const debouncedSearchHandler = useMemo(() => {
    return debounce((queryObj: Record<string, string>) => {
      const queryString = new URLSearchParams(queryObj).toString()
      router.push(`${Routes.INITIATIVES}/?${queryString}`)
    }, 1000)
  }, [])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchHandler({ [event.target.name]: event.target.value })
  }

  return (
    <section className='flex items-center justify-center'>
      <div className='flex w-full flex-col gap-4'>
        <Heading as='h2'>Buscar iniciativas</Heading>
        <div className='flex flex-col gap-2'>
          <SearchInput placeholder='Buscar' name='name' handleChange={handleSearchChange} />
        </div>
      </div>
    </section>
  )
}
