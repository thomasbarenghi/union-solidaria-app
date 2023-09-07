import { type TailwindColors } from '@/types'
import { iconColorVariants } from '@/utils/constants/colors.const'

interface Props {
  height?: number
  color: TailwindColors
}

function KiteIcon(props: Props) {
  const { height, color } = props
  const DEFAULT_WIDTH = 44
  const DEFAULT_HEIGHT = 42

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${iconColorVariants[color]}`}
      height={height}
      viewBox={`0 -1 ${DEFAULT_WIDTH} ${DEFAULT_HEIGHT}`}
    >
      <path d='M7.05 17.7L18.05 0L29.05 17.7H7.05ZM29.3 40C26.8333 40 24.7667 39.1667 23.1 37.5C21.4333 35.8333 20.6 33.7667 20.6 31.3C20.6 28.8333 21.4333 26.7667 23.1 25.1C24.7667 23.4333 26.8333 22.6 29.3 22.6C31.7667 22.6 33.8333 23.4333 35.5 25.1C37.1667 26.7667 38 28.8333 38 31.3C38 33.7667 37.1667 35.8333 35.5 37.5C33.8333 39.1667 31.7667 40 29.3 40ZM0 38.75V23.55H15.2V38.75H0ZM29.3043 37C30.9014 37 32.25 36.4486 33.35 35.3457C34.45 34.243 35 32.8929 35 31.2957C35 29.6986 34.4486 28.35 33.3458 27.25C32.243 26.15 30.893 25.6 29.2957 25.6C27.6986 25.6 26.35 26.1514 25.25 27.2542C24.15 28.357 23.6 29.7071 23.6 31.3043C23.6 32.9014 24.1514 34.25 25.2542 35.35C26.357 36.45 27.7071 37 29.3043 37ZM3 35.75H12.2V26.55H3V35.75ZM12.45 14.7H23.65L18.05 5.65L12.45 14.7Z' />
    </svg>
  )
}

export default KiteIcon
