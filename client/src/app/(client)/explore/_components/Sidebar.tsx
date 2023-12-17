import { Button, TextElement } from '@/components'
import { InitiativeInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'
import { User } from '@nextui-org/react'

interface SidebarProps {
  initiatives: InitiativeInterface[]
}

const Sidebar = ({ initiatives }: SidebarProps) => (
  <div className='flex h-max min-w-[300px] flex-col items-start gap-4 rounded-2xl border border-solid border-slate-200 p-6 '>
    <TextElement type='small' as='p' className='font-semibold'>
      Mis iniciativas
    </TextElement>
    <div className='flex flex-col gap-1'>
      {initiatives?.map((initiative: InitiativeInterface) => (
        <User
          key={initiative?._id}
          classNames={{
            name: ' !text-sm !leading-[155%] font-medium',
            base: 'flex gap-3 items-center justify-start cursor-pointer'
          }}
          name={initiative?.title}
          description={initiative?.country + ', ' + initiative?.province}
          avatarProps={{
            src: initiative?.thumbnail,
            className: 'aspect-square h-[45px] w-[45px]'
          }}
        />
      ))}
    </div>
    <Button title='Ver mas' variant='flat' href={Routes.INITIATIVES} size='sm' className='bg-white' />
  </div>
)

export default Sidebar
