import { InitiativeInterface } from '@/interfaces'

const OrganizationInfo = ({ currentInitiative }: { currentInitiative: InitiativeInterface }) => (
  <div className='flex flex-col gap-2'>
    <h1 className='titulo-3 w-full font-medium'>Organización</h1>
    <div className='flex flex-col gap-2'>
      <p className='bodyText font-light'>
        <b className='font-semibold'>{currentInitiative?.owner?.orgName}</b> es una organización sin fines de lucro.
      </p>
      <p className='bodyText font-light'>
        El responsable de esta organización es{' '}
        <b className='font-semibold'>
          {currentInitiative?.owner?.firstName} {currentInitiative?.owner?.lastName}
        </b>{' '}
      </p>
    </div>
  </div>
)

export default OrganizationInfo
