import { type TailwindColors } from '@/types'
import { iconColorVariants } from '@/utils/constants/colors.const'

interface Props {
  height?: number
  color: TailwindColors
}

function StarIcon(props: Props) {
  const { height, color } = props
  const DEFAULT_WIDTH = 44
  const DEFAULT_HEIGHT = 39

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${iconColorVariants[color]}`}
      height={height}
      viewBox={`0 0 ${DEFAULT_WIDTH} ${DEFAULT_HEIGHT}`}
    >
      <path d='M12.15 32.4004L20 27.7004L27.85 32.4504L25.75 23.5504L32.65 17.5504L23.55 16.7504L20 8.35039L16.45 16.7004L7.35 17.5004L14.25 23.5004L12.15 32.4004ZM7.65 38.6504L10.9 24.6004L0 15.1504L14.4 13.9004L20 0.650391L25.6 13.9004L40 15.1504L29.1 24.6004L32.35 38.6504L20 31.2004L7.65 38.6504Z' />
    </svg>
  )
}

export default StarIcon
