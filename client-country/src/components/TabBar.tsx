'use client'
import { useState } from 'react'

interface TabContentItem {
  title: string
  content: JSX.Element
}

interface TabProps {
  content: TabContentItem[]
}

function TabBar({ content }: TabProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='mx-auto w-11/12 md:max-w-5xl'>
      <div className='mb-1 flex justify-around gap-10 bg-[#f2e9f2]   text-blue-500'>
        {content.map((cont, i) => (
          <div
            key={i}
            className={
              activeTab === i ? '  h-full border-b-3 border-blue-500 pb-2 pt-2' : ' h-full bg-[#f2e9f2] pb-2 pt-2 '
            }
          >
            <button onClick={() => setActiveTab(i)}>{cont.title}</button>
          </div>
        ))}
      </div>
      <div className='bg-[#f2e9f2]'>{content[activeTab].content}</div>
    </div>
  )
}

export default TabBar
