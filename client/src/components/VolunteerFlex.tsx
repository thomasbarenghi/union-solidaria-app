import { VolunteerItem } from '.'
import { InitiativeInterface, VolunteersInterface } from '@/interfaces'

interface PublicationFlexProps {
  volunteers: VolunteersInterface[]
  initiative: InitiativeInterface
}

const PublicationFlex = ({ volunteers, initiative }: PublicationFlexProps) => (
  <div className='flex flex-col gap-5'>
    {volunteers?.map((item: VolunteersInterface, index) => <VolunteerItem key={index} item={item} initiative={initiative} />)}
  </div>
)

export default PublicationFlex
