'use client'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'
import { itemsNavBuilder, ItemNavInterface } from './lib/itemsNav'
import clsx from 'clsx'
import NextLink from 'next/link'

const Menu = () => {
  const currentUser = useAppSelector(currentUserSelector)
  const items: ItemNavInterface[] = itemsNavBuilder(currentUser)
  const dangerStyle = clsx('text-red-800', 'hover:bg-red-100', 'hover:text-red-800')
  return (
    <div className='flex w-full flex-col'>
      {items.map((item, index) => (
        <NextLink
          href={item.href}
          className={`w-full rounded-xl p-2 hover:bg-slate-100 ${item.color === 'danger' ? dangerStyle : ''}`}
          key={index}
        >
          {item.label}
        </NextLink>
      ))}
    </div>
  )
}

export default Menu
