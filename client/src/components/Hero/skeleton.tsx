'use client'
import { Skeleton } from '@nextui-org/react'

interface Props {
  height?: string
  children?: React.ReactNode
}

const HeroSkeleton = ({ height = 'h-[55vh]', children }: Props) => (
  <Skeleton className={`${height} container-section section-padding-1 flex overflow-hidden rounded-br-[40px]`} />
)

export default HeroSkeleton
