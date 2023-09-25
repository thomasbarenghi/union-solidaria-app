'use client'
import { useRef } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'
import { useForm } from 'react-hook-form'
import CommonInfo from './CommonInfo'
import { usePutUsersMutation } from '@/redux/services/users.service'
import { Button } from '@/components'

const FormSec = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const currentUser = useAppSelector(loggedUserSelector)
  const [putUser] = usePutUsersMutation()

  const {
    register,
    formState: { errors },
    handleSubmit
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
    await putUser({ data: formData, userId: currentUser._id })
  }

  return (
    <section className='flex items-center  justify-center'>
      <form
        className='flex w-full flex-col items-start gap-5'
        onSubmit={() => {
          void handleSubmit(onSubmit)
        }}
        ref={formRef}
      >
        <CommonInfo errors={errors} register={register} currentUser={currentUser} />
        <Button type='submit' title='Guardar Cambios' />
      </form>
    </section>
  )
}

export default FormSec
