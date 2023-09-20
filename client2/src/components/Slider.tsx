/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'
import { Slider as SliderBase, SliderProps } from '@mui/base/Slider'
import clsx from 'clsx'

interface Props {
  min: number
  max: number
  defaultValue: number
  handleChange: (value: number | number[]) => void
}

const Slider = ({ min, max, defaultValue, handleChange }: Props) => (
  <StyledSlider
    onChange={(e, value) => handleChange(value)}
    defaultValue={defaultValue}
    min={min}
    max={max}
    slots={{ valueLabel: SliderValueLabel }}
  />
)

interface SliderValueLabelProps {
  children: React.ReactElement
}

const SliderValueLabel = ({ children }: SliderValueLabelProps) => (
  <span className='smalltext absolute  bottom-5 left-1/2 -translate-x-1/2  transform  rounded-full font-bold text-green-800'>
    ${children}
  </span>
)

const resolveSlotProps = (fn: any, args: any) => (typeof fn === 'function' ? fn(args) : fn)

const StyledSlider = React.forwardRef<HTMLSpanElement, SliderProps>((props, ref) => (
  <SliderBase
    ref={ref}
    name='slider'
    {...props}
    slotProps={{
      ...props.slotProps,
      root: (ownerState) => {
        const resolvedSlotProps = resolveSlotProps(props.slotProps?.root, ownerState)
        return {
          ...resolvedSlotProps,
          className: clsx(
            `relative inline-block h-1.5 w-full touch-none py-4 ${
              ownerState.disabled
                ? 'pointer-events-none cursor-default text-slate-300 opacity-50 dark:text-slate-600'
                : 'cursor-pointer text-green-800 hover:opacity-100 dark:text-green-400'
            }`,
            resolvedSlotProps?.className
          )
        }
      },
      rail: (ownerState) => {
        const resolvedSlotProps = resolveSlotProps(props.slotProps?.rail, ownerState)
        return {
          ...resolvedSlotProps,
          className: clsx('absolute block h-1 w-full rounded-sm bg-current opacity-40', resolvedSlotProps?.className)
        }
      },
      track: (ownerState) => {
        const resolvedSlotProps = resolveSlotProps(props.slotProps?.track, ownerState)
        return {
          ...resolvedSlotProps,
          className: clsx('absolute block h-1 rounded-sm bg-current', resolvedSlotProps?.className)
        }
      },
      thumb: (ownerState, { active, focused }) => {
        const resolvedSlotProps = resolveSlotProps(props.slotProps?.thumb, ownerState)
        return {
          ...resolvedSlotProps,
          className: clsx(
            `hover:shadow-outline-purple absolute -ml-1.5 -mt-1.5 box-border h-4 w-4 rounded-full border-3 border-solid border-current bg-white outline-0 ${
              focused || active ? 'shadow-outline-purple' : ''
            }`,
            resolvedSlotProps?.className
          )
        }
      }
    }}
  />
))

StyledSlider.displayName = 'Slider'

export default Slider
