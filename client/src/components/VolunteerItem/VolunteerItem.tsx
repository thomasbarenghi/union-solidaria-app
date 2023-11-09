'use client'
import { User, Chip } from '@nextui-org/react'
import Routes from '@/utils/constants/routes.const'
import Link from 'next/link'
import { InitiativeInterface, VolunteersInterface } from '@/interfaces'
import { Button } from '..'
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
  const chipType = item.status === 'pending' ? 'warning' : item.status === 'accepted' ? 'success' : 'danger'
  const chipText = item.status === 'pending' ? 'Pendiente' : item.status === 'accepted' ? 'Aceptado' : 'Rechazado'

  const handleSubscription = async (status: 'pending' | 'accepted' | 'rejected') => {
    try {
      await putRequest(Endpoints.UPDATE_SUBSCRIPTION(initiative._id), {
        userId: item.user._id,
        status
      })
      await mutate(Endpoints.INITIATIVES_BY_ID(initiative._id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='relative flex w-full cursor-pointer  flex-col items-center justify-between gap-3 rounded-2xl border border-solid border-slate-200 p-6 sm:flex-row'>
      <div className='flex w-full flex-col items-start justify-start gap-4 sm:flex-row sm:items-center'>
        <User
          name={firstName + ' ' + lastName}
          description={<Link href={Routes.PROFILE(username)}>{username}</Link>}
          avatarProps={{
            src: profileImage
          }}
        />
        <div>
          <Chip color={chipType}>{chipText}</Chip>
        </div>
      </div>
      <div className='flex w-full justify-start sm:justify-end'>
        {item.status === 'pending' && (
          <div className='flex gap-1'>
            <Button
              title='Aceptar'
              color='success'
              variant='solid'
              size='sm'
              onClick={() => {
                void handleSubscription('accepted')
              }}
            />
            <Button
              title='Rechazar'
              color='danger'
              variant='flat'
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
              variant='flat'
              size='sm'
              onClick={() => {
                void handleSubscription('rejected')
              }}
            />
          </div>
        )}
        {item.status === 'rejected' && (
          <div>
            <Button
              title='Aceptar'
              color='success'
              variant='solid'
              size='sm'
              onClick={() => {
                void handleSubscription('accepted')
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default VolunteerItem
