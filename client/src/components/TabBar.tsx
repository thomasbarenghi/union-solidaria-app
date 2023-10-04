'use client'
import { Tabs, Tab } from '@nextui-org/react'
import { Key } from 'react'

interface TabBarItemProps {
  title: string
  content: JSX.Element
  visible?: boolean
}

interface TabBarProps {
  items: TabBarItemProps[]
  variant: 'underlined' | 'solid' | 'light' | 'bordered'
  onSelectionChange?: (index: Key) => void
  withHr?: boolean
}

const TabBar = ({ items, variant, onSelectionChange = (index: Key) => {}, withHr = false }: TabBarProps) => (
  <Tabs
    className='w-full whitespace-nowrap'
    classNames={{
      cursor: 'bg-white',
      tab: 'text-base',
      tabList: 'p-0 gap-6 ',
      panel: 'py-0',
      base: `${withHr ? 'border-b pb-2' : ''}`,
      tabContent: 'group-data-[selected=true]:font-medium font-light'
    }}
    variant={variant}
    onSelectionChange={(index) => {
      void onSelectionChange(index)
    }}
  >
    {items?.map(
      ({ title, content, visible = true }, index) =>
        visible && (
          <Tab key={index} title={title} className='px-0'>
            {content}
          </Tab>
        )
    )}
  </Tabs>
)

export default TabBar
