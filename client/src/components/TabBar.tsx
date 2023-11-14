'use client'
import { Tabs, Tab, Skeleton } from '@nextui-org/react'
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
  tabClassName?: string
  tabContentClassName?: string
  cursorClassName?: string
  selectedKey?: Key
  isLoading?: boolean
  isError?: boolean
}

const TabBar = ({
  items,
  variant,
  onSelectionChange = (index: Key) => {},
  tabClassName,
  tabContentClassName = 'p-4',
  cursorClassName,
  isLoading = false,
  isError,
  selectedKey
}: TabBarProps) => {
  const Tag = isError ? 'div' : Skeleton
  return (
    <>
      {isLoading || isError ? (
        <>
          <div className='flex gap-2'>
            <Tag className='h-[30px] w-[100px] rounded-full bg-gray-100' />
            <Tag className='h-[30px] w-[100px] rounded-full bg-gray-100' />
          </div>
          <div>{items[0].content}</div>
        </>
      ) : (
        <Tabs
          selectedKey={selectedKey}
          classNames={{
            tab: tabClassName,
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
      )}
    </>
  )
}

export default TabBar
