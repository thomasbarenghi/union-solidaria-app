'use client'
import { InitiativeInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { Button } from '@nextui-org/react'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { toast } from 'sonner'
import useSWR from 'swr'

interface Props {
  initiative: InitiativeInterface
}

const FavoriteChip = ({ initiative }: Props) => {
  const { data: session, status } = useSession()
  const {
    data: { favorites },
    mutate
  } = useSWR(Endpoints.USER_BY_ID(session?.user?.username ?? ''))
  const [isLoading, setIsLoading] = useState(false)
  const isFavorite = favorites?.some((favorite: InitiativeInterface) => favorite._id === initiative._id)

  const handleFavorite = async () => {
    setIsLoading(true)
    try {
      await putRequest(
        Endpoints.MODIFY_FAVORITE((session as Session).user.id),
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
      toast.error('Ocurrió un error inesperado. Por favor inténtelo luego.')
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {status === 'authenticated' && (
        <Button
          className='absolute right-1 top-1 z-10 bg-opacity-100 text-red-500'
          variant='solid'
          isIconOnly
          isLoading={isLoading}
          onClick={() => {
            void handleFavorite()
          }}
        >
          <svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill={isFavorite ? 'red' : 'none'}
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
              stroke='red'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
      )}
    </>
  )
}

export default FavoriteChip
