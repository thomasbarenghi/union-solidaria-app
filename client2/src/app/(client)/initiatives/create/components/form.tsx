'use client'
import { useEffect, useRef } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { useForm } from 'react-hook-form'
import GeneralInfo from './generalInfo'
import LocationInfo from './locationInfo'
import DateTime from './dateTime'
import Multimedia from './multimedia'
import { usePostInitiativesMutation } from '@/redux/services/initiatives.service'
import { currentUserSelector } from '@/redux/selectors/users'
import { useRouter } from 'next/navigation'
import Routes from '@/utils/constants/routes.const'

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
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const { id } = useAppSelector(currentUserSelector)
  const [addPost] = usePostInitiativesMutation()
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    getValues
  } = useForm({
    mode: 'onChange'
  })

  useEffect(() => {
    console.log(getValues())
  }, [errors])

  const cleanForm = () => {
    formRef.current?.reset()
  }

  const onSubmit = async (data: any) => {
    try {
      const formData = {
        ...data,
        ownerId: id,
        startDate: new Date(data.startDate).toISOString(),
        endDate: new Date(data.endDate).toISOString(),
        thumbnail: data.thumbnail[0],
        deadLine: new Date(data.deadLine).toISOString()
      }
      console.log(errors, formData)
      const res = await addPost(formData).unwrap()
      console.log(res.id, res)
      cleanForm()
      router.push(Routes.INDIVIDUAL_INITIATIVE(res.id))
    } catch (err) {
      alert('Error al crear la iniciativa')
    }
  }

  return (
    <section className='flex items-center  justify-center w-full'>
      <form
        className='flex w-full flex-col gap-8'
        onSubmit={() => {
          void handleSubmit(onSubmit)
        }}
        ref={formRef}
      >
        <h2 className='titulo-3'>Crear iniciativa</h2>
        <GeneralInfo errors={errors} register={register} control={control} setValue={setValue} />
        <LocationInfo errors={errors} register={register} control={control} setValue={setValue} />
        <DateTime errors={errors} register={register} />
        <Multimedia errors={errors} register={register} />
        <button type='submit' className='w-max primaryButton'>
          Crear iniciativa
        </button>
      </form>
    </section>
  )
}

export default FormSec
