import Endpoints from '@/utils/constants/endpoints.const'
import { serverUrl } from '@/utils/constants/env.const'
import Image from 'next/image'

export default function GoogleButton() {
  return (
    <a
      className='text-base-medium flex w-full  items-center justify-center gap-2 rounded-full border px-8 py-2 text-black'
      href={`${serverUrl}${Endpoints.GOOGLE_LOGIN}`}
    >
      <div className='rounded-full bg-white p-2'>
        <Image src='/google.png' alt='Google' width={15} height={15} className='aspect-square' />
      </div>
    </a>
  )
}
