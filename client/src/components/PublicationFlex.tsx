import { PostInterface } from '@/interfaces/post.interface'
import { PublicationItem } from '.'

interface PublicationFlexProps {
  posts: PostInterface[]
}

const PublicationFlex = ({ posts }: PublicationFlexProps) => (
  <div className='flex flex-col gap-5'>
    {posts?.map((item: PostInterface) => <PublicationItem key={item?._id} item={item} />)}
  </div>
)

export default PublicationFlex
