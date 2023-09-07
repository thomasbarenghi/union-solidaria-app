'use client'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { currentActiveUserSelector, currentUserSelector } from '@/redux/selectors/users'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { getCurrentUser } from '@/redux/slices/users'

export default function Content() {
  const dispatch = useAppDispatch()
  const pathname = usePathname()
  const currentActiveUser = useAppSelector(currentActiveUserSelector)
  const currentUser = useAppSelector(currentUserSelector)
  const username = pathname.slice(2) ?? currentUser?.username
  const isCurrent = currentActiveUser?.username === currentUser?.username
  const isOrg = currentActiveUser?.role === 'organization'

  useEffect(() => {
    const init = async () => {
      if (!pathname.startsWith('/@')) return
      await dispatch(getCurrentUser(username))
    }
    void init()
  }, [dispatch, pathname, username])

  return (
    <section className='flex min-h-[100vh] w-full flex-col gap-6 bg-white '>
      <p>isCurrent: {isCurrent.toString()}</p>
      <p>isOrg: {isOrg.toString()}</p>
      <p>current logged: {currentActiveUser.username}</p>
      <p>current user: {currentUser.username}</p>
    </section>
  )
}
