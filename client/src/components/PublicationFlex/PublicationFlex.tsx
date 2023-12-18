import { PostInterface } from '@/interfaces/post.interface'
import { PublicationItem } from '..'
import Placeholder from './Placeholder'
import FlexSkeleton from './Skeleton'

interface PublicationFlexProps {
  posts: PostInterface[]
  isLoading?: boolean
  isError?: boolean
  isCurrent?: boolean
}

const PublicationFlex = ({ posts, isLoading = false, isError = false, isCurrent }: PublicationFlexProps) => (
  <div className='flex w-full flex-col gap-5'>
    {isLoading && <FlexSkeleton />}
    {!isLoading && (posts?.length < 1 || posts === undefined) ? (
      <Placeholder isError={isError} isCurrent={isCurrent} />
    ) : (
      posts?.map((item: PostInterface) => <PublicationItem key={item?._id} item={item} />)
    )}
  </div>
)

export default PublicationFlex
