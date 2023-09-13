'use client'

import { FormInput } from '@/components'
import { useAppSelector } from '@/redux/hooks'
import { currentUserSelector } from '@/redux/selectors/users'
import { usePostReviewMutation } from '@/redux/services/reviews.service'
import { useForm } from 'react-hook-form'

interface FormValues {
  body: string
}

export default function Review() {
  const user = useAppSelector(currentUserSelector)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<FormValues>({
    mode: 'onChange'
  })
  const [addReview] = usePostReviewMutation()

  const onSubmit = handleSubmit(async (formData) => {
    try {
      const data = { ...formData, userIDs: user.id }
      await addReview(data).unwrap()
      reset()
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <section>
      <h3 className='mb-3 text-xl text-blue-600'>Reseña</h3>
      <div className='mb-6 rounded-xl border border-gray-100 p-4 shadow-xl'>
        <form onSubmit={onSubmit} className='flex flex-col'>
          <FormInput
            type='textarea'
            name='body'
            placeholder='Escribir reseña'
            className='mb-4 resize-none border-none'
            rows={7}
            hookForm={{
              register,
              validations: {
                maxLength: { value: 350, message: 'Máximo 350 caracteres' },
                minLength: { value: 10, message: 'Mínimo 10 caracteres' },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            error={errors?.body?.message}
          />
          <button className='m-auto w-3/12 rounded-full bg-blue-500 px-[24px] py-[8px] text-lg font-bold text-white'>
            Publicar
          </button>
        </form>
      </div>
    </section>
  )
}
