import { TextElement } from '@/components'

import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'

const SubscribeContent = () => (
  <div className='flex flex-col gap-1'>
    <TextElement type='base' as='p'>
      Recuerda que inscribirse a una iniciativa es un compromiso, por lo que debes estar seguro de poder cumplirlo. Si
      no puedes cumplirlo, puedes cancelar tu inscripción en cualquier momento.
    </TextElement>
    <TextElement type='base' as='p'>
      Una vez que te inscribas, el dueño de la iniciativa podra aceptar o rechazar tu solicitud.
    </TextElement>
    <TextElement type='base' as='p' className='!font-medium'>
      Al inscribirte aceptas los <Link href={Routes.LEGAL}>términos y condiciones</Link> de la plataforma.
    </TextElement>
  </div>
)

export default SubscribeContent
