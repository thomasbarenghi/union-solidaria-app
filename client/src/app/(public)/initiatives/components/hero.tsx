import { Hero } from '@/components'

const HeroSection = () => (
  <Hero imageSrc='https://images.unsplash.com/photo-1522600579804-c66aa476298e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'>
    <div className='flex w-full flex-col items-center justify-between gap-4 lg:flex-row'>
      <h1 className='titulo-2 w-full   text-center font-light text-white lg:text-start'>
        Encuentra la iniciativa que sea <b className='font-semibold'>ideal para ti</b>
      </h1>
    </div>
  </Hero>
)

export default HeroSection
