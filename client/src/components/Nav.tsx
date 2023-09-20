import Link from 'next/link'

interface VerticalNavProps {
  items: VerticalNavItemProps[]
  itemClassName?: string
  mode?: 'vertical' | 'horizontal'
  gap?: string
  textStyles?: string
  centerAbsolute?: boolean
  className?: string
}

interface VerticalNavItemProps {
  name: string
  href: string
  visible: boolean
}

const Nav = ({
  mode = 'vertical',
  gap = 'gap-2',
  items,
  itemClassName = '',
  textStyles = 'text-black',
  centerAbsolute = false,
  className = ''
}: VerticalNavProps) => {
  const divFlexStyles = mode === 'vertical' ? `flex flex-col ${gap}` : `flex ${gap}`
  const divCenterAbsolute = centerAbsolute ? 'absolute left-[50%]  w-max  translate-x-[-50%]' : ''
  return (
    <div className={`${divFlexStyles} ${divCenterAbsolute}  ${className}`}>
      {items.map((item, index) =>
        item.visible ? (
          <Link href={item.href} key={index}>
            <p className={`${itemClassName} ${textStyles} `}>{item.name}</p>
          </Link>
        ) : null
      )}
    </div>
  )
}

export default Nav
