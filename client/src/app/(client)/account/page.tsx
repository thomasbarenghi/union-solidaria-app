import Edit from './components/GeneralForm'
import PasswordForm from './components/PasswordForm'
import HeroSec from './components/hero'
import { TabBar, TextElement } from '@/components'

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
          <TextElement type='t3' as='h1' className='font-semibold'>
            Editar cuenta
          </TextElement>
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
