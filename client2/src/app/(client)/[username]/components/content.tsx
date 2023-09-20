'use client'
import { InitiativeGrid } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { initiativesSelector } from '@/redux/selectors/initiatives'
import { currentUserSelector } from '@/redux/selectors/users'
import { fetcher } from '@/services/fetcher.service'
import Endpoints from '@/utils/constants/endpoints.const'
import Routes from '@/utils/constants/routes.const'
import Link from 'next/link'
import useSWR from 'swr'

const Content = ({ username }: { username: string }) => {
  const { data: currentActiveUser } = useSWR(Endpoints.USER_BY_ID(username), fetcher)
  const currentUser = useAppSelector(currentUserSelector)
  const isCurrent = currentActiveUser?.user.username === currentUser?.username
  const isOrg = currentActiveUser?.user.role === 'organization'
  const initiatives = useAppSelector(initiativesSelector)

  return (
    <section className='flex w-full flex-col gap-6 '>
      <div>
        {isCurrent && isOrg && (
          <div className='flex justify-between items-center'>
            <p className='titulo-3 semibold'>Mis iniciativas organizadas</p>
            <Link className='primaryButton' href={Routes.CREATE_INITIATIVE}>
              Crear nueva iniciativa
            </Link>
          </div>
        )}
        {isCurrent && !isOrg && <p className='titulo-3 semibold'>Mis iniciativas</p>}
        {!isCurrent && !isOrg && (
          <p className='titulo-3 semibold'>
            Iniciativas en las <span className='font-semibold'>que participa</span>
          </p>
        )}
        {!isCurrent && !isOrg && (
          <p className='titulo-3 semibold'>
            Iniciativas de <span className='font-semibold'>la organizacion</span>
          </p>
        )}
      </div>
      <InitiativeGrid initiatives={initiatives.slice(0, 4)} />
    </section>
  )
}

export default Content
