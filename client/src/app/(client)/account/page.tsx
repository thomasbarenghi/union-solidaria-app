import Edit from './components/GeneralForm'
import PasswordForm from './components/PasswordForm'
import HeroSec from './components/hero'
import { TabBar } from '@/components'

const tabItems = [
  {
    title: 'Informacion general',
    content: <Edit />
  },
  {
    title: 'Contraseña',
    content: <PasswordForm />
  }
]

const Account = () => (
  <>
    <HeroSec />
    <article className='section-padding-1 container-section article-layout-1 listContainer !py-14'>
      <section className='flex w-full flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <h1 className='titulo-3 font-semibold'>Editar cuenta</h1>
          <hr className='w-full' />
        </div>
        <div className='flex flex-col gap-3'>
          <TabBar variant='underlined' items={tabItems} />
        </div>
      </section>
    </article>
  </>
)

export default Account
