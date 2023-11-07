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
      <div className='flex items-center justify-center gap-3 rounded-full bg-white p-2'>
        <Image src='/google.png' alt='Google' width={15} height={15} className='aspect-square h-4 w-4' />
        <p className='text-sm font-semibold'>Continuar con Google </p>
      </div>
    </button>
  )
}

export default GoogleButton
