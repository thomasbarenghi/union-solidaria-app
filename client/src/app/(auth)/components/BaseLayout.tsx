import { TextElement } from '@/components'
import Image from 'next/image'

interface AuthBaseProps {
  children: React.ReactNode
  image: string
}

const AuthBase = ({ children, image }: AuthBaseProps) => (
  <section className='flex flex-col items-center justify-center  '>
    <div className=' section-padding-x-1 pr-0 2xl:pl-0 grid min-h-screen w-full z-10 grid-cols-[auto_400px] 2xl:container'>
      <div className='flex items-end justify-start'>
        <TextElement type='t3' as='p' className=' text-white py-10'>
          Juntos podemos <br /> <span className='font-semibold'>hacer la diferencia.</span>{' '}
        </TextElement>
      </div>
      <div className=' m-4 flex flex-col items-center justify-center rounded-[20px] bg-white  px-[40px] py-10  '>
        <div className='w-full h-full'>{children}</div>
      </div>
    </div>
    <div className=' absolute left-0 top-0 z-[0] h-screen w-screen overflow-hidden  bg-emerald-200 '>
      <div className='absolute left-0 top-0 z-[1] h-screen w-screen bg-[#0000007e]' />
      <Image src={image} alt='bg' fill className='object-cover' />
    </div>
  </section>
)

export default AuthBase
