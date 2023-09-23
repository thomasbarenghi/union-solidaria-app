'use client'
import { InitiativeGrid } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'
import { Skeleton } from '@nextui-org/react'
import Endpoints from '@/utils/constants/endpoints.const'
import Routes from '@/utils/constants/routes.const'
import Link from 'next/link'
import useSWR from 'swr'

const Content = ({ username }: { username: string }) => {
  const { data: currentActiveUser, isLoading } = useSWR(Endpoints.USER_BY_ID(username))
  const { data: initiatives, isLoading: isLoadingInitiatives } = useSWR(Endpoints.INITIATIVES)
  const currentUser = useAppSelector(currentUserSelector)
  const isCurrent = currentActiveUser?.user?.username === currentUser?.username
  const isOrg = currentActiveUser?.user?.role === 'organization'

  return (
    <section className='flex w-full flex-col gap-6 '>
      <div className='flex items-center justify-between'>
        <Skeleton className='rounded-full' isLoaded={!isLoading}>
          <p className='titulo-3 semibold'>
            {isCurrent
              ? isOrg
                ? 'Mis iniciativas organizadas'
                : 'Mis iniciativas'
              : isOrg
                ? 'Iniciativas de la organización'
                : 'Iniciativas en las que participa'}
          </p>
        </Skeleton>
        <Skeleton isLoaded={!isLoading} className='rounded-full'>
          {isCurrent && isOrg && (
            <button className='primaryButton relative'>
              <Link href={Routes.CREATE_INITIATIVE}>Crear nueva iniciativa</Link>
            </button>
          )}
        </Skeleton>
      </div>
      <InitiativeGrid initiatives={initiatives?.slice(0, 4)} isLoading={isLoadingInitiatives} />
    </section>
  )
}

export default Content
