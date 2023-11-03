import FormSec from './_components/FormSection'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { redirect } from 'next/navigation'
import Routes from '@/utils/constants/routes.const'
import { UsersHero } from '@/components'
import { getUser } from '@/services/user/getUser.service'

export const metadata: Metadata = {
  title: 'Crear iniciativa | Unión Solidaria'
}

const FormPage = async () => {
  const session = await getServerSession(nextauthOptions)
  const { data, error } = await getUser(session?.user?.email ?? '')
  if (session === null) redirect(Routes.LOGIN)
  if (session.user.role === 'volunteer') redirect(Routes.EDIT_ACCOUNT)
  if (error) throw new Error('Error al cargar los datos del usuario')
  return (
    <>
      <UsersHero user={data} isLoading={false} isError={error} />
      <article className='section-padding-1 container-section article-layout-1 listContainer'>
        {!error && <FormSec />}
      </article>
    </>
  )
}

export default FormPage
