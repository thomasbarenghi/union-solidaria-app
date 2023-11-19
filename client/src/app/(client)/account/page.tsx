import { TabBar, TextElement } from '@/components'
import { getUser } from '@/services/user/getUser.service'
import { nextauthOptions } from '@/utils/constants/auth.const'
import Routes from '@/utils/constants/routes.const'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Hero from './_components/Hero'
import { buildAccountTabs } from './buildAccountTabs'
import { toast } from 'sonner'

export const metadata: Metadata = {
  title: 'Cuenta | Union Solidaria'
}

const Account = async () => {
  const session = await getServerSession(nextauthOptions)
  if (!session) return redirect(Routes.LOGIN)
  const { data: user, error, errorMessage } = await getUser(session?.user?.email ?? '')
  const tabItems = buildAccountTabs(user, session)

  if (error) toast.error(errorMessage)

  return (
    <main className='flex min-h-screen flex-col'>
      <Hero session={session} currentUser={user} />
      <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
        <section className='flex w-full flex-col gap-2'>
          <TextElement type='t3' as='h1' className='font-semibold'>
            Editar cuenta
          </TextElement>
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
    </main>
  )
}

export default Account
