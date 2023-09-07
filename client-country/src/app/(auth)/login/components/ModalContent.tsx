import { volunteer, organization } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

function ModalContent() {
  return (
    <>
      <Link href='register'>
        <Image src={volunteer} alt='Volunteer image' />
        <p className='text-center text-lg font-semibold'>Voluntario/a</p>
      </Link>
      <Link href='/register'>
        <Image src={organization} alt='Organization image' />
        <p className='text-center text-lg font-semibold'>Organización</p>
      </Link>
    </>
  )
}

export default ModalContent
