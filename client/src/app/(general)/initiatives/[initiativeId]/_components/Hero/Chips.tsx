'use client'
import { Chip } from '@nextui-org/react'
import { InitiativeInterface } from '@/interfaces'
import { statusChipBuilder } from './statusChipBuilder'
import { dateStatusChipBuilder } from './dateStatusChipBuilder'

interface Props {
  data: InitiativeInterface
  currentUserId: string
  isLogged: boolean
}

const Chips = ({ data, currentUserId, isLogged }: Props) => {
  const chipData = statusChipBuilder(data, currentUserId)
  const dateChipData = dateStatusChipBuilder(data)
  return (
    <div className='flex gap-1'>
      {isLogged && (
        <Chip
          color={chipData.color}
          classNames={{
            content: '!font-semibold !text-[12px]'
          }}
        >
          {chipData.title}
        </Chip>
      )}
      <Chip
        color={dateChipData.color}
        classNames={{
          content: '!font-semibold !text-[12px] '
        }}
      >
        {dateChipData.title}
      </Chip>
    </div>
  )
}

export default Chips
