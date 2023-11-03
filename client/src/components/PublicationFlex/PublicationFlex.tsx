import { PostInterface } from '@/interfaces/post.interface'
import { PublicationItem } from '..'
import FlexSkeleton from './Skeleton'
import Placeholder from './Placeholder'

interface PublicationFlexProps {
  posts: PostInterface[]
  isLoading?: boolean
  isError?: boolean
}

const PublicationFlex = ({ posts, isLoading = false, isError = false }: PublicationFlexProps) => (
  <div className='flex flex-col gap-5 w-full'>
    {isLoading && <FlexSkeleton />}
    {!isLoading && (posts?.length < 1 || posts === undefined) ? (
      <Placeholder isError={isError} />
    ) : (
      posts?.map((item: PostInterface) => <PublicationItem key={item?._id} item={item} />)
    )}
  </div>
)

export default PublicationFlex
