'use client'
import { Button, TextElement } from '@/components'
import { postRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import DateTime from './DateTimeInputs'
import GeneralInfo from './GeneralInputs'
import LocationInfo from './LocationInputs'
import Multimedia from './MultimediaInputs'
import { toast } from 'sonner'
import Routes from '@/utils/constants/routes.const'
import { useRouter } from 'next/navigation'

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
  thumbnail?: FileList
}

const FormSec = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    getValues,
    setValue
  } = useForm<FormProps>({
    mode: 'onChange'
  })

  const onSubmit = async (data: FormProps) => {
    const initiativeData = {
      ...data,
      owner: session?.user.id,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      thumbnail: data.thumbnail?.[0],
      deadLine: new Date(data.deadLine)
    }

    const { data: response, error } = await postRequest(Endpoints.INITIATIVES(), initiativeData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        sessionId: session?.token.sessionId
      }
    })

    if (error) {
      toast.error('Ocurrió un error al crear la iniciativa')
      console.log('ERROR: ', response)
      return
    }

    router.push(Routes.INITIATIVES)
    toast.success('Iniciativa creada con éxito')
  }

  return (
    <section className='flex w-full  items-center justify-center'>
      <form
        className='flex w-full flex-col gap-8'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextElement type='t3' as='h1' className='font-semibold'>
          Crear iniciativa
        </TextElement>
        <GeneralInfo errors={errors} register={register} control={control} setValue={setValue} />
        <LocationInfo errors={errors} register={register} control={control} setValue={setValue} />
        <DateTime errors={errors} register={register} getValues={getValues} />
        <Multimedia errors={errors} register={register} />
        <Button type='submit' title='Crear iniciativa' isLoading={isSubmitting} />
      </form>
    </section>
  )
}

export default FormSec
