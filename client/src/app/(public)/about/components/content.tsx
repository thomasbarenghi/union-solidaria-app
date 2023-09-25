/* eslint-disable @typescript-eslint/indent */

import { TextElement } from '@/components'
import { missionAndVision, MissionAndVisionItem } from '../lib/missionAndVision'

interface ContentItemProps {
  title: string
  description: string
}

const ContentItem = ({ title, description }: ContentItemProps) => (
  <div className='flex flex-col gap-1'>
    <TextElement type='subtitle' as='h3' className='!font-semibold'>
      {title}
    </TextElement>
    <TextElement type='base' as='p'>
      {description}
    </TextElement>
  </div>
)

const MissionVisionSection = () => (
  <section className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
    {missionAndVision.map((item: MissionAndVisionItem, index) => (
      <ContentItem title={item.title} key={index} description={item.description} />
    ))}
  </section>
)

export default MissionVisionSection
