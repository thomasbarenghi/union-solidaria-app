import { Hero, TextElement } from '@/components'

const HeroSection = () => (
  <Hero
    imageSrc='https://images.unsplash.com/photo-1458847462994-d6e8043299f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    gap='gap-1'
    height='min-h-[50vh]'
  >
    <div className='flex w-full flex-col justify-center text-center'>
      <TextElement type='t2' as='h1' className='text-white'>
        Sobre Union Solidaria ❤️
      </TextElement>
      <TextElement type='base' as='p' className='text-white'>
        Juntos, somos mas
      </TextElement>
    </div>
  </Hero>
)

export default HeroSection
