'use client'
import { Heading } from '@/components'
import axios from 'axios'
import { useRef } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector, currentAuthSelector } from '@/redux/selectors/users'
import { useForm } from 'react-hook-form'
import GeneralInfo from './generalInfo'
import { serverUrl } from '@/utils/constants/env.const'
import Multimedia from './multimedia'
import SecurityInfo from './securityInfo'
import Endpoints from '@/utils/constants/endpoints.const'

async function postData(form: any, userId: string, sessionId: string) {
  try {
    const res = await axios.put(serverUrl + Endpoints.USER_BY_ID(userId), form, {
      headers: {
        'Content-Type': 'multipart/form-data',
        sessionId: sessionId
      }
    })
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

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

export default function FormSec() {
  const formRef = useRef<HTMLFormElement>(null)
  const currentUser = useAppSelector(currentUserSelector)
  const currentSession = useAppSelector(currentAuthSelector)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })

  const cleanForm = () => {
    formRef.current?.reset()
  }

  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      profileImage: data.profileImage[0],
      bannerImage: data.bannerImage[0]
    }
    console.log(errors, formData)
    await postData(formData, currentUser.id, currentSession.sessionId)
    cleanForm()
  }

  return (
    <section className='flex items-center  justify-center'>
      <form className='flex w-full flex-col gap-8' onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <Heading>Editar tu cuenta</Heading>
        <GeneralInfo errors={errors} register={register} currentUser={currentUser} />
        <Multimedia errors={errors} register={register} />
        <SecurityInfo errors={errors} register={register} />
        <button type='submit' className='w-max rounded-full bg-blue-500 px-6 py-2 text-lg font-semibold text-white'>
          Guardar Cambios
        </button>
      </form>
    </section>
  )
}
