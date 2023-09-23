'use client'
import { useGetInitiativesByIdQuery } from '@/redux/services/initiatives.service'
interface Props {
  id: string
}

function InitiativesPage({ id }: Props) {
  const { data } = useGetInitiativesByIdQuery(id)
  return (
    <section>
      <h1 className='text-3xl font-semibold'>Iniciativa Individual</h1>
      <p>title: {data?.title}</p>
      <p>desc: {data?.description}</p>
    </section>
  )
}

export default InitiativesPage
