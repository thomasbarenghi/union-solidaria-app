'use client'
import { useAppSelector } from '@/redux/hooks'
import { currentActiveUserSelector, currentUserSelector } from '@/redux/selectors/users'
import { usePathname } from 'next/navigation'
import { useGetUsersByUsernameQuery } from '@/redux/services/users.service'

export default function Content() {
  const pathname = usePathname()
  const currentActiveUser = useAppSelector(currentActiveUserSelector)
  const currentUser = useAppSelector(currentUserSelector)
  const username = pathname.slice(2) ?? currentUser?.username
  useGetUsersByUsernameQuery(username)
  const isCurrent = currentActiveUser?.username === currentUser?.username
  const isOrg = currentActiveUser?.role === 'organization'

  return (
    <section className='flex min-h-[100vh] w-full flex-col gap-6 bg-white '>
      <p>isCurrent: {isCurrent.toString()}</p>
      <p>isOrg: {isOrg.toString()}</p>
      <p>current logged: {currentActiveUser.username}</p>
      <p>current user: {currentUser.username}</p>
    </section>
  )
}
