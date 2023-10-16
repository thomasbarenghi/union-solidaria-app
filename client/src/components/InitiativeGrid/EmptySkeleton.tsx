import { InitiativeItemPlaceholder, TextElement } from '@/components'

const EmptySkeleton = ({ isCurrent = false }: { isCurrent?: boolean }) => (
  <>
    <div className='flex aspect-square w-full flex-col items-center justify-center gap-1 border-[2px] border-dashed border-slate-200 p-5 h-full lg:p-10'>
      <TextElement type='subtitle' as='h2' className='w-full text-center !font-semibold'>
        Aun no hay iniciativas por aqui
      </TextElement>
      <TextElement type='base' as='p' className='text-center'>
        {isCurrent ? '¿Que esperas para unirte a la comunidad?' : 'Y tu, ¿ya te uniste a la comunidad?'}
      </TextElement>
    </div>
    <InitiativeItemPlaceholder />
    <InitiativeItemPlaceholder />
    <InitiativeItemPlaceholder />
  </>
)

export default EmptySkeleton
