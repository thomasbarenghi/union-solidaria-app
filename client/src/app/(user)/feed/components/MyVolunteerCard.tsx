import Image from 'next/image'

interface VolunteerProps {
  title: string
  nameOrganitation: string
  imgVolunteer: string
}

const MyVolunteerCard = ({ title, nameOrganitation, imgVolunteer }: VolunteerProps) => {
  return (
    <div className='mr-8 h-[200px] w-[148px] flex-none rounded-2xl border bg-gray-100 shadow-md  sm:h-[276px] sm:w-[314px] md:pb-4 '>
      <div className='aspect-w-16 aspect-h-9 flex items-center justify-center'>
        <Image
          className='flex self-stretch rounded-xl px-4 py-4'
          width={274}
          height={140}
          src={imgVolunteer}
          alt='img-my-voluteers'
        />
      </div>
      <div className='px-4 py-2 sm:py-5'>
        <div className='space-y-1'>
          <h3 className='text-base font-semibold leading-tight text-black'>{title}</h3>
        </div>
        <div className='text-xs font-normal leading-[14px] text-pink-500'>
          <p>{nameOrganitation}</p>
        </div>
      </div>
    </div>
  )
}

export default MyVolunteerCard
