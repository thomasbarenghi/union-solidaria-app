import { VolunteerItem } from '..'
import { InitiativeInterface, VolunteersInterface } from '@/interfaces'
import EmptySkeleton from './EmptySkeleton'
import FlexSkeleton from './Skeleton'

interface PublicationFlexProps {
  volunteers: VolunteersInterface[]
  initiative: InitiativeInterface
  isLoading: boolean
}

const PublicationFlex = ({ volunteers, initiative, isLoading }: PublicationFlexProps) => (
  <div className='flex flex-col gap-5'>
    {isLoading && <FlexSkeleton />}
    {!isLoading && (volunteers?.length < 1 || volunteers === undefined) ? (
      <EmptySkeleton />
    ) : (
      volunteers?.map((item: VolunteersInterface, index) => (
        <VolunteerItem key={index} item={item} initiative={initiative} />
      ))
    )}
  </div>
)

export default PublicationFlex
