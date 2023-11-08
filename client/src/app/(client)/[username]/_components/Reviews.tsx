'use client'
import { ReviewGrid } from '@/components'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'
import { UserInterface } from '@/interfaces'

interface Props {
  currentUser: UserInterface
  isCurrent: boolean
}

const Reviews = ({ currentUser, isCurrent }: Props) => {
  const { data: user } = useSWR(Endpoints.USER_BY_EMAIL(currentUser?.username), {
    fallbackData: currentUser
  })
  return <ReviewGrid reviews={user?.reviews} isCurrent={isCurrent} />
}

export default Reviews
