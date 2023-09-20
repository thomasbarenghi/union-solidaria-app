'use client'
import { Tabs, Tab } from '@nextui-org/react'
import Privacy from './privacy'
import Terms from './terms'

const Content = () => (
  <section className='section-padding-1 flex w-full flex-col gap-2'>
    <Tabs
      aria-label='Options'
      className='w-full whitespace-nowrap'
      classNames={{
        cursor: 'bg-green-800',
        tab: 'text-base',
        tabList: 'p-0'
      }}
      variant='underlined'
    >
      <Tab key='TYC' title='Términos y condiciones' className='px-0'>
        <Terms />
      </Tab>
      <Tab key='PDP' title='Política de privacidad'>
        <Privacy />
      </Tab>
    </Tabs>
  </section>
)

export default Content
