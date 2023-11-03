import { VolunteerFlex } from '@/components'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  data: InitiativeInterface
}

const VolunteersSection = ({ data }: Props) => (
  <div className='flex flex-col gap-6'>
    <VolunteerFlex volunteers={data?.volunteers} initiative={data} />
  </div>
)

export default VolunteersSection
