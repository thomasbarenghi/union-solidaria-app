import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { getUser } from '@/services/user/getUser.service'
import HeroSection from './_components/Hero'
import Content from './_components/Content'
import { toast } from 'sonner'

export const metadata: Metadata = {
  title: 'Explorar | Union Solidaria'
}

const Explore = async () => {
  const session = await getServerSession(nextauthOptions)
  const { data: loggedUser, error, errorMessage } = await getUser(session?.user?.email ?? '')

  if (!session) toast.error('No hay sesión abierta')
  if (error) toast.error(errorMessage)

  return (
    <main className='flex min-h-screen flex-col'>
      <HeroSection />
      <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
        {error ? (
          <p>No se puede mostrar el contenido debido a un error al obtener los datos del usuario</p>
        ) : (
          <Content currentUser={loggedUser} />
        )}
      </article>
    </main>
  )
}

export default Explore
