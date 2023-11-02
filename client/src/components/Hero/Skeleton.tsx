'use client'
import { Skeleton } from '@nextui-org/react'

interface Props {
  height?: string
}

const HeroSkeleton = ({ height = 'h-[55vh]' }: Props) => (
  <Skeleton className={`${height} container-section section-padding-1 flex overflow-hidden rounded-br-[40px]`} />
)

export default HeroSkeleton
