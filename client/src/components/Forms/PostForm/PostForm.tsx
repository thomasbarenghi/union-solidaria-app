import { PostInterface } from '@/interfaces'
import { Button, Textarea } from '../..'
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { PostFormData } from './form.interface'

interface Props {
  handleSubmit: UseFormHandleSubmit<PostFormData, undefined>
  onSubmit: (data: PostFormData) => Promise<string | number | undefined>
  register: UseFormRegister<PostFormData>
  errors: FieldErrors<PostFormData>
  isSubmitting: boolean
  mode: 'create' | 'edit'
  post?: PostInterface
}

const PostForm = ({ handleSubmit, onSubmit, register, errors, isSubmitting, mode, post }: Props) => (
  <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
    <Textarea
      name='body'
      defaultValue={mode === 'edit' ? post?.body : ''}
      label='Cuerpo de la publicacion'
      hookForm={{
        register,
        validations: {
          required: { value: true, message: 'Este campo es requerido' }
        }
      }}
      rows={5}
      errorMessage={errors?.body?.message?.toString()}
    />
    <Button type='submit' title='Publicar' size='md' isLoading={isSubmitting} />
  </form>
)

export default PostForm
