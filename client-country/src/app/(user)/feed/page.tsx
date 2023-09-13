import { SearchBar, MyVolunteers, LatestUpdatesCards } from './components'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
  titleHeader: string
  path: string
}

function HeaderContainer({ titleHeader, path }: HeaderProps) {
  return (
    <div className='flex max-w-4xl justify-between gap-5 py-4 sm:flex items-start sm:justify-start'>
      <h1 className='mx-auto text-xl font-semibold text-blue-600'>{titleHeader}</h1>
      <Link href={path} className='flex items-center justify-center gap-4 sm:hidden '>
        <span className='text-base font-normal leading-4 text-blue-500'>ver todas</span>
        <Image src='/icon/arrow-righ.svg' width={15} height={15} alt='arrow-right' />
      </Link>
    </div>
  )
}

export default function FeedPage() {
  return (
    <main className='flex flex-col px-5 py-5'>
      <SearchBar />
      <HeaderContainer titleHeader='Mis voluntariados' path='#' />
      <MyVolunteers />
      <HeaderContainer titleHeader='Publicaciones Recientes' path='#' />
      <LatestUpdatesCards />
    </main>
  )
}
