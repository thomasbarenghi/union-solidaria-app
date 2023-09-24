import { TabBar } from '@/components'
import Privacy from './privacy'
import Terms from './terms'

const items = [
  {
    title: 'Términos y condiciones',
    content: <Terms />
  },
  {
    title: 'Política de privacidad',
    content: <Privacy />
  }
]

const Content = () => (
  <section className='section-padding-1 flex min-h-[100vh] w-full flex-col gap-2'>
    <TabBar items={items} variant='underlined' />
  </section>
)

export default Content
