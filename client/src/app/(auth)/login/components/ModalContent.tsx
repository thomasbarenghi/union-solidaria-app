import Image from 'next/image'
import Link from 'next/link'

function ModalContent() {
  return (
    <>
      <Link href='register'>
        <Image src='/assets/volunteer' alt='Volunteer image' width={100} height={100} />
        <p className='text-center text-lg font-semibold'>Voluntario/a</p>
      </Link>
      <Link href='/register'>
        <Image src='/assets/organization' alt='Organization image' width={100} height={100} />
        <p className='text-center text-lg font-semibold'>Organización</p>
      </Link>
    </>
  )
}

export default ModalContent
