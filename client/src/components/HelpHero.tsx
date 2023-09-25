import { Hero, TextElement } from '@/components'

interface Props {
  imageSrc: string
  title: string
  description: string
}

const HelpHero = ({ imageSrc, title, description }: Props) => (
  <Hero imageSrc={imageSrc} height='min-h-[50vh]'>
    <div className='flex w-full flex-col  gap-1'>
      <TextElement type='t1' as='h1' className='w-full text-center !font-light text-white lg:text-start'>
        {title}
      </TextElement>
      <TextElement type='base' as='p' className='w-full text-center !font-light text-white lg:text-start'>
        {description}
      </TextElement>
    </div>
  </Hero>
)

export default HelpHero
