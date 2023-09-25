'use client'
import { useRef } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { loggedUserSelector } from '@/redux/selectors/users'
import { useForm } from 'react-hook-form'
import PasswordInfo from './PasswordInfo'
import { usePutUsersMutation } from '@/redux/services/users.service'
import { Button } from '@/components'

const PasswordForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const currentUser = useAppSelector(loggedUserSelector)
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
    await putUser({ data, userId: currentUser._id })
  }

  return (
    <section className='flex items-center  justify-center'>
      <form
        className='flex w-full items-start flex-col gap-5'
        onSubmit={() => {
          void handleSubmit(onSubmit)
        }}
        ref={formRef}
      >
        <PasswordInfo errors={errors} register={register} getValues={getValues} />
        <Button type='submit' title='Guardar Cambios' />
      </form>
    </section>
  )
}

export default PasswordForm
