import { InitiativeInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteChip from './FavoriteChip'
import { TextElement } from '..'

interface Props {
  item: InitiativeInterface
}

const InitiativeItem = ({ item }: Props) => (
  <div className='relative flex w-full flex-col'>
    <FavoriteChip initiative={item} />
    <div className='flex w-full flex-col gap-2 '>
      <div className='l relative aspect-[1/1]  w-full'>
        <Image src={item.thumbnail} fill alt='Vercel Logo' className='aspect-[1/1] rounded-2xl object-cover' />
      </div>
      <div className='flex flex-col items-start gap-2 overflow-hidden'>
        <div>
          <TextElement type='base' as='h1' className='text-ellipsis !font-semibold'>
            {item.title}
          </TextElement>
          <TextElement type='small' as='p'>
            {item.country}, {item.province}{' '}
          </TextElement>
        </div>
        <Link
          href={Routes.INDIVIDUAL_INITIATIVE(item._id)}
          className='cursor-pointer text-sm font-semibold text-green-800 hover:underline'
        >
          Ver iniciativa
        </Link>
      </div>
    </div>
  </div>
)

export default InitiativeItem
