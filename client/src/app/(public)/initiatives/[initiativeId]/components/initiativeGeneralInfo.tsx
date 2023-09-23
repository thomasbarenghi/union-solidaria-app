import { InitiativeInterface } from '@/interfaces'

const InitiativeGeneralInfo = ({ currentInitiative }: { currentInitiative: InitiativeInterface }) => (
  <div className='flex flex-col gap-2'>
    <h1 className='titulo-3 w-full font-medium'>Descripcion</h1>
    <div className='flex flex-col gap-2'>
      <p className='bodyText font-light'>{currentInitiative?.description}</p>
    </div>
  </div>
)

export default InitiativeGeneralInfo
