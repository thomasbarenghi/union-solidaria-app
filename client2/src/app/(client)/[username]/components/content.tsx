'use client'
import { InitiativeGrid } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { initiativesSelector } from '@/redux/selectors/initiatives'
import { currentActiveUserSelector, currentUserSelector } from '@/redux/selectors/users'

const Content = () => {
  const currentActiveUser = useAppSelector(currentActiveUserSelector)
  const currentUser = useAppSelector(currentUserSelector)
  const isCurrent = currentActiveUser?.username === currentUser?.username
  const isOrg = currentActiveUser?.role === 'organization'
  const initiatives = useAppSelector(initiativesSelector)

  return (
    <section className='flex w-full flex-col gap-6 bg-white '>
      {/* <Tabs content={tabsContent} /> */}
      <h1 className='titulo-3 w-full font-light'>
        {isCurrent ? (
          'Mis iniciativas'
        ) : isOrg ? (
          <>
            Iniciativas de <span className='font-semibold'>la organizacion</span>
          </>
        ) : (
          <>
            Iniciativas en las <span className='font-semibold'>que participa</span>
          </>
        )}
      </h1>
      <InitiativeGrid initiatives={initiatives.slice(0, 4)} />
    </section>
  )
}

export default Content
