'use client'
import { InitiativeInterface } from '@/interfaces'
import { putRequest } from '@/services/apiRequests.service'
import Endpoints from '@/utils/constants/endpoints.const'
import { useForm } from 'react-hook-form'
import { Button, Input, Textarea } from '@/components'
import { useSWRConfig } from 'swr'

interface Props {
  initiative: InitiativeInterface
}

const ConfigSection = ({ initiative }: Props) => {
  const { mutate } = useSWRConfig()
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data: any) => {
    try {
      const formData = {
        ...data,
        startDate: new Date(data.startDate).toISOString(),
        endDate: new Date(data.endDate).toISOString(),
        thumbnail: data.thumbnail[0] !== undefined ? data.thumbnail[0] : initiative.thumbnail,
        deadLine: new Date(data.deadLine).toISOString()
      }
      console.log(formData)
      await putRequest(Endpoints.INITIATIVES_BY_ID(initiative._id), formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      await mutate(Endpoints.INITIATIVES_BY_ID(initiative._id))
    } catch (err) {
      console.log(err)
      alert('Error al editar la iniciativa')
    }
  }

  return (
    <div className='flex gap-6'>
      <form
        className='flex w-full flex-col items-start justify-start gap-5'
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex w-full grid-cols-2 flex-col gap-4 lg:grid'>
          <Input
            type='text'
            name='title'
            label='Titulo de la iniciativa'
            placeholder='Titulo de la iniciativa'
            hookForm={{
              register,
              validations: {
                maxLength: { value: 60, message: 'Maximo 60 caracteres' },
                minLength: { value: 5, message: 'Minimo 5 caracteres' },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            defaultValue={initiative.title}
            errorMessage={errors?.title?.message?.toString()}
          />
          <Textarea
            name='description'
            rows={1}
            label='Descripcion de la iniciativa'
            placeholder='Descripcion de la iniciativa'
            hookForm={{
              register,
              validations: {
                maxLength: { value: 500, message: 'Maximo 500 caracteres' },
                minLength: { value: 50, message: 'Minimo 50 caracteres' },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            defaultValue={initiative.description}
            errorMessage={errors?.description?.message?.toString()}
          />
          <Input
            type='date'
            name='deadLine'
            label='Fecha limite de inscripcion'
            placeholder='Fecha limite de inscripcion'
            hookForm={{
              register,
              validations: {
                required: { value: true, message: 'Este campo es requerido' },
                validate: (value) => {
                  const date = new Date(value)
                  const today = new Date()
                  if (date < today) {
                    return 'La fecha no puede ser menor a la actual'
                  }
                  return true
                }
              }
            }}
            defaultValue={initiative.deadLine.toString().slice(0, 10)}
            errorMessage={errors?.deadLine?.message?.toString()}
          />
          <Input
            type='date'
            name='startDate'
            label='Fecha de inicio'
            placeholder='Fecha de inicio'
            hookForm={{
              register,
              validations: {
                required: { value: true, message: 'Este campo es requerido' },
                validate: (value: string) => {
                  const date = new Date(value)
                  const currentDate = new Date()
                  if (date < currentDate) {
                    return 'La fecha no puede ser anterior a la actual'
                  }
                  return true
                }
              }
            }}
            defaultValue={initiative.startDate.toString().slice(0, 10)}
            errorMessage={errors?.startDate?.message?.toString()}
          />
          <Input
            type='date'
            name='endDate'
            label='Fecha de finalizacion'
            placeholder='Fecha de finalizacion'
            hookForm={{
              register,
              validations: {
                required: { value: true, message: 'Este campo es requerido' },
                validate: (value: string) => {
                  const date = new Date(value)
                  const currentDate = new Date()
                  if (date < currentDate) {
                    return 'La fecha no puede ser anterior a la actual'
                  }
                  return true
                }
              }
            }}
            defaultValue={initiative.endDate.toString().slice(0, 10)}
            errorMessage={errors?.endDate?.message?.toString()}
          />
          <Input
            type='text'
            name='startHour'
            label='Hora de inicio'
            placeholder='Hora de inicio'
            hookForm={{
              register,
              validations: {
                pattern: {
                  value: /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/,
                  message: 'La hora debe ser en formato 12 horas, ejemplo: 10:30 AM'
                },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            defaultValue={initiative.startHour}
            errorMessage={errors?.startHour?.message?.toString()}
          />
          <Input
            type='text'
            name='endHour'
            label='Hora de finalizacion'
            placeholder='Hora de finalizacion'
            hookForm={{
              register,
              validations: {
                pattern: {
                  value: /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/,
                  message: 'La hora debe ser en formato 12 horas, ejemplo: 10:30 AM'
                },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            defaultValue={initiative.endHour}
            errorMessage={errors?.endHour?.message?.toString()}
          />
          <Input
            type='text'
            name='extraInfo'
            label='Informacion Extra'
            placeholder='Informacion Extra'
            hookForm={{
              register,
              validations: {
                maxLength: { value: 80, message: 'Maximo 80 caracteres' },
                minLength: { value: 5, message: 'Minimo 5 caracteres' },
                required: { value: true, message: 'Este campo es requerido' }
              }
            }}
            defaultValue={initiative.extraInfo}
            errorMessage={errors?.extraInfo?.message?.toString()}
          />
          <Input
            type='file'
            name='thumbnail'
            label='Imagen de portada'
            placeholder='Selecciona una imagen'
            hookForm={{
              register,
              validations: {
                required: false,
                validate: (value: FileList) => {
                  if (value.length > 0) {
                    if (value[0].size > 5000000) {
                      return 'La imagen no debe pesar mas de 5MB'
                    }
                  }
                }
              }
            }}
            errorMessage={errors?.thumbnail?.message?.toString()}
          />
        </div>
        <Button type='submit' title='Guardar cambios' />
      </form>
    </div>
  )
}

export default ConfigSection
