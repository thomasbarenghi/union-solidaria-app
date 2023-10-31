'use client'
import Skeleton from './InfoSection/Skeleton'
import { TabBar } from '@/components'
import { initiativeTabItemsBuilder } from './initiativeTabItemsBuilder'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'
import { Key } from 'react'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  data: InitiativeInterface
  isLoading: boolean
  currentIndex: Key
  setCurrentIndex: (index: Key) => void
}

const DataSection = ({ data, isLoading, currentIndex, setCurrentIndex }: Props) => {
  const currentUser = useAppSelector(loggedUserSelector)
  const tabItems = initiativeTabItemsBuilder(currentUser, isLoading, data)
  if (isLoading) return <Skeleton />
  return (
    <>
      <section className='flex w-full flex-col gap-4'>
        <TabBar
          onSelectionChange={(index) => setCurrentIndex(index)}
          items={tabItems}
          variant='solid'
          tabContentClassName='group-data-[selected=true]:text-white px-4 '
          cursorClassName='group-data-[selected=true]:bg-green-800 shadow-none '
        />
      </section>
    </>
  )
}

export default DataSection
