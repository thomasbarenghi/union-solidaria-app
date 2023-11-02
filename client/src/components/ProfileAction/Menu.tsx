'use client'
import { itemsNavBuilder, ItemNavInterface } from './lib/itemsNav'
import NextLink from 'next/link'
import { signOut } from 'next-auth/react'
import { UserInterface } from '@/interfaces'

interface Props {
  user: UserInterface
}

const Menu = ({ user }: Props) => {
  const items: ItemNavInterface[] = itemsNavBuilder(user)
  const dangerStyle = 'text-red-800 hover:!bg-red-50 hover:text-red-800'
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
      <button
        onClick={async () => {
          void signOut({ redirect: false })
        }}
        className={`w-full font-semibold rounded-xl bg-white p-2 text-start hover:bg-slate-100 ${dangerStyle}`}
      >
        Cerrar sesión
      </button>
    </div>
  )
}

export default Menu
