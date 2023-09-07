import { DonationIcon, EditProfileIcon, ErrorIcon, LogoutIcon, NominationIcon, NotificationIcon } from '@/components'
import Link from 'next/link'

function ConfigOptions() {
  return (
    <>
      <ul className='text-lg text-blue-700'>
        <li>
          <Link href='#' className='flex items-center gap-x-3 px-3 py-4'>
            <EditProfileIcon className='fill-blue-700' /> Editar Perfil
          </Link>
        </li>
        <li>
          <Link href='#' className='flex items-center gap-x-3 px-3 py-4'>
            <NominationIcon className='fill-blue-700' /> Mis postulaciones
          </Link>
        </li>
        <li>
          <Link href='#' className='flex items-center gap-x-3 px-3 py-4'>
            <DonationIcon className='fill-blue-700' /> Mis donaciones
          </Link>
        </li>
        <li>
          <Link href='#' className='flex items-center gap-x-3 px-3 py-4'>
            <NotificationIcon className='fill-blue-700' /> Notificaciones
          </Link>
        </li>
        <li className='mx-auto my-5 h-[1px] w-48 bg-gray-500' />
      </ul>
      <div className='mt-auto text-lg text-blue-700'>
        <button className='flex items-center gap-x-3 px-3 py-4'>
          <LogoutIcon className='fill-blue-700' /> Cerrar sesión
        </button>
        <div className='mx-auto my-5 h-[1px] w-48 bg-gray-500' />
        <button className='flex items-center gap-x-3 px-3 py-4 uppercase text-red-500'>
          <ErrorIcon className='fill-red-500' />
          Eliminar cuenta
        </button>
      </div>
    </>
  )
}

export default ConfigOptions
