'use client'
import { InitiativeGrid } from '@/components'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'
import { UserInterface } from '@/interfaces'

interface Props {
  currentUser: UserInterface
  isCurrent: boolean
}

const Favorites = ({ currentUser, isCurrent }: Props) => {
  const { data: user } = useSWR(Endpoints.USER_BY_ID(currentUser?.username), {
    fallbackData: currentUser
  })
  return <InitiativeGrid initiatives={user?.favorites} isCurrent={isCurrent} />
}

export default Favorites
