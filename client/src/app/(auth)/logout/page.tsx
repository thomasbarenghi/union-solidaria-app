'use client'
import { persistor } from '@/redux/store'
import Routes from '@/utils/constants/routes.const'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LogoutPage = () => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await persistor.purge()
      document.cookie = 'sessionId=0;  path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
      router.push(Routes.HOME)
    } catch (error) {
      console.log(error)
      alert('Error al cerrar sesión')
    }
  }

  useEffect(() => {
    void handleLogout()
  }, [])

  return <></>
}

export default LogoutPage
