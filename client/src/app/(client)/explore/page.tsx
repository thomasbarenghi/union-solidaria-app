import HeroSection from './_components/Hero'
import Content from './_components/Content'
import type { Metadata } from 'next'
import { getUser } from '@/services/user/getUser.service'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'

export const metadata: Metadata = {
  title: 'Explorar | Union Solidaria'
}

const Explore = async () => {
  const session = await getServerSession(nextauthOptions)
  const { data: loggedUser } = await getUser(session?.user?.email ?? '')
  return (
    <>
      <HeroSection />
      <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
        <Content currentUser={loggedUser} />
      </article>
    </>
  )
}

export default Explore
