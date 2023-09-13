import type { Metadata } from 'next'
import { Cover, Description, InitiativeInfo, Labels, Photos, Publications, Volunteers } from './components'
import { initiativesApi } from '@/redux/services/initiatives.service'
import store from '@/redux/store'
import Review from './components/review'

export const metadata: Metadata = {
  title: 'Iniciativa Individual',
  description: '...',
  themeColor: '#000000'
}

interface Props {
  params: {
    id: string
  }
}

async function getInitiative(username: string) {
  const initiativeRequest = initiativesApi.endpoints.getInitiativesById.initiate(username)
  try {
    const { data } = await store.dispatch(initiativeRequest)
    return data
  } catch (error) {
    console.error(error)
  }
}

async function InitiativeDetailPage(props: Props) {
  const { params } = props
  const pandaImg =
    'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
  const ostrich =
    'https://images.unsplash.com/photo-1682687220945-922198770e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

  const initiative = await getInitiative(params.id)
  if (initiative === undefined) {
    return (
      <div>
        <h3>La Iniciativa no existe</h3>
      </div>
    )
  }

  const {
    title,
    owner,
    extraInfo,
    postsId,
    country,
    province,
    themes,
    opportunities,
    startDate,
    endDate,
    thumbnail,
    description,
    adress
  } = initiative

  return (
    <div className='flex w-full flex-col py-7'>
      <Cover title={title} owner={owner.orgName as string} coverPhoto={thumbnail} />
      <Labels
        labels={{
          location: `${province}, ${country}`,
          rate: 4.5,
          topic: themes[0],
          opportunity: opportunities[0]
        }}
      />
      <Description description={description} />
      <InitiativeInfo
        info={{
          date: new Date(startDate),
          desc: extraInfo,
          location: adress,
          time: `${new Date(startDate).getDate()} a ${new Date(endDate).getDate()}`
        }}
      />
      <Photos imgUrls={[pandaImg, ostrich, pandaImg, ostrich, pandaImg]} />
      <Volunteers imgUrls={[pandaImg, ostrich, pandaImg, ostrich, pandaImg, ostrich, pandaImg, ostrich, pandaImg]} />
      <Publications postsId={postsId} />
      <Review />
    </div>
  )
}

export default InitiativeDetailPage
