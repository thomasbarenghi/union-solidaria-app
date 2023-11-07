'use client'
import { TabBar } from '@/components'
import { initiativeTabItemsBuilder } from '../initiativeTabItemsBuilder'
import { useCallback } from 'react'
import { InitiativeInterface, UserInterface } from '@/interfaces'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface Props {
  data: InitiativeInterface
  currentUser: UserInterface
}

const DataSection = ({ data, currentUser }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const tabItems = initiativeTabItemsBuilder(currentUser, data)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <section className='flex w-full flex-col gap-4'>
      <TabBar
        onSelectionChange={async (index) => router.push(
          pathname + '?' + createQueryString('idx', index.toString())
        )}
        selectedKey={searchParams?.get('idx') ?? 'Informacion'}
        items={tabItems}
        variant='solid'
        tabContentClassName='group-data-[selected=true]:text-white px-4 '
        cursorClassName='group-data-[selected=true]:bg-green-800 shadow-none '
      />
    </section>
  )
}

export default DataSection
