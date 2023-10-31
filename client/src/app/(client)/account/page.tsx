import Edit from './_components/GeneralForm'
import PasswordForm from './_components/PasswordForm'
import { TabBar, TextElement, UsersHero } from '@/components'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { nextauthOptions } from '@/utils/constants/auth.const'
import { getUser } from '@/services/user/getUser.service'

export const metadata: Metadata = {
  title: 'Cuenta | Union Solidaria'
}

const Account = async () => {
  const session = await getServerSession(nextauthOptions)
  const { data: user } = await getUser(session?.user?.email ?? '')

  const tabItems = [
    {
      title: 'Informacion general',
      content: <Edit currentUser={user} />
    },
    {
      title: 'Contraseña',
      content: <PasswordForm session={session} />
    }
  ]

  return (
    <>
      <UsersHero user={user} />
      <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
        <section className='flex w-full flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <TextElement type='t3' as='h1' className='font-semibold'>
              Editar cuenta
            </TextElement>
            <hr className='w-full' />
          </div>
          <div className='flex flex-col gap-3'>
            <TabBar
              items={tabItems}
              variant='solid'
              tabContentClassName='group-data-[selected=true]:text-white px-4 '
              cursorClassName='group-data-[selected=true]:bg-green-800 shadow-none '
            />
          </div>
        </section>
      </article>
    </>
  )
}

export default Account
