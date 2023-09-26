'use client'
import { Tabs, Tab } from '@nextui-org/react'

interface TabBarItemProps {
  title: string
  content: JSX.Element
  visible?: boolean
}

interface TabBarProps {
  items: TabBarItemProps[]
  variant: 'underlined' | 'solid' | 'light' | 'bordered'
}

const TabBar = ({ items, variant }: TabBarProps) => (
  <Tabs
    className='w-full whitespace-nowrap'
    classNames={{
      cursor: 'bg-white',
      tab: 'text-base',
      tabList: 'p-0 gap-6',
      panel: 'py-0'
    }}
    variant={variant}
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
