import { Hero } from '@/components'

interface Props {
  imageSrc: string
  title: string
  description: string
}

const HelpHero = ({ imageSrc, title, description }: Props) => (
  <Hero imageSrc={imageSrc} height='min-h-[50vh]'>
    <div className='flex w-full flex-col  gap-1'>
      <h1 className='titulo-2   w-full text-start font-light text-white'>{title}</h1>
      <p className='bodyText   w-full text-start font-light text-white'>{description}</p>
    </div>
  </Hero>
)

export default HelpHero
