import { ReviewItem } from '@/components'
import Skeleton from './Skeleton'
import Placeholder from './Placeholder'
import { ReviewInterface } from '@/interfaces/review.interface'

interface Props {
  reviews: ReviewInterface[]
  isError?: boolean
  isLoading?: boolean
  isCurrent?: boolean
}

const ReviewGrid = ({ reviews, isLoading = false, isCurrent = false, isError = false }: Props) => (
  <div className='grid grid-cols-1 gap-5 lg:grid-cols-3  lg:gap-y-9 '>
    {isLoading && <Skeleton />}
    {!isLoading && (reviews?.length < 1 || reviews === undefined) ? (
      <Placeholder isCurrent={isCurrent} isError={isError} />
    ) : (
      reviews?.map((item: ReviewInterface, index: number) => <ReviewItem item={item} key={item._id} />)
    )}
  </div>
)

export default ReviewGrid
