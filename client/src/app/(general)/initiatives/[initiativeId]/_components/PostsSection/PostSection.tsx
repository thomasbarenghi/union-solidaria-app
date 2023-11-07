import { PublicationFlex } from '@/components'
import { InitiativeInterface } from '@/interfaces'
import Sidebar from './Sidebar'

interface Props {
  data: InitiativeInterface
}

const PostSection = ({ data }: Props) => (
  <div className='flex gap-6 lg:flex-row flex-col-reverse'>
    <PublicationFlex posts={data?.posts} />
    <Sidebar data={data} />
  </div>
)

export default PostSection
