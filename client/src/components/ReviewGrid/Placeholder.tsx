import { ReviewItemPlaceholder, TextElement } from '@/components'

interface Props {
  isError: boolean
  isCurrent?: boolean
}

const Placeholder = ({ isCurrent = false, isError }: Props) => (
  <>
    {isError ? (
      <ReviewItemPlaceholder />
    ) : (
      <div className='flex min-h-[200px] w-full flex-col items-center justify-center gap-1 border-[2px] border-dashed border-slate-200 p-10 lg:aspect-[4/3] lg:min-h-0'>
        <TextElement type='subtitle' as='h2' className='w-full text-center !font-semibold'>
          Aun no se han publicado reseñas
        </TextElement>
        <TextElement type='base' as='p' className='text-center'>
          {isCurrent ? '¿Que esperas para unirte a la comunidad?' : 'Y tu, ¿ya te uniste a la comunidad?'}
        </TextElement>
      </div>
    )}

    <ReviewItemPlaceholder />
    <ReviewItemPlaceholder />
  </>
)

export default Placeholder
