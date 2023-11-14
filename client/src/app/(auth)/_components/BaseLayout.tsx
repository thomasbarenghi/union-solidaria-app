import { TextElement } from '@/components'
import Image from 'next/image'

interface AuthBaseProps {
  children: React.ReactNode
  image: string
}

const AuthBase = ({ children, image }: AuthBaseProps) => (
  <section className='section-padding-x-1 relative flex flex-col items-center justify-center bg-red-800  '>
    <div className='z-10 grid min-h-screen w-full grid-cols-1 items-center justify-center py-4 pt-[95px]  2xl:container lg:grid-cols-2 lg:pt-4'>
      <div className='hidden items-end justify-center lg:flex'>
        <TextElement type='t1' as='p' className=' py-10 text-white'>
          Juntos podemos <br /> <span className='font-bold'>hacer la diferencia.</span>{' '}
        </TextElement>
      </div>
      <div className='grid h-full w-full  items-center justify-center'>
        <div className='flex  max-w-[360px] flex-col items-center justify-center rounded-[15px] bg-white p-7 sm:w-[360px] md:max-h-[600px] md:p-7 lg:p-14  '>
          <div className='h-full w-full'>{children}</div>
        </div>
      </div>
    </div>
    <div className='absolute bottom-0 left-0 right-0 top-0 z-[0]  bg-emerald-200 '>
      <div className='absolute left-0 top-0 z-[1] h-full w-full bg-[#0000007e]' />
      <Image src={image} alt='bg' fill className='object-cover' />
    </div>
  </section>
)

export default AuthBase
