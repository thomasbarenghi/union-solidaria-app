import { InitiativeGrid, TextElement } from '@/components'
import { InitiativeInterface } from '@/interfaces'

interface InitiativesSectionProps {
  initiatives: InitiativeInterface[]
  isError: boolean
}

const Initiatives = ({ initiatives, isError }: InitiativesSectionProps) => (
  <section className='flex w-full flex-col gap-6 2xl:container'>
    <TextElement type='t2' as='h1' className=' w-full font-light'>
      Iniciativas <b className='font-semibold'>destacadas</b>
    </TextElement>
    <InitiativeGrid
      initiatives={Array.isArray(initiatives) ? initiatives?.slice(0, 4) : []}
      isLoading={false}
      isError={isError}
    />
  </section>
)

export default Initiatives
