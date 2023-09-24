import { InitiativeInterface } from '@/interfaces'
import Routes from '@/utils/constants/routes.const'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  item: InitiativeInterface
}

const InitiativeItem = ({ item }: Props) => (
  <div className='relative flex w-full cursor-pointer flex-col' key={item._id}>
    <Link href={Routes.INDIVIDUAL_INITIATIVE(item._id)}>
      <div className='flex w-full flex-col gap-2 '>
        <div className='l relative aspect-[1/1]  w-full'>
          <Image src={item.thumbnail} fill alt='Vercel Logo' className='aspect-[1/1] rounded-2xl object-cover' />
        </div>
        <div className='flex flex-col gap-2'>
          <div>
            <h1 className='bodyText font-medium'>{item.title}</h1>
            <p className='text-sm font-light'>
              {item.country}, {item.province}{' '}
            </p>
          </div>
          <button className='w-max border-b border-green-800 text-sm text-green-800'>Ver iniciativa</button>
        </div>
      </div>
    </Link>
  </div>
)

export default InitiativeItem
