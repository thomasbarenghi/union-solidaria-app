import Image from 'next/image'
import { TeamMembers, TeamMember } from '../lib/team'
import { Button, TextElement } from '@/components'
import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'

const TeamItem = ({ name, position, image, linkedin }: TeamMember) => (
  <div className='flex flex-col gap-4'>
    <div className='relative aspect-[1/1] w-full min-w-[250px]'>
      <Image fill src={image} alt={name} className=' rounded-full object-cover' unoptimized />
    </div>
    <div className='flex flex-col gap-1'>
      <TextElement as='p' type='subtitle' className='text-center !font-semibold'>
        {name}
      </TextElement>
      <TextElement as='p' type='base' className='text-center'>
        {position}
      </TextElement>
      <Link href={linkedin}>
        <div className='mt-2 flex w-full justify-center gap-1'>
          <Image src='/icon/linkedin.svg' alt='linkedin' width={20} height={20} />
          <TextElement as='p' type='small' className='text-center !font-semibold'>
            LinkedIn
          </TextElement>
        </div>
      </Link>
    </div>
  </div>
)

const TeamSection = () => (
  <section className='flex flex-col  items-center justify-start lg:justify-between gap-14 lg:flex-row'>
    <div className='flex w-full flex-col items-start  gap-3 '>
      <div className='flex w-full flex-col items-start  gap-1 '>
        <TextElement type='t1' as='h1' className='"font-light'>
          Nuestro equipo,
          <br />
          <b className='font-semibold'>más comprometido que nunca.</b>
        </TextElement>
        <TextElement type='base' as='p'>
          Conoce a las personas que hacen posible Union Solidaria y que trabajan para que cada día más personas puedan
          ayudar a la comunidad.
        </TextElement>
        <TextElement type='base' as='p' className='mt-2'>
          <b>Estamos contratando,</b> si quieres ser parte de nuestro equipo, envíanos tu CV a team@unionsolidaria.com
        </TextElement>
      </div>
      <Button className='mt-2' href={Routes.DONATION}>
        Quiero ayudar donando
      </Button>
    </div>
    <div className='flex flex-col w-full lg:flex-row lg:max-w-none max-w-[85%] justify-end gap-10 lg:gap-5'>
      {TeamMembers.map((teamMember: TeamMember, index) => (
        <TeamItem
          name={teamMember.name}
          position={teamMember.position}
          image={teamMember.image}
          linkedin={teamMember.linkedin}
          key={index}
        />
      ))}
    </div>
  </section>
)

export default TeamSection
