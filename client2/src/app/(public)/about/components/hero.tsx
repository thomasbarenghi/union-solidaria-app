import { Hero } from '@/components'

const HeroSection = () => (
  <Hero
    imageSrc='https://images.unsplash.com/photo-1458847462994-d6e8043299f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
    gap='gap-1'
    height='min-h-[50vh]'
  >
    <>
      <h1 className='titulo-2 w-full text-center font-semibold text-white'>Sobre Union Solidaria ❤️</h1>
      <p className='bodyText w-full text-center text-white'>Juntos, somos mas</p>
    </>
  </Hero>
)

export default HeroSection