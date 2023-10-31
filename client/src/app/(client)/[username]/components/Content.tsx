'use client'
import { TabBar } from '@/components'
import Endpoints from '@/utils/constants/endpoints.const'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import { profileTabItemsBuilder } from './profileTabItemsBuilder'

const Content = ({ username }: { username: string }) => {
  const { data: currentUser, isLoading } = useSWR(Endpoints.USER_BY_ID(username))
  const { data: session } = useSession()
  const isCurrent = currentUser?.username === session?.user.username
  const isOrg = currentUser?.role === 'organization'
  const tabItems = profileTabItemsBuilder(isOrg, isCurrent, isLoading, currentUser)

  return (
    <section className='flex w-full flex-col gap-4 '>
      <TabBar
        variant='solid'
        items={tabItems}
        tabContentClassName='group-data-[selected=true]:text-white px-4 '
        cursorClassName='group-data-[selected=true]:bg-green-800 shadow-none '
        isLoading={isLoading}
      />
    </section>
  )
}

export default Content
