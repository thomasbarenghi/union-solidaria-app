import { TextElement } from '@/components'
import Image from 'next/image'

interface AuthBaseProps {
  children: React.ReactNode
  image: string
}

const AuthBase = ({ children, image }: AuthBaseProps) => (
  <section className='flex flex-col items-center justify-center  '>
    <div className=' section-padding-x-1 z-10 grid min-h-screen w-full grid-cols-1 py-4 2xl:container lg:grid-cols-[auto_400px] lg:pr-0 2xl:pl-0'>
      <div className='hidden items-end justify-start lg:flex'>
        <TextElement type='t3' as='p' className=' py-10 text-white'>
          Juntos podemos <br /> <span className='font-semibold'>hacer la diferencia.</span>{' '}
        </TextElement>
      </div>
      <div className=' mb-[80px] mt-[80px] flex w-full flex-col items-center justify-center rounded-[20px] bg-white px-[40px] py-10 lg:mx-4 lg:mb-0  lg:mt-0 lg:w-auto  '>
        <div className='h-full w-full'>{children}</div>
      </div>
    </div>
    <div className=' absolute left-0 top-0 z-[0] h-screen w-screen overflow-hidden  bg-emerald-200 '>
      <div className='absolute left-0 top-0 z-[1] h-screen w-screen bg-[#0000007e]' />
      <Image src={image} alt='bg' fill className='object-cover' />
    </div>
  </section>
)

export default AuthBase
