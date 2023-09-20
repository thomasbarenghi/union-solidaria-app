export const objectToFormData = (obj: Record<string, any>): FormData => {
  const formData = new FormData()

  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      if (value.length === 1) {
        formData.append(key, value[0])
      } else {
        value.forEach((item) => formData.append(key, item))
      }
    } else {
      formData.append(key, value)
    }
  }

  console.log('formData', formData)

  return formData
}
