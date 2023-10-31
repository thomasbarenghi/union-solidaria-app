import { TextElement } from '@/components'
import { InitiativeInterface } from '@/interfaces'

interface SidebarProps {
  initiatives: InitiativeInterface[]
  activeInitiativeId: string
  setActiveInitiativeId: (id: string) => void
}

const Sidebar = ({ initiatives, activeInitiativeId, setActiveInitiativeId }: SidebarProps) => {
  const activeClass = '!font-semibold'
  return (
    <div className='flex h-max min-w-[300px] flex-col gap-3 rounded-2xl border border-solid border-slate-200 p-6 '>
      <div className='flex flex-col gap-1'>
        <TextElement type='small' as='p' className='font-semibold'>
          Publicaciones
        </TextElement>
        <hr />
      </div>
      <div className='flex flex-col gap-1'>
        <div onClick={() => setActiveInitiativeId('')}>
          <TextElement type='small' as='p' className={`cursor-pointer ${activeInitiativeId === '' ? activeClass : ''}`}>
            Todas
          </TextElement>
        </div>
        {initiatives?.map((initiative: InitiativeInterface) => (
          <div key={initiative._id} onClick={() => setActiveInitiativeId(initiative._id)}>
            <TextElement
              type='small'
              as='p'
              className={`cursor-pointer ${activeInitiativeId === initiative._id ? activeClass : ''}`}
            >
              {initiative.title}
            </TextElement>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
