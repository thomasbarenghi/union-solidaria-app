import { ValuePropositionItem, valueProposition } from '../lib/valueProposition'

interface Props {
  title: string
  description: string
  key: number
}

const ContentItem = ({ title, description, key }: Props) => (
  <div className='flex flex-col gap-1' key={key}>
    <h3 className='subtitulo font-semibold'>{title}</h3>
    <p className='textBody font-light'>{description}</p>
  </div>
)

const Marketing = () => (
  <section className='flex flex-col gap-10'>
    <h1 className='titulo-3 font-light'>
      Únete a nuestra <b className='font-semibold'> revolución de solidaridad</b>
    </h1>
    <div className='grid-layout-3'>
      {valueProposition.map((item: ValuePropositionItem, index) => (
        <ContentItem title={item.title} description={item.description} key={index} />
      ))}
    </div>
  </section>
)

export default Marketing
