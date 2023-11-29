'use client'
import { PublicationFlex } from '@/components'
import { InitiativeInterface, PostInterface } from '@/interfaces'
import Endpoints from '@/utils/constants/endpoints.const'
import useSWR from 'swr'
import Sidebar from './Sidebar'

interface Props {
  data: InitiativeInterface
  isCurrent: boolean
}

const PostSection = ({ data, isCurrent }: Props) => {
  const { data: initiative } = useSWR(Endpoints.INITIATIVES_BY_ID(data._id), {
    fallbackData: data
  })
  return (
    <div className='flex flex-col-reverse gap-6 lg:flex-row'>
      <PublicationFlex
        isCurrent={isCurrent}
        posts={initiative?.posts.sort(
          (a: PostInterface, b: PostInterface) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )}
      />
      <Sidebar data={data} />
    </div>
  )
}

export default PostSection
