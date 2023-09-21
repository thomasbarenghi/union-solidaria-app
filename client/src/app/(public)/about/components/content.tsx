import { missionAndVision, MissionAndVisionItem } from '../lib/missionAndVision'

interface ContentItemProps {
  title: string
  description: string
  key: number
}

const ContentItem = ({ title, description, key }: ContentItemProps) => (
  <div className='flex flex-col gap-1' key={key}>
    <h3 className='subtitulo font-semibold'>{title}</h3>
    <p className='textBody font-light'>{description}</p>
  </div>
)

const MissionVisionSection = () => (
  <section className='grid-layout-3'>
    {missionAndVision.map((item: MissionAndVisionItem, index) => (
      <ContentItem title={item.title} key={index} description={item.description} />
    ))}
  </section>
)

export default MissionVisionSection
