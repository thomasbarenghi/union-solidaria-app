import InitiativeDateInfo from './DateInfo'
import OrganizationInfo from './OrgInfo'
import InitiativeGeneralInfo from './GeneralInfo'
import Skeleton from './Skeleton'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  data: InitiativeInterface
  isLoading: boolean
}

const InfoSection = ({ data, isLoading }: Props) => {
  if (isLoading) return <Skeleton />
  return (
    <div className='flex flex-col gap-6'>
      <OrganizationInfo currentInitiative={data} />
      <InitiativeGeneralInfo currentInitiative={data} />
      <InitiativeDateInfo currentInitiative={data} />
    </div>
  )
}

export default InfoSection
