'use client'
import { Button } from '@/components'
import { UpdatePasswordFormValues } from '@/interfaces'
import { useForm } from 'react-hook-form'
import PasswordInfo from './PasswordInfo'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'

interface Props {
  session: any
}

const PasswordForm = ({ session }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues
  } = useForm<UpdatePasswordFormValues>({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    await putRequest(Endpoints.UPDATE_PASSWORD(session?.user?.id ?? ''), data, false, { sessionId: session?.token?.sessionId })
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
