import { InitiativeItemPlaceholder } from '@/components'

const EmptySkeleton = ({ isCurrent = false }: { isCurrent?: boolean }) => (
  <>
    <div className='flex aspect-square w-full flex-col items-center justify-center gap-1 border-[2px] border-dashed border-slate-200 p-10'>
      <h2 className='subtitulo text-center font-semibold'>Aun no hay iniciativas por aqui</h2>
      <p className='bodyText text-center'>
        {isCurrent ? '¿Que esperas para unirte a la comunidad?' : 'Y tu, ¿ya te uniste a la comunidad?'}
      </p>
    </div>
    <InitiativeItemPlaceholder />
    <InitiativeItemPlaceholder />
    <InitiativeItemPlaceholder />
  </>
)

export default EmptySkeleton
