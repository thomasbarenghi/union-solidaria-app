'use client'
import { InitiativesFlex, TabBar } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { currentActiveUserSelector, currentUserSelector } from '@/redux/selectors/users'
import { useGetInitiativesQuery } from '@/redux/services/initiatives.service'
import { useGetUsersByUsernameQuery } from '@/redux/services/users.service'
import BasicUserInfo from './BasicUserInfo'

interface Props {
  name: string
}

export default function Content({ name }: Props) {
  const { data } = useGetInitiativesQuery()
  console.log(data?.filter)

  const TabContentItem = [
    { title: 'Iniciativas', content: <InitiativesFlex initiatives={data || []} /> },
    { title: 'Certificados', content: <span className='px-10 text-lg text-gray-600'>En desarrollo...</span> },
    { title: 'Reseñas', content: <span className='px-10 text-lg text-gray-600'>En desarrollo...</span> }
  ]

  const username = name.slice(3)
  useGetUsersByUsernameQuery(username)
  const currentActiveUser = useAppSelector(currentActiveUserSelector)
  const currentUser = useAppSelector(currentUserSelector)

  return (
    <section className='flex min-h-[100vh] w-full flex-col gap-6 bg-white py-16 pt-20'>
      {username === currentUser.username ? (
        <BasicUserInfo
          orgName={currentUser.orgName}
          firstName={currentUser.firstName}
          lastName={currentUser.lastName}
          id={currentUser.id}
          phone={currentUser.phone}
          email={currentUser.email}
          role={currentUser.role}
          profileImage={currentUser.profileImage}
          password={currentUser.password}
          username={currentUser.username}
          birthday={currentUser.birthday}
        />
      ) : (
        <BasicUserInfo
          orgName={currentUser.orgName}
          firstName={currentActiveUser.firstName}
          lastName={currentActiveUser.lastName}
          id={currentActiveUser.id}
          phone={currentActiveUser.phone}
          email={currentActiveUser.email}
          role={currentActiveUser.role}
          profileImage={currentActiveUser.profileImage}
          password={currentActiveUser.password}
          username={currentActiveUser.username}
          birthday={currentActiveUser.birthday}
        />
      )}
      <TabBar content={TabContentItem} />
    </section>
  )
}
