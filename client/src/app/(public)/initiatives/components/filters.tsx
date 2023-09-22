'use client'
import { SearchInput } from '@/components'
import { debounce } from 'lodash'
import { useMemo } from 'react'
import Selects from './selects'
import Modal from './modal'

interface Props {
  query: Record<string, string>
  setQuery: (query: any) => void
}

const SearchSection = ({ query, setQuery }: Props) => {
  const searchHandler = (queryObj: Record<string, string>) => {
    setQuery((prev: any) => ({ ...prev, ...queryObj }))
    if (query.country.length > 0) {
      setQuery((prev: any) => ({ ...prev, province: '' }))
    }
  }

  const debouncedSearchHandler = useMemo(() => debounce(searchHandler, 1000), [])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchHandler({ [event.target.name]: event.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    debouncedSearchHandler({ [name]: value })
  }

  return (
    <section className='flex w-full flex-col items-center justify-center gap-4'>
      <div className='flex w-full justify-between gap-4'>
        <div className='w-[400px] max-w-[400px] '>
          <SearchInput name='name' placeholder='Buscar' handleChange={handleSearchChange} />
        </div>
        <Modal>
          <Selects handleChange={handleSelectChange} query={query} />
        </Modal>
      </div>
    </section>
  )
}

export default SearchSection
