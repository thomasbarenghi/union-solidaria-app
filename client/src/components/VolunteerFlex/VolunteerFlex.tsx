import { VolunteerItem } from '..'
import { InitiativeInterface, VolunteersInterface } from '@/interfaces'
import Placeholder from './Placeholder'
import FlexSkeleton from './Skeleton'

interface PublicationFlexProps {
  volunteers: VolunteersInterface[]
  initiative: InitiativeInterface
  isLoading?: boolean
  isError?: boolean
}

const VolunteerFlex = ({ volunteers, initiative, isLoading = false, isError = false }: PublicationFlexProps) => (
  <div className='flex flex-col gap-5'>
    {isLoading && <FlexSkeleton />}
    {!isLoading && (volunteers?.length < 1 || volunteers === undefined) ? (
      <Placeholder isError={isError} />
    ) : (
      volunteers?.map((item: VolunteersInterface, index) => (
        <VolunteerItem key={index} item={item} initiative={initiative} />
      ))
    )}
  </div>
)

export default VolunteerFlex
