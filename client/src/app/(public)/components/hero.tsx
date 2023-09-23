import { Hero } from '@/components'

const HeroSection = () => (
  <Hero imageSrc='https://images.unsplash.com/photo-1472087982327-49192446ed6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'>
    <div className='flex w-full flex-col items-start justify-between gap-4 lg:flex-row'>
      <h1 className='titulo-2 w-full   text-center font-light text-white lg:text-start'>
        Tu ayuda puede <b className='font-semibold'>hacer la diferencia.</b>
      </h1>
    </div>
  </Hero>
)

export default HeroSection
