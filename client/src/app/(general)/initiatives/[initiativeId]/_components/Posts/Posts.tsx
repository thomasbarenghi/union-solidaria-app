'use client'
import useSWR from 'swr'
import { PublicationFlex } from '@/components'
import { InitiativeInterface, PostInterface } from '@/interfaces'
import Sidebar from './Sidebar'
import Endpoints from '@/utils/constants/endpoints.const'

interface Props {
  data: InitiativeInterface
}

const PostSection = ({ data }: Props) => {
  const { data: initiative } = useSWR(Endpoints.INITIATIVES_BY_ID(data._id), {
    fallbackData: data
  })
  return (
    <div className='flex flex-col-reverse gap-6 lg:flex-row'>
      <PublicationFlex
        posts={initiative?.posts.sort(
          (a: PostInterface, b: PostInterface) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )}
      />
      <Sidebar data={data} />
    </div>
  )
}

export default PostSection
