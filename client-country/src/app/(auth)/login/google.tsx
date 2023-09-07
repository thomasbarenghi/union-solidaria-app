'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function GoogleButton() {
  const router = useRouter()

  const loginRedirect = () => {
    const googleURLRedirect = new URL('/auth/google', process.env.NEXT_PUBLIC_SERVER_URL)
    router.push(googleURLRedirect.href)
  }

  return (
    <button
      className='text-base-medium flex w-full  items-center justify-center gap-2 rounded-full border px-8 py-2 text-black'
      style={{ background: '#fff' }}
      onClick={loginRedirect}
    >
      <div className='rounded-full bg-white p-2'>
        <Image src='/google.png' alt='Google' width={15} height={15} className='aspect-square' />
      </div>
    </button>
  )
}
