'use client'
import { VolunteerFlex } from '@/components'
import { InitiativeInterface } from '@/interfaces'
import Endpoints from '@/utils/constants/endpoints.const'
import useSWR from 'swr'

interface Props {
  data: InitiativeInterface
}

const VolunteersSection = ({ data }: Props) => {
  const { data: initiative } = useSWR(Endpoints.INITIATIVES_BY_ID(data._id), {
    fallbackData: data
  })
  return (
    <div className='flex flex-col gap-6'>
      <VolunteerFlex volunteers={initiative?.volunteers} initiative={data} />
    </div>
  )
}

export default VolunteersSection
