import { TextElement } from '@/components'
import { missionVision, MissionAndVisionItem } from '../_lib/missionVision.lib'

interface ContentItemProps {
  title: string
  description: string
}

const ContentItem = ({ title, description }: ContentItemProps) => (
  <div className='flex flex-col gap-1'>
    <TextElement type='t3' as='h3' className='!font-semibold'>
      {title}
    </TextElement>
    <TextElement type='base' as='p'>
      {description}
    </TextElement>
  </div>
)

const MissionVision = () => (
  <section className='flex flex-col items-center justify-center gap-10 2xl:container'>
    <div className='flex w-full flex-col items-center gap-1 text-center'>
      <TextElement type='t1' as='h2' className='!font-semibold'>
        Misión y Visión
      </TextElement>
      <TextElement type='base' as='p'>
        Estamos comprometidos con la construcción de un mundo más justo y equitativo
        <br /> a través de la acción voluntaria.
      </TextElement>
    </div>
    <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
      {missionVision.map((item: MissionAndVisionItem, index) => (
        <ContentItem title={item.title} key={index} description={item.description} />
      ))}
    </div>
  </section>
)

export default MissionVision
