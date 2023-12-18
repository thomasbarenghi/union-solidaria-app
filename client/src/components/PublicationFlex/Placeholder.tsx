import { PublicationItemPlaceholder, TextElement } from '@/components'

interface Props {
  isCurrent?: boolean
  isError: boolean
}

const Placeholder = ({ isCurrent = false, isError }: Props) => (
  <>
    {isError ? (
      <PublicationItemPlaceholder />
    ) : (
      <div className='flex h-[200px] w-full flex-col items-center justify-center gap-1 border-[2px] border-dashed border-slate-200 p-5 lg:p-10'>
        <TextElement type='subtitle' as='h2' className='w-full text-center !font-semibold'>
          Aun no hay publicaciones por aqui
        </TextElement>
        <TextElement type='base' as='p' className='text-center'>
          {isCurrent
            ? 'Aún no has creado ninguna publicación para esta iniciativa'
            : 'Cuando la organización publique algo, aparecerá aquí'}
        </TextElement>
      </div>
    )}
    <PublicationItemPlaceholder />
    <PublicationItemPlaceholder />
    <PublicationItemPlaceholder />
  </>
)

export default Placeholder
