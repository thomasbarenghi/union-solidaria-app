import { TextElement } from '@/components'
import { InitiativeInterface } from '@/interfaces'

const OrganizationInfo = ({ currentInitiative }: { currentInitiative: InitiativeInterface }) => (
  <div className='flex flex-col gap-2'>
    <TextElement type='t3' as='h1'>
      Organización
    </TextElement>
    <div className='flex flex-col gap-2'>
      <TextElement type='base' as='p'>
        <b className='font-semibold'>{currentInitiative?.owner?.orgName}</b> es una organización sin fines de lucro.
      </TextElement>
      <TextElement type='base' as='p'>
        El responsable de esta organización es{' '}
        <b className='font-semibold'>
          {currentInitiative?.owner?.firstName} {currentInitiative?.owner?.lastName}
        </b>{' '}
      </TextElement>
    </div>
  </div>
)

export default OrganizationInfo
