import { TextElement } from '@/components'
import { ValuePropositionItem, valueProposition } from '../lib/valueProposition'

interface Props {
  title: string
  description: string
}

const ContentItem = ({ title, description }: Props) => (
  <div className='flex flex-col gap-1'>
    <TextElement type='subtitle' as='h3' className='w-full font-semibold'>
      {title}
    </TextElement>
    <TextElement type='base' as='p' className='w-full font-light'>
      {description}
    </TextElement>
  </div>
)

const Marketing = () => (
  <section className='flex flex-col gap-10'>
    <TextElement type='t3' as='h1' className=' w-full font-light'>
      Únete a nuestra <b className='font-semibold'> revolución de solidaridad</b>
    </TextElement>
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
      {valueProposition.map((item: ValuePropositionItem, index) => (
        <ContentItem title={item.title} description={item.description} key={index} />
      ))}
    </div>
  </section>
)

export default Marketing
