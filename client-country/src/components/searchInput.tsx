import Image from 'next/image'

interface SearchInputProps {
  placeholder: string
  icon?: string
}

export default function SearchInput({ placeholder, icon = '/icon/search.svg' }: SearchInputProps) {
  return (
    <div className='flex w-full items-center gap-3 rounded-full  bg-pink-100 px-4 py-3'>
      <Image src={icon} width={16} height={16} alt='search' />
      <input
        type='text'
        placeholder={placeholder}
        className='w-full min-w-0 border-none bg-transparent placeholder:font-bold placeholder:text-gray-800 focus:outline-none'
      />
    </div>
  )
}
