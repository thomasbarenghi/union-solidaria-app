import { TabBar } from '@/components'
import { profileTabItemsBuilder } from './profileTabItemsBuilder'
import { UserInterface } from '@/interfaces'

interface Props {
  user: UserInterface
  session: any
}

const Content = ({ user, session }: Props) => {
  const isCurrent = user?.username === session?.user.username
  const isOrg = user?.role === 'organization'
  const tabItems = profileTabItemsBuilder(isOrg, isCurrent, false, user)
  return (
    <section className='flex w-full flex-col gap-4 '>
      <TabBar
        variant='solid'
        items={tabItems}
        tabContentClassName='group-data-[selected=true]:text-white px-4 '
        cursorClassName='group-data-[selected=true]:bg-green-800 shadow-none '
        isLoading={false}
      />
    </section>
  )
}

export default Content
