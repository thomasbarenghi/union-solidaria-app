'use client'
import { Button } from '@/components'
import { UpdatePasswordFormValues } from '@/interfaces'
import { updatePassword } from '@/services/user/update-user.service'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import PasswordInfo from './PasswordInfo'

const PasswordForm = () => {
  const { data: session } = useSession()

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<UpdatePasswordFormValues>({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    if (session !== null) {
      await updatePassword(session?.user.id, session.token.sessionId, data)
    }
  }

  return (
    <section className='flex items-center  justify-center'>
      <form
        className='flex w-full flex-col items-start gap-5'
        onSubmit={() => {
          void handleSubmit(onSubmit)
        }}
      >
        <PasswordInfo errors={errors} register={register} getValues={getValues} />
        <Button type='submit' title='Guardar Cambios' />
      </form>
    </section>
  )
}

export default PasswordForm
