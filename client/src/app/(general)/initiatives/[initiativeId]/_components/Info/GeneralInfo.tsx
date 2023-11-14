import { TextElement } from '@/components'
import { InitiativeInterface } from '@/interfaces'

const InitiativeGeneralInfo = ({ currentInitiative }: { currentInitiative: InitiativeInterface }) => (
  <div className='flex flex-col gap-2'>
    <TextElement type='t3' as='h1' className='!font-semibold'>
      Descripcion
    </TextElement>
    <div className='flex flex-col gap-2'>
      <TextElement type='base' as='p'>
        {currentInitiative?.description}
      </TextElement>
    </div>
  </div>
)

export default InitiativeGeneralInfo
