import Image from 'next/image'
import Link from 'next/link'

interface PublicationProps {
  avatar: string
  organitationName: string
  title: string
  publicationImg: string
  description: string
  timeElapsed: string
}

const PublicationCard = ({
  avatar,
  organitationName,
  title,
  publicationImg,
  description,
  timeElapsed
}: PublicationProps) => {
  return (
    <div className='max-w-2xl overflow-hidden rounded-xl bg-gray-100 px-4 py-4 shadow'>
      <div className='flex items-center px-3 py-3'>
        <div className='block sm:inline-flex'>
          <div className='flex items-center justify-center'>
            <Image className='rounded-full ' src={avatar} width={40} height={40} alt='Avatar' />
            <Link href='#' className='mx-2 inline-flex text-lg font-bold text-blue-500 '>
              {organitationName}
            </Link>
          </div>
          <div className='inline-flex items-center justify-start gap-1'>
            <span className='text-xs font-normal leading-none text-black'>en</span>
          </div>
          <span className=' mx-1 inline-flex items-center text-center text-sm font-bold leading-none text-blue-500 '>
            {title}
          </span>
        </div>
      </div>
      <Image
        className='mx-auto h-64 w-full rounded-md object-cover'
        src={publicationImg}
        alt='publication-images'
        width={300}
        height={200}
      />
      <div className='inline-flex items-center justify-center p-6'>
        <div className='text-base font-normal leading-none'>
          <p className='mt-2 text-black'>{description}</p>
        </div>
      </div>

      <div className='inline-flex items-end justify-end'>
        <div className='text-right text-xs font-semibold leading-[14px] text-black'>Hace 4 horas</div>
      </div>
    </div>
  )
}

export default PublicationCard
