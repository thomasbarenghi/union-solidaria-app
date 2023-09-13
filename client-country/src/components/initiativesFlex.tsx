import type { InitiativeInterface } from '@/interfaces'
import { InitiativeItem } from '.'

interface Props {
  initiatives: InitiativeInterface[]
}

function InitiativesFlex({ initiatives }: Props) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4'>
      {initiatives?.map((item, index) => <InitiativeItem key={index} initiative={item} />)}
    </div>
  )
}

export default InitiativesFlex
