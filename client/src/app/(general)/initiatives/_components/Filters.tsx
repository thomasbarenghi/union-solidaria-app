'use client'
import { SearchInput } from '@/components'
import { debounce } from 'lodash'
import { useCallback } from 'react'
import Modal from './Modal'
import Selects from './Selects'

interface Props {
  query: Record<string, string>
  setQuery: React.Dispatch<React.SetStateAction<Record<string, string>>>
}

const SearchSection = ({ query, setQuery }: Props) => {
  const searchHandler = (queryObj: Record<string, string>) => {
    setQuery((prev: Record<string, string>) => {
      if (!queryObj.country) return { ...prev, ...queryObj }
      if (queryObj.country === prev.country) return { ...prev, ...queryObj }
      return { ...prev, ...queryObj, province: '' }
    })
  }

  const debouncedSearchHandler = useCallback(debounce(searchHandler, 1000), [])

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
          <SearchInput name='title' placeholder='Buscar' handleChange={handleSearchChange} />
        </div>
        <Modal>
          <Selects handleChange={handleSelectChange} query={query} />
        </Modal>
      </div>
    </section>
  )
}

export default SearchSection
