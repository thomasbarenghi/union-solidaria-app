'use client'
import { DropdownTopIcon } from '@/components'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  title: React.ReactNode
  content: React.ReactNode
}

function AccordionItem({ title, content }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [ref] = useAutoAnimate()

  const toggleOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  const classes = {
    item: clsx('cursor-pointer text-sm text-black'),
    title: clsx('flex items-center justify-between gap-x-8 border-b border-solid border-black px-4 py-2'),
    content: clsx('bg-pink-100 p-4'),
    icon: clsx('fill-current transition-transform duration-300', isOpen && '-rotate-180')
  }

  return (
    <li ref={ref} className={classes.item}>
      <div onClick={toggleOpen} className={classes.title}>
        {title} <DropdownTopIcon className={classes.icon} />
      </div>
      {isOpen && <p className={classes.content}>{content}</p>}
    </li>
  )
}

export default AccordionItem
