'use client'
import { Button } from '@/components'
import { updateUser } from '@/services/user/update-user.service'
import { useSession } from 'next-auth/react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import CommonInfo from './CommonInfo'
import { UserInterface } from '@/interfaces'
import { userAdapter } from '@/adapters/user.adapt'

const FormSec = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { data: session, update } = useSession()
  // const [putUser] = usePutUsersMutation()

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      profileImage: data.profileImage[0] ?? '',
      bannerImage: data.bannerImage[0] ?? ''
    }

    // TODO: handle no session case
    if (session === null) return

    const { updatedUser, error } = await updateUser(session?.user.id, formData)

    // TODO: handle error case
    if (error !== null) return

    const adaptedUser = userAdapter(updatedUser as UserInterface)

    update(adaptedUser)
    alert('Cambio exitoso')
    reset()
  }

  return (
    <section className='flex items-center  justify-center'>
      <form className='flex w-full flex-col items-start gap-5' onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <CommonInfo errors={errors} register={register} currentUser={session?.user} />
        <Button type='submit' title='Guardar Cambios' isLoading={isSubmitting} />
      </form>
    </section>
  )
}

export default FormSec
