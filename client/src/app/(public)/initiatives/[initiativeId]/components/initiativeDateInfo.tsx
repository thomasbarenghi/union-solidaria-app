import { InitiativeInterface } from '@/interfaces'
import { formatDate } from '@/utils/functions/formatDate.utils'
import Image from 'next/image'

interface Props {
  icon: string
  text: string
  title: string
}

const DateInfoItem = ({ icon, text, title }: Props) => (
  <div className='flex gap-2'>
    <Image src={icon} width={24} height={24} alt='Vercel Logo' />
    <p className='bodyText font-light'>
      <span className='font-medium'>{title}:</span> {text}
    </p>
  </div>
)

const InitiativeDateInfo = ({ currentInitiative }: { currentInitiative: InitiativeInterface }) => {
  const startDate = formatDate(currentInitiative?.startDate)
  const endDate = formatDate(currentInitiative?.endDate)
  const date = `${startDate} - ${endDate}`

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='titulo-3 w-full font-medium'>Información</h1>
      <div className='flex flex-col gap-4'>
        <DateInfoItem
          icon='/icon/clock.svg'
          text={formatDate(currentInitiative?.deadLine)}
          title='Fecha limite de inscripción'
        />
        <DateInfoItem icon='/icon/calendar.svg' text={date} title='Vigencia' />
        <DateInfoItem icon='/icon/location.svg' text={currentInitiative?.address} title='Lugar de encuentro' />
        <DateInfoItem icon='/icon/info.svg' text={currentInitiative?.extraInfo} title='Información extra' />
      </div>
    </div>
  )
}

export default InitiativeDateInfo
