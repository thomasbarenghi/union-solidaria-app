import Image from 'next/image'
import { Nav, ProfileAction } from '@/components'
import { itemsNav } from './lib/itemsNav'

interface Props {
  theme?: 'dark' | 'light'
  layout?: 'simple' | 'full'
}

const Header = ({ theme = 'light', layout = 'full' }: Props) => {
  const logoSrc = `/icon/logo-${theme === 'dark' ? 'dark' : 'light'}.svg`

  return (
    <header className='section-padding-1 fixed z-50 flex w-full justify-center bg-transparent py-8'>
      <div className='flex w-full items-center justify-between 2xl:container'>
        <Image src={logoSrc} alt='Vercel Logo' width={185} height={35} />
        {layout === 'full' && (
          <div className='flex items-center'>
            <Nav
              items={itemsNav}
              className='hidden lg:flex'
              mode='horizontal'
              gap='gap-6'
              centerAbsolute
              textStyles='text-white font-light'
            />
            <ProfileAction />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
