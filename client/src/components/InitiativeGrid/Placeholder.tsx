import { InitiativeItemPlaceholder, TextElement } from '@/components'

interface Props {
  isCurrent?: boolean
  isError?: boolean
}

const Placeholder = ({ isCurrent = false, isError = false }: Props) => (
  <>
    {isError ? (
      <InitiativeItemPlaceholder />
    ) : (
      <div className='flex aspect-square h-full w-full flex-col items-center justify-center gap-1 border-[2px] border-dashed border-slate-200 p-3 lg:p-10'>
        <TextElement type='subtitle' as='h2' className='w-full text-center !text-base !font-semibold md:!text-lg'>
          Aun no hay iniciativas por aqui
        </TextElement>
        <TextElement type='base' as='p' className='text-center !text-sm md:!text-base'>
          {isCurrent ? '¿Que esperas para unirte a la comunidad?' : 'Y tu, ¿ya te uniste a la comunidad?'}
        </TextElement>
      </div>
    )}
    <InitiativeItemPlaceholder />
    <InitiativeItemPlaceholder />
    <InitiativeItemPlaceholder />
  </>
)

export default Placeholder
