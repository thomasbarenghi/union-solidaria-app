import { InitiativeItem } from '@/components'
import { InitiativeInterface } from '@/interfaces'
import Skeleton from './skeleton'

interface Props {
  initiatives: InitiativeInterface[]
  isLoading?: boolean
}

const InitiativeGrid = ({ initiatives, isLoading = false }: Props) => (
  <div className='grid grid-cols-2 gap-5 lg:grid-cols-3  lg:gap-y-9 xl:grid-cols-4'>
    {isLoading ? (
      <Skeleton />
    ) : (
      initiatives?.map((item: InitiativeInterface, index) => <InitiativeItem item={item} key={index} />)
    )}
  </div>
)

export default InitiativeGrid
