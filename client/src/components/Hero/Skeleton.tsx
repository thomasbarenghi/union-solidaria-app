'use client'
import { Skeleton } from '@nextui-org/react'

interface Props {
  height?: string
  isError: boolean
}

const HeroSkeleton = ({ height = 'h-[55vh]', isError }: Props) => {
  const Tag = isError ? 'div' : Skeleton
  return (
    <Tag
      className={`${height} container-section section-padding-1 flex overflow-hidden rounded-br-[40px] bg-gray-100`}
    />
  )
}

export default HeroSkeleton
