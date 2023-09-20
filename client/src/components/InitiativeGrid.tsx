import { InitiativeItem } from '@/components'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  initiatives: InitiativeInterface[]
}

const InitiativeGrid = ({ initiatives }: Props) => (
  <div className='grid grid-cols-2 gap-5 lg:grid-cols-3  lg:gap-y-9 xl:grid-cols-4'>
    {initiatives?.map((item: InitiativeInterface, index) => <InitiativeItem item={item} key={index} />)}
  </div>
)

export default InitiativeGrid
