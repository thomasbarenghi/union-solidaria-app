import Image from 'next/image'
import { teamMembers, TeamMember } from '../_lib/team.lib'
import { Button, TextElement } from '@/components'
import Link from 'next/link'
import Routes from '@/utils/constants/routes.const'

const TeamItem = ({ name, position, image, linkedin }: TeamMember) => (
  <div className='flex w-full flex-col gap-4 2xl:container'>
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

const Team = () => (
  <section className='flex flex-col  items-center justify-start gap-14 lg:flex-row lg:justify-between'>
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
    <div className='flex w-full max-w-[85%] flex-col justify-between gap-10 md:flex-row lg:max-w-none lg:justify-end lg:gap-5'>
      {teamMembers.map((teamMember: TeamMember, index) => (
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

export default Team
