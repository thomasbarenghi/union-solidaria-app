import { ReviewFormData, ReviewInterface } from '@/interfaces'
import { Button, Input, Textarea } from '..'
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

interface Props {
  handleSubmit: UseFormHandleSubmit<ReviewFormData, undefined>
  onSubmit: (data: ReviewFormData) => Promise<string | number | undefined>
  register: UseFormRegister<ReviewFormData>
  errors: FieldErrors<ReviewFormData>
  isSubmitting: boolean
  mode: 'create' | 'edit'
  review?: ReviewInterface
}

const ReviewForm = ({ handleSubmit, onSubmit, register, errors, isSubmitting, mode, review }: Props) => (
  <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
    <Input
      type='number'
      name='rating'
      defaultValue={mode === 'edit' ? review?.rating?.toString() : ''}
      label='Rating'
      placeholder='Del 1 al 5'
      max={5}
      min={1}
      hookForm={{
        register,
        validations: {
          required: { value: true, message: 'Este campo es requerido' }
        }
      }}
      errorMessage={errors?.rating?.message?.toString()}
    />
    <Textarea
      name='body'
      defaultValue={mode === 'edit' ? review?.body : ''}
      label='Comentario'
      hookForm={{
        register,
        validations: {
          required: { value: true, message: 'Este campo es requerido' }
        }
      }}
      rows={3}
      errorMessage={errors?.body?.message?.toString()}
    />
    <Button type='submit' title='Enviar' size='md' isLoading={isSubmitting} />
  </form>
)

export default ReviewForm
