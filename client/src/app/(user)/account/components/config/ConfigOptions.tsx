'use client'
import { EditProfileIcon, ErrorIcon, LogoutIcon, NominationIcon } from '@/components'
import Routes from '@/utils/constants/routes.const'
import Link from 'next/link'
import { useDeleteUsersMutation } from '@/redux/services/users.service'
import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'

function ConfigOptions() {
  const router = useRouter()
  const [deleteUser] = useDeleteUsersMutation()
  const currentUser = useAppSelector((state) => state.authSession.session)

  const handleDeleteAccount = async () => {
    try {
      await deleteUser(currentUser).unwrap()
      router.push(Routes.LOGOUT)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ul className='text-lg w-full text-blue-700'>
        <li>
          <Link href={Routes.ACCOUNT} className='flex items-center gap-x-3 px-3 py-4'>
            <EditProfileIcon className='fill-blue-700' /> Editar Perfil
          </Link>
        </li>
        <li>
          <Link href={Routes.PROFILE(currentUser.username)} className='flex items-start whitespace-nowrap gap-x-3 px-3 py-4'>
            <NominationIcon className='fill-blue-700' /> Mis postulaciones
          </Link>
        </li>
        {/* <li>
          <Link href='#' className='flex items-center gap-x-3 px-3 py-4'>
            <DonationIcon className='fill-blue-700' /> Mis donaciones
          </Link>
        </li> */}
        {/* <li>
          <Link href='#' className='flex items-center gap-x-3 px-3 py-4'>
            <NotificationIcon className='fill-blue-700' /> Notificaciones
          </Link>
        </li> */}
        <li className='mx-auto my-5 h-[1px] w-full bg-gray-500' />
      </ul>
      <div className='mt-auto text-lg text-blue-700'>
        <Link className='flex items-center gap-x-3 px-3 py-4' href={Routes.LOGOUT}>
          <LogoutIcon className='fill-blue-700' /> Cerrar sesión
        </Link>
        <div className='mx-auto my-5 h-[1px] w-full bg-gray-500' />
        <button className='flex items-center gap-x-3 whitespace-nowrap px-3 py-4 uppercase text-red-500' onClick={handleDeleteAccount}>
          <ErrorIcon className='fill-red-500' />
          Eliminar cuenta
        </button>
      </div>
    </>
  )
}

export default ConfigOptions
