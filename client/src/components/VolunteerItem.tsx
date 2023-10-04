'use client'
import { User } from '@nextui-org/react'
import Routes from '@/utils/constants/routes.const'
import Link from 'next/link'
import { InitiativeInterface, VolunteersInterface } from '@/interfaces'
import { Button } from '.'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { useSWRConfig } from 'swr'

interface PublicationItemProps {
  item: VolunteersInterface
  initiative: InitiativeInterface
}

const VolunteerItem = ({ item, initiative }: PublicationItemProps) => {
  const { firstName, lastName, profileImage, username } = item.user
  const { mutate } = useSWRConfig()

  const handleSubscription = async (status: 'pending' | 'accepted' | 'rejected') => {
    try {
      await putRequest(Endpoints.UPDATE_SUBSCRIPTION, {
        userId: item.user._id,
        initiativeId: initiative._id,
        status
      })
      await mutate(Endpoints.INITIATIVES_BY_ID(initiative._id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='relative flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border border-solid border-slate-200 p-6'>
      <div className='flex items-center gap-4'>
        <User
          name={firstName + ' ' + lastName}
          description={<Link href={Routes.PROFILE(username)}>{username}</Link>}
          avatarProps={{
            src: profileImage
          }}
        />
        <div>
          <span className='text-sm font-semibold text-slate-600'>{item.status}</span>
        </div>
      </div>
      <div>
        {item.status === 'pending' && (
          <div>
            <Button
              title='Aceptar'
              color='success'
              variant='light'
              size='sm'
              onClick={() => {
                void handleSubscription('accepted')
              }}
            />
            <Button
              title='Rechazar'
              color='danger'
              variant='light'
              size='sm'
              onClick={() => {
                void handleSubscription('rejected')
              }}
            />
          </div>
        )}
        {item.status === 'accepted' && (
          <div>
            <Button
              title='Expulsar'
              color='danger'
              variant='light'
              size='sm'
              onClick={() => {
                void handleSubscription('rejected')
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default VolunteerItem
