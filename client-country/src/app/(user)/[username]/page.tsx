import store from '@/redux/store'
import { currentUsersApi } from '@/redux/services/users.service'
import Volunteer from './components/volunteer'
import Organization from './components/organization'

async function getUser(username: string) {
  const userRequest = currentUsersApi.endpoints.getUsersByUsername.initiate(username)
  const { data } = await store.dispatch(userRequest)
  return data.user
}

interface Props {
  params: { username: string }
}

export default async function Page({ params }: Props) {
  const user = await getUser(params.username)
  return (
    <div className='flex min-h-screen w-screen flex-col'>
      {user.role === 'volunteer' ? <Volunteer user={user} /> : <Organization user={user} />}
    </div>
  )
}
