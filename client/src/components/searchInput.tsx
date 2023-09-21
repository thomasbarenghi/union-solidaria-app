import Image from 'next/image'

interface SearchInputProps {
  placeholder: string
  name: string
  icon?: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({ placeholder, name, icon = '/icon/search.svg', handleChange }: SearchInputProps) => (
  <div className='flex w-full items-center gap-2 rounded-full border border-solid border-gray-300 px-5 py-3  bg-white'>
    <Image src={icon} width={16} height={16} alt='search' />
    <input
      type='text'
      name={name}
      placeholder={placeholder}
      className='w-full  min-w-0 border-none bg-transparent placeholder:font-light placeholder:text-gray-400 focus:outline-none'
      onChange={handleChange}
    />
  </div>
)

export default SearchInput
