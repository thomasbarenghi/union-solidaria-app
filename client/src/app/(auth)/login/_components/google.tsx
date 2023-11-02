import { signIn } from 'next-auth/react'
import Image from 'next/image'

const GoogleButton = () => {
  const a = 5
  console.log(a)

  return (
    <button
      className='text-base-medium flex w-full  items-center justify-center gap-2 rounded-full border px-8 py-2 text-black'
      onClick={() => {
        void signIn('google', { callbackUrl: 'http://localhost:3000' })
      }}
    >
      <div className='rounded-full bg-white p-2'>
        <Image src='/google.png' alt='Google' width={15} height={15} className='aspect-square' />
      </div>
    </button>
  )
}

export default GoogleButton
