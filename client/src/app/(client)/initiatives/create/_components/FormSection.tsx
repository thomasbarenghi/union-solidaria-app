'use client'
import { useRef } from 'react'
// import { useAppSelector } from '@/redux/hooks'
import { useForm } from 'react-hook-form'
import GeneralInfo from './GeneralInputs'
import LocationInfo from './LocationInputs'
import DateTime from './DateTimeInputs'
import Multimedia from './MultimediaInputs'
// import { usePostInitiativesMutation } from '@/redux/services/initiatives.service'
// import { loggedUserSelector } from '@/redux/selectors/users'
// import { useRouter } from 'next/navigation'
// import Routes from '@/utils/constants/routes.const'
import { Button, TextElement } from '@/components'
import { useSession } from 'next-auth/react'
import { postRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'

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
  // const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const { data: session } = useSession()
  // const { _id } = useAppSelector(loggedUserSelector)
  // const [addPost] = usePostInitiativesMutation()
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue
  } = useForm({
    mode: 'onChange'
  })

  // const cleanForm = () => {
  //   formRef.current?.reset()
  // }

  const onSubmit = async (data: any) => {
    const initiativeData = {
      ...data,
      owner: session?.user.id,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      thumbnail: data.thumbnail[0],
      deadLine: new Date(data.deadLine)
    }
    // const formData = new FormData()

    // for (const key in initiativeData) {
    //   formData.append(key, initiativeData[key])
    // }

    console.log(initiativeData)
    // console.log(formData)

    // const { initiative, error } = await postInitiative(session?.user.id, formData)
    const { data: response, error } = await postRequest(Endpoints.INITIATIVES(), initiativeData, true, {
      sessionId: session?.token.sessionId
    })

    console.log(response)
    console.log(error)

    // try {
    //   const formData = {
    //     ...data,
    //     ownerId: _id,
    //     startDate: new Date(data.startDate).toISOString(),
    //     endDate: new Date(data.endDate).toISOString(),
    //     thumbnail: data.thumbnail[0],
    //     deadLine: new Date(data.deadLine).toISOString()
    //   }
    //   const res = await addPost(formData).unwrap()
    //   cleanForm()
    //   router.push(Routes.INDIVIDUAL_INITIATIVE(res._id))
    // } catch (err) {
    //   alert('Error al crear la iniciativa')
    // }
  }

  return (
    <section className='flex w-full  items-center justify-center'>
      <form
        className='flex w-full flex-col gap-8'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <TextElement type='t3' as='h1' className='font-semibold'>
          Crear iniciativa
        </TextElement>
        <GeneralInfo errors={errors} register={register} control={control} setValue={setValue} />
        <LocationInfo errors={errors} register={register} control={control} setValue={setValue} />
        <DateTime errors={errors} register={register} />
        <Multimedia errors={errors} register={register} />
        <Button type='submit' title='Crear iniciativa' />
      </form>
    </section>
  )
}

export default FormSec
