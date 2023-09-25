import { Hero, TextElement } from '@/components'

const HeroSection = () => (
  <Hero imageSrc='https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=100'>
    <div className='flex w-full flex-col items-center justify-between gap-4 lg:flex-row'>
      <TextElement type='t1' as='h1' className='w-full text-center !font-light text-white lg:text-start'>
        Encuentra la iniciativa que sea <b className='font-semibold'>ideal para ti</b>
      </TextElement>
    </div>
  </Hero>
)

export default HeroSection
