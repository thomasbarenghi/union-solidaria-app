'use client'
import { persistor } from '@/redux/store'
import Routes from '@/utils/constants/routes.const'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LogoutPage() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await persistor.purge()
      router.push(Routes.HOME)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    void handleLogout()
  }, [])

  return <></>
}
