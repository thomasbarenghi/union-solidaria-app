import { InitiativeItem } from '@/components'
import { InitiativeInterface } from '@/interfaces'
import Skeleton from './Skeleton'
import Placeholder from './Placeholder'

interface Props {
  initiatives: InitiativeInterface[]
  isError?: boolean
  isLoading?: boolean
  isCurrent?: boolean
}

const InitiativeGrid = ({ initiatives, isLoading = false, isCurrent = false, isError = false }: Props) => (
  <div className='grid grid-cols-2 gap-5 lg:grid-cols-3  lg:gap-y-9 xl:grid-cols-4'>
    {isLoading && <Skeleton />}
    {!isLoading && (initiatives?.length < 1 || initiatives === undefined) ? (
      <Placeholder isCurrent={isCurrent} isError={isError} />
    ) : (
      initiatives?.map((item: InitiativeInterface, index: number) => <InitiativeItem item={item} key={item._id} />)
    )}
  </div>
)

export default InitiativeGrid
