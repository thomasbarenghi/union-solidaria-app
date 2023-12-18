'use client'
import { UserInterface } from '@/interfaces'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { ItemNavInterface, itemsNavBuilder } from './lib/itemsNav'

interface Props {
  user: UserInterface
}

const Menu = ({ user }: Props) => {
  const items: ItemNavInterface[] = itemsNavBuilder(user)
  const dangerStyle = 'text-red-800 hover:!bg-red-50 hover:text-red-800'
  return (
    <div className='flex w-full flex-col'>
      {items.map((item, index) => (
        <Link
          href={item.href}
          className={`w-full rounded-xl p-2 hover:bg-slate-100 ${item.color === 'danger' ? dangerStyle : ''}`}
          key={index}
        >
          {item.label}
        </Link>
      ))}
      <button
        onClick={async () => {
          void signOut({ callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
        }}
        className={`w-full rounded-xl bg-white p-2 text-start font-semibold hover:bg-slate-100 ${dangerStyle}`}
      >
        Cerrar sesión
      </button>
    </div>
  )
}

export default Menu
