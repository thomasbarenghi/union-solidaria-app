'use client'
import { Header } from '@/components'
import HeroSection from './components/HeroSection'
import InitiativesSection from './components/InitiativesSection'
import MarketingSection from './components/MarketingSection'
// import type { Metadata } from 'next'
import Routes from '@/utils/constants/routes.const'
// Debe ser deprecado
import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'

// export const metadata: Metadata = {
//   title: 'Cambiemos el mundo juntos | Union Solidaria'
// }

const Home = () => {
  const router = useRouter()
  const auth = useAppSelector((state) => state.authSession.auth)

  if (auth.isLogged) return router.push(Routes.EXPLORE)

  return (
    <>
      <Header theme='light' />
      <HeroSection />
      <article className='section-padding-1 container-section article-layout-1'>
        <InitiativesSection />
        <MarketingSection />
      </article>
    </>
  )
}

export default Home
