import { TextElement } from '@/components'
import { InitiativeFormData } from '@/interfaces'
import { Button as ButtonNextUI } from '@nextui-org/react'
import {
  type FieldErrors,
  type UseFormRegister,
  type UseFormSetValue,
  type UseFormTrigger,
  type UseFormWatch
} from 'react-hook-form'

interface LocationInfoProps {
  errors: FieldErrors<InitiativeFormData>
  register: UseFormRegister<InitiativeFormData>
  watch: UseFormWatch<InitiativeFormData>
  trigger: UseFormTrigger<InitiativeFormData>
  setValue: UseFormSetValue<InitiativeFormData>
}

const MultimediaInputs = ({ errors, register, watch, trigger, setValue }: LocationInfoProps) => (
  <div className='flex w-full flex-col gap-4'>
    <div className='flex flex-col gap-2'>
      <TextElement type='subtitle' as='h2'>
        Multimedia
      </TextElement>
      <hr />
    </div>
    <div className='flex grid-cols-2 flex-col gap-4 lg:grid'>
      <label htmlFor='thumbnail' className='mb-4 h-[60px]'>
        <p>Imagen de portada</p>
        <div className='flex justify-between rounded-2xl border border-solid border-gray-300 px-3 py-2'>
          <input
            type='file'
            {...register('thumbnail', {
              validate: (value) => {
                if (value && value?.length !== 0) {
                  if (value[0].size > 5000000) return 'La imagen no debe pesar mas de 5MB'
                }
                return undefined
              }
            })}
          />
          {watch('thumbnail')?.length !== 0 && !!watch('thumbnail') ? (
            <ButtonNextUI
              size='sm'
              radius='full'
              color='secondary'
              onClick={() => {
                setValue('thumbnail', undefined)
                trigger('thumbnail')
              }}
            >
              Descartar
            </ButtonNextUI>
          ) : null}
        </div>
        {errors.thumbnail ? <p className='text-sm text-danger-600'>{errors.thumbnail.message}</p> : null}
      </label>
      {/* <Input
        type='file'
        name='thumbnail'
        label='Imagen de portada'
        placeholder='Selecciona una imagen'
        hookForm={{
          register,
          validations: {
            validate: (value: FileList) => {
              if (value.length > 0) {
                if (value[0].size > 5000000) {
                  return 'La imagen no debe pesar mas de 5MB'
                }
              }
            }
          }
        }}
        errorMessage={errors?.thumbnail?.message}
      /> */}
    </div>
  </div>
)

export default MultimediaInputs
