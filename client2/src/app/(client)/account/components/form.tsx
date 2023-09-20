'use client'
import { useRef } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'
import { useForm } from 'react-hook-form'
import GeneralInfo from './generalInfo'
import Multimedia from './multimedia'
import SecurityInfo from './securityInfo'
import { usePutUsersMutation } from '@/redux/services/users.service'

export interface FormProps {
  title: string
  description: string
  deadLine: string
  startDate: string
  endDate: string
  categories: string[]
  opportunities: string[]
  locations: string
  languages: string[]
  ownerId: string
  startHour: string
  endHour: string
  extraInfo: string
  themes: string[]
  thumbnail?: any
}

const FormSec = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const currentUser = useAppSelector(currentUserSelector)
  const [putUser] = usePutUsersMutation()

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      profileImage: data.profileImage[0] ?? '',
      bannerImage: data.bannerImage[0] ?? ''
    }
    console.log(errors, formData)
    await putUser({ data: formData, userId: currentUser.id })
  }

  return (
    <section className='flex items-center  justify-center'>
      <form
        className='flex w-full flex-col gap-8'
        onSubmit={() => {
          void handleSubmit(onSubmit)
        }}
        ref={formRef}
      >
        <GeneralInfo errors={errors} register={register} currentUser={currentUser} />
        <Multimedia errors={errors} register={register} />
        <SecurityInfo errors={errors} register={register} getValues={getValues} />
        <button type='submit' className='w-max primaryButton'>
          Guardar Cambios
        </button>
      </form>
    </section>
  )
}

export default FormSec
