import FormSec from './components/FormSection'
import HeroSec from './components/HeroSection'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { redirect } from 'next/navigation'
import Routes from '@/utils/constants/routes.const'

export const metadata: Metadata = {
  title: 'Crear iniciativa | Unión Solidaria'
}

const FormPage = async () => {
  const session = await getServerSession(nextauthOptions)

  if (session === null) redirect(Routes.LOGIN)

  return (
    <>
      <HeroSec />
      <article className='section-padding-1 container-section article-layout-1 listContainer'>
        <FormSec />
      </article>
    </>
  )
}

export default FormPage
