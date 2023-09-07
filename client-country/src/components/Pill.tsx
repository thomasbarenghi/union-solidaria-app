import { type TailwindColors } from '@/types'
import { bgColorVariants } from '@/utils/constants/colors.const'

interface Props {
  title: string
  icon: JSX.Element
  bgColor: TailwindColors
}

const Pill = (props: Props) => {
  const { title, icon, bgColor } = props

  return (
    <div
      className={`flex items-center justify-center gap-[4px] rounded-full ${bgColorVariants[bgColor]} px-[4px] py-[2px]`}
    >
      {icon}
      <p className='text-xs font-normal text-white'>{title}</p>
    </div>
  )
}

export default Pill
