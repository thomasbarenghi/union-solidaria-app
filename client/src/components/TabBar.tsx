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
  tabListClassName?: string
  tabClassName?: string
  tabContentClassName?: string
  cursorClassName?: string
}

const TabBar = ({
  items,
  variant,
  onSelectionChange = (index: Key) => {},
  withHr = false,
  tabListClassName = 'p-0 gap-6 ',
  tabClassName,
  tabContentClassName = 'p-4',
  cursorClassName
}: TabBarProps) => (
  <Tabs
    // className='w-full whitespace-nowrap'
    classNames={{
      // tabList: tabListClassName,
      // cursor: 'bg-white',
      tab: tabClassName,
      //  panel: 'py-0',
      // base: `${withHr ? 'border-b pb-2' : ''}`,
      tabContent: tabContentClassName,
      cursor: cursorClassName
    }}
    variant={variant}
    onSelectionChange={(index) => {
      void onSelectionChange(index)
    }}
    radius='full'
  >
    {items?.map(
      ({ title, content, visible = true }, index) =>
        visible && (
          <Tab key={title} title={title} className='px-0'>
            {content}
          </Tab>
        )
    )}
  </Tabs>
)

export default TabBar
