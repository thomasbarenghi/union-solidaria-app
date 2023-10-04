import { PublicationFlex } from '@/components'
import { InitiativeInterface } from '@/interfaces'
import Sidebar from './Sidebar'

interface Props {
  data: InitiativeInterface
  isLoading: boolean
}

const PostSection = ({ data, isLoading }: Props) => (
  <div className='flex gap-6'>
    <PublicationFlex posts={data?.posts} />
    <Sidebar data={data} isLoading={isLoading} />
  </div>
)

export default PostSection
