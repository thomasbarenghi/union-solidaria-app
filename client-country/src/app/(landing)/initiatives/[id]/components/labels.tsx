import { Pill, KiteIcon, LocationIcon, StarIcon, CategoryIcon } from '@/components'

interface Props {
  labels: {
    location: string
    rate: number
    topic: string
    opportunity: string
  }
}

type LabelsKeys = keyof Props['labels']

export default function Labels(props: Props) {
  const { labels } = props
  const labelIcons: Record<LabelsKeys, JSX.Element> = {
    topic: <KiteIcon color='white' height={12} />,
    location: <LocationIcon color='white' height={12} />,
    rate: <StarIcon color='white' height={12} />,
    opportunity: <CategoryIcon color='white' height={12} />
  }

  return (
    <section className='mb-6 flex flex-wrap gap-[4px]'>
      {Object.keys(labelIcons).map((key, index) => (
        <Pill
          key={index}
          bgColor='pink'
          icon={labelIcons[key as LabelsKeys]}
          title={labels[key as LabelsKeys].toString()}
        />
      ))}
    </section>
  )
}
