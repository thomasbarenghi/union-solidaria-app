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
    <div className='mx-auto w-11/12'>
      <div className='mb-1 flex justify-around gap-10 bg-[#f2e9f2]  p-2 text-blue-500'>
        {content.map((cont, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={activeTab === i ? '  border-b-2 border-blue-500' : ' bg-[#f2e9f2]'}
          >
            {cont.title}
          </button>
        ))}
      </div>
      <div className='bg-[#f2e9f2]'>{content[activeTab].content}</div>
    </div>
  )
}

export default TabBar
