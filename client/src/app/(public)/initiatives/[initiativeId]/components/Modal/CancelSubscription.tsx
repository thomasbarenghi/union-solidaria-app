import { TextElement } from '@/components'

const CancelSubscription = () => (
  <div className='flex flex-col gap-1'>
    <TextElement type='base' as='p'>
      Estas a punto de cancelar tu suscripción a esta iniciativa. Puedes volver a inscribirte en cualquier momento
      mientras la iniciativa este activa.
    </TextElement>
  </div>
)

export default CancelSubscription
