import { TextElement } from '@/components'
import Image from 'next/image'

interface AuthBaseProps {
  children: React.ReactNode
  image: string
}

const AuthBase = ({ children, image }: AuthBaseProps) => (
  <section className='flex flex-col items-center justify-center  '>
    <div className='grid min-h-screen w-full grid-cols-[auto,60%]'>
      <div className='flex flex-col items-center justify-center  px-[40px]  '>
        <div className='w-[75%] '>{children}</div>
      </div>
      <div className='relative h-full w-full overflow-hidden  bg-emerald-200 '>
        <div className='absolute left-0 top-0 z-[1] flex h-full w-full items-end justify-start bg-[#00000069] p-10 '>
          <TextElement type='t3' as='p' className=' text-white'>
            Juntos podemos <br /> <span className='font-semibold'>hacer la diferencia.</span>{' '}
          </TextElement>
        </div>
        <Image src={image} alt='bg' fill className='object-cover' />
      </div>
    </div>
  </section>
)

export default AuthBase
