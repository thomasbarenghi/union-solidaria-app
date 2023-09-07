import Image from 'next/image'

interface VolunteerProps {
  title: string
  nameOrganitation: string
  imgVolunteer: string
}

const MyVolunteerCard = ({ title, nameOrganitation, imgVolunteer }: VolunteerProps) => {
  return (
    <div className='mr-8 w-2/3 flex-none rounded-2xl border bg-gray-100 shadow-md md:w-1/3 md:pb-4'>
      <div className='aspect-w-16 aspect-h-9'>
        <Image
          className='rounded-lg object-cover  px-4 py-4'
          width={200}
          height={100}
          src={imgVolunteer}
          alt='img-my-voluteers'
        />
      </div>
      <div className='px-5 py-5'>
        <div className='space-y-1'>
          <h3 className='mb-2 text-base font-semibold leading-tight text-black'>{title}</h3>
        </div>
        <div className='text-xs font-normal leading-[14px] text-pink-500'>
          <p>{nameOrganitation}</p>
        </div>
      </div>
    </div>
  )
}

export default MyVolunteerCard
