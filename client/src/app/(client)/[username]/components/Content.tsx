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
    <section className='flex w-full flex-col gap-6 '>
      <TabBar variant='underlined' items={tabItems} />
    </section>
  )
}

export default Content
