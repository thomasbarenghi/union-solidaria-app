import { LocationIcon, CalendarIcon, TimeIcon, InfoIcon } from '@/components'

interface Props {
  info: {
    desc: string
    // change date type to Date
    date: string
    time: string
    location: string
  }
}

type InfoKeys = keyof Props['info']

const InitiativeInfo = (props: Props) => {
  const { info } = props
  const infoIcons: Record<InfoKeys, JSX.Element> = {
    desc: <InfoIcon color='pink' height={16} />,
    date: <CalendarIcon color='pink' height={16} />,
    time: <TimeIcon color='pink' height={16} />,
    location: <LocationIcon color='pink' height={16} />
  }

  return (
    <section className='mb-6'>
      <h3 className='text-xl text-blue-600'>Información</h3>
      <div className='ml-7'>
        <ul>
          {Object.keys(infoIcons).map((key, index) => (
            <li key={index} className='flex items-center justify-start  gap-3'>
              <div className='w-4'>{infoIcons[key as InfoKeys]}</div>
              <p className='text-sm'>{info[key as InfoKeys]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default InitiativeInfo
