import Image from 'next/image'
import { UserInterface } from '../../../../interfaces/user.interface'
import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'

function BasicUserInfo({
  id,
  firstName,
  lastName,
  birthday,
  phone,
  email,
  role,
  password,
  bannerImage,
  username,
  profileImage,
  orgName
}: UserInterface) {
  const fechaActual = new Date()
  const añoActual = fechaActual.getFullYear()
  const birthdayYear = Number(birthday?.split('-')[0])

  const userAge = birthdayYear ? añoActual - birthdayYear : ''
  return (
    <section className='flex flex-col items-center justify-between gap-7'>
      <div className='mx-auto my-0 grid max-w-md grid-cols-[1fr_2fr] items-center gap-x-3 px-5'>
        <div className='relative row-start-1 row-end-4 h-[100px] w-[100px] justify-self-center rounded-full  bg-gray-800'>
          {profileImage && <Image src={profileImage} fill alt='user image' className='rounded-full' />}
        </div>
        <h1 className='break-all text-2xl font-semibold text-pink-600'>
          {firstName} {lastName}
        </h1>
        <p>{userAge} Años</p>
        <p> villa Gesell, Argentina</p>
      </div>
      {role === 'organization' && (
        <Link className='rounded-full bg-blue-600 px-7 py-3 text-white' href={Routes.CREATE_INITIATIVE}>
          Crear iniciativa
        </Link>
      )}
    </section>
  )
}

export default BasicUserInfo
