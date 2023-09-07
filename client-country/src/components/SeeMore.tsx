'use client'
import clsx from 'clsx'
import { useState } from 'react'

interface Props {
  text: string
  maxChars: number
  parClassName?: string
  btnClassName?: string
}

const SeeMore = (props: Props) => {
  const { text, maxChars, parClassName, btnClassName } = props

  const [expanded, setExpanded] = useState(false)
  const showToggle = text.length > maxChars

  const toggleText = () => {
    setExpanded(!expanded)
  }

  return (
    <div className='flex flex-col'>
      <p className={parClassName}>{!showToggle || expanded ? text : `${text.slice(0, maxChars)}...`}</p>
      {showToggle && (
        <button className={clsx(btnClassName || 'text-sm font-bold text-blue-500', 'ml-auto')} onClick={toggleText}>
          {expanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  )
}

export default SeeMore
