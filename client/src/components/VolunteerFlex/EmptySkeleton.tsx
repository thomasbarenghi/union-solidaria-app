import { VolunteerItemPlaceholder, TextElement } from '@/components'

const EmptySkeleton = ({ isCurrent = false }: { isCurrent?: boolean }) => (
  <>
    <div className='flex h-[100px] w-full flex-col items-center justify-center gap-1 border-[2px] border-dashed border-slate-200 p-5 lg:p-10'>
      <TextElement type='subtitle' as='h2' className='w-full text-center !font-semibold'>
        Aun no se anotó nadie
      </TextElement>
      <TextElement type='base' as='p' className='text-center'>
        Cuando alguien se anote, aparecerá aquí
      </TextElement>
    </div>
    <VolunteerItemPlaceholder />
    <VolunteerItemPlaceholder />
    <VolunteerItemPlaceholder />
  </>
)

export default EmptySkeleton
