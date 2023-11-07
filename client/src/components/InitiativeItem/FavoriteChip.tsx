'use client'
import useSWR from 'swr'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import Image from 'next/image'
import { InitiativeInterface } from '@/interfaces'
import { useSession } from 'next-auth/react'

interface Props {
  initiative: InitiativeInterface
}

const FavoriteChip = ({ initiative }: Props) => {
  const { data: session, status } = useSession()
  const { data: loggedUser } = useSWR(Endpoints.USER_BY_ID(session?.user?.id ?? ''))
  const { data: currentUser, mutate } = useSWR(Endpoints.USER_BY_ID(loggedUser?.username))
  const isFavorite = currentUser?.favorites?.some((favorite: InitiativeInterface) => favorite._id === initiative._id)

  const handleFavorite = async () => {
    try {
      await putRequest(
        Endpoints.MODIFY_FAVORITE(loggedUser._id),
        {
          initiativeId: initiative._id
        },
        {
          headers: {
            sessionId: session?.token.sessionId
          }
        }
      )
      await mutate()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {status === 'authenticated' && (
        <button
          className='absolute right-1 top-1 z-10 aspect-square rounded-2xl bg-white p-4'
          onClick={() => {
            void handleFavorite()
          }}
        >
          <Image
            src={isFavorite === true ? '/icon/heart-filled.svg' : '/icon/heart.svg'}
            alt='heart icon'
            width={24}
            height={24}
            className='cursor-pointer'
          />
        </button>
      )}
    </>
  )
}

export default FavoriteChip
