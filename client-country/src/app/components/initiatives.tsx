'use client'
import { ButtonLink, Heading, InitiativesFlex } from '@/components'
import { useGetInitiativesQuery } from '@/redux/services/initiatives.service'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'

function InitiativesSec() {
  const { data } = useGetInitiativesQuery()

  return (
    <div className='grid gap-4'>
      <div className='flex items-center justify-between'>
        <Heading as='h2'>Iniciativas destacadas</Heading>
        <ButtonLink
          href={Routes.INITIATIVES}
          iconRight={<Image src='/icon/arrow-right.svg' className='h-3 w-2' width={8} height={12} alt='arrow-right' />}
        >
          ver todas
        </ButtonLink>
      </div>
      <InitiativesFlex initiatives={data || []} />
    </div>
  )
}

export default InitiativesSec
