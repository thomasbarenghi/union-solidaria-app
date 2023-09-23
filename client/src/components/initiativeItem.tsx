'use client'
import { InitiativeInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  initiative: InitiativeInterface
}

interface ItemProps {
  imageSrc: string
  text: string | null
  icon?: boolean
}

function Item({ imageSrc, text, icon = true }: ItemProps) {
  const textStyle = icon ? 'text-gray-800' : 'text-pink-500'
  return (
    <div className='flex gap-2'>
      {icon && <Image src={imageSrc} priority width={10} height={13} sizes='40vw' className='h-3 w-3' alt='icon' />}
      <p className={`text-xs font-normal ${textStyle}`}>{text}</p>
    </div>
  )
}

export default function InitiativeItem({ initiative }: Props) {
  return (
    <Link
      className='flex h-full flex-col gap-2 rounded-lg p-3 shadow-initiativeItem'
      href={`${Routes.INITIATIVES}/${initiative?.id}`}
    >
      <div className='relative aspect-square '>
        <Image
          src={initiative.thumbnail}
          priority
          sizes='40vw'
          fill
          alt='thumbnail'
          className='rounded-lg object-cover'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='bodyText truncate font-semibold'>{initiative.title}</h1>
        <div className='flex flex-col gap-2'>
          <Item imageSrc='' text={initiative.owner.orgName} icon={false} />
          <Item imageSrc='/icon/location_on.svg' text={`${initiative.country}, ${initiative.province}`} />
          <Item imageSrc='/icon/category.svg' text={initiative.opportunities.join(', ')} />
          <Item imageSrc='/icon/family_link.svg' text={initiative.themes.join(', ')} />
        </div>
      </div>
    </Link>
  )
}
