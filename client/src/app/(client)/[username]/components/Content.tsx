'use client'
import { TabBar } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'
import Endpoints from '@/utils/constants/endpoints.const'
import useSWR from 'swr'
import { profileTabItemsBuilder } from './profileTabItemsBuilder'

const Content = ({ username }: { username: string }) => {
  const { data: currentUser, isLoading } = useSWR(Endpoints.USER_BY_ID(username))
  const loggedUser = useAppSelector(loggedUserSelector)
  const isCurrent = currentUser?.username === loggedUser?.username
  const isOrg = currentUser?.role === 'organization'
  const tabItems = profileTabItemsBuilder(isOrg, isCurrent, isLoading, currentUser)

  return (
    <section className='flex w-full flex-col gap-6 '>
      <TabBar variant='underlined' items={tabItems} />
    </section>
  )
}

export default Content
