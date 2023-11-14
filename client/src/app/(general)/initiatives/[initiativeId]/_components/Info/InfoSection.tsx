import InitiativeDateInfo from './DateInfo'
import OrganizationInfo from './OrgInfo'
import InitiativeGeneralInfo from './GeneralInfo'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  data: InitiativeInterface
}

const InfoSection = ({ data }: Props) => (
  <div className='flex flex-col gap-6 overflow-hidden text-ellipsis'>
    <OrganizationInfo currentInitiative={data} />
    <InitiativeGeneralInfo currentInitiative={data} />
    <InitiativeDateInfo currentInitiative={data} />
  </div>
)

export default InfoSection
