'use client'
import useSWR from 'swr'
import Endpoints from '@/utils/constants/endpoints.const'
import InitiativeDateInfo from './DateInfo'
import OrganizationInfo from './OrgInfo'
import InitiativeGeneralInfo from './GeneralInfo'
import Skeleton from './Skeleton'

const Content = ({ id }: { id: string }) => {
  const { data, isLoading } = useSWR(Endpoints.INITIATIVES_BY_ID(id))
  if (isLoading) return <Skeleton />
  return (
    <section className='flex flex-col gap-6 lg:gap-10'>
      <OrganizationInfo currentInitiative={data} />
      <InitiativeGeneralInfo currentInitiative={data} />
      <InitiativeDateInfo currentInitiative={data} />
    </section>
  )
}

export default Content
