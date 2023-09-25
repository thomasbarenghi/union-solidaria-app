'use client'
import useSWR from 'swr'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector, currentAuthSelector } from '@/redux/selectors/users'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import Image from 'next/image'
import { InitiativeInterface } from '@/interfaces'

interface Props {
  initiative: InitiativeInterface
}

const FavoriteChip = ({ initiative }: Props) => {
  const loggedUser = useAppSelector(loggedUserSelector)
  const auth = useAppSelector(currentAuthSelector)
  const { data: currentUser, mutate } = useSWR(Endpoints.USER_BY_ID(loggedUser.username))
  const isFavorite = currentUser?.favorites?.some((favorite: InitiativeInterface) => favorite._id === initiative._id)

  const handleFavorite = async () => {
    try {
      await putRequest(Endpoints.MODIFY_FAVORITE, {
        userId: loggedUser._id,
        initiativeId: initiative._id
      })
      await mutate()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {auth.isLogged && (
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
