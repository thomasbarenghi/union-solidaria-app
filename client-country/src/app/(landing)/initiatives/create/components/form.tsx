'use client'
import { Heading } from '@/components'
import axios from 'axios'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import GeneralInfo from './generalInfo'
import LocationInfo from './locationInfo'
import DateTime from './dateTime'
import Multimedia from './multimedia'
import { serverUrl } from '@/utils/constants/env.const'
import Endpoints from '@/utils/constants/endpoints.const'

async function postData(form: any) {
  try {
    const res = await axios.post(serverUrl + Endpoints.INITIATIVES, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
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
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })
  const [languages, setLanguages] = useState<string[]>([])
  const [themes, setThemes] = useState<string[]>([])
  const [opportunities, setOpportunities] = useState<string[]>([])
  const [categories, setCategories] = useState<string[]>([])

  const cleanForm = () => {
    setLanguages([])
    setThemes([])
    setOpportunities([])
    setCategories([])
    formRef.current?.reset()
  }

  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      languages,
      themes,
      opportunities,
      categories,
      ownerId: '64f6ac5dbd10725027c83414',
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      thumbnail: data.thumbnail[0],
      deadLine: new Date(data.deadLine).toISOString()
    }
    console.log(errors, formData)
    await postData(formData)
    cleanForm()
  }

  return (
    <section className='flex items-center  justify-center'>
      <form className='flex w-full flex-col gap-8' onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <Heading>Crear iniciativa</Heading>
        <GeneralInfo
          setLanguages={setLanguages}
          setThemes={setThemes}
          setOpportunities={setOpportunities}
          languages={languages}
          themes={themes}
          opportunities={opportunities}
          categories={categories}
          setCategories={setCategories}
          errors={errors}
          register={register}
        />
        <LocationInfo errors={errors} register={register} />
        <DateTime errors={errors} register={register} />
        <Multimedia errors={errors} register={register} />
        <button type='submit' className='w-max rounded-full bg-blue-500 px-6 py-2 text-lg font-semibold text-white'>
          Crear iniciativa
        </button>
      </form>
    </section>
  )
}
