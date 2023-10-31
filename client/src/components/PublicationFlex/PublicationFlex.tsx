import { PostInterface } from '@/interfaces/post.interface'
import { PublicationItem } from '..'
import FlexSkeleton from './Skeleton'
import EmptySkeleton from './EmptySkeleton'

interface PublicationFlexProps {
  posts: PostInterface[]
  isLoading: boolean
}

const PublicationFlex = ({ posts, isLoading }: PublicationFlexProps) => (
  <div className='flex flex-col gap-5 w-full'>
    {isLoading && <FlexSkeleton />}
    {!isLoading && (posts?.length < 1 || posts === undefined) ? (
      <EmptySkeleton />
    ) : (
      posts?.map((item: PostInterface) => <PublicationItem key={item?._id} item={item} />)
    )}
  </div>
)

export default PublicationFlex
