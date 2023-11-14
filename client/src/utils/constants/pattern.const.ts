import {
  addressRegex,
  companyDescriptionRegex,
  companyNameRegex,
  descriptionRegex,
  emailRegex,
  extraInfoRegex,
  firstNameRegex,
  hour12Regex,
  lastNameRegex,
  organizationNameRegex,
  passwordRegex,
  phoneRegex,
  titleRegex,
  usernameRegex,
  websiteRegex
} from './regex.const'

interface Pattern {
  value: RegExp
  message: string
}

// ------------------------------ // Usuario

export const firstNamePattern: Pattern = {
  value: firstNameRegex,
  message: 'First name must be at least 2 characters long'
}

export const lastNamePattern: Pattern = {
  value: lastNameRegex,
  message: 'Last name must be at least 2 characters long'
}

export const emailPattern: Pattern = {
  value: emailRegex,
  message: 'Ingresa un email válido'
}

export const passwordPattern: Pattern = {
  value: passwordRegex,
  message: 'La contraseña debe tener al menos 8 caracteres, mayúsculas, minúsculas y números'
}

export const usernamePattern: Pattern = {
  value: usernameRegex,
  message: 'Debe tener al menos 2 caracteres, y solo puede contener letras y números'
}

export const phonePattern: Pattern = {
  value: phoneRegex,
  message: 'Debe ser un telefono valido, con codigo de pais y codigo de area. Ejemplo: +54 11 33338888'
}

export const organizationNamePattern: Pattern = {
  value: organizationNameRegex,
  message: 'Debe tener al menos 2 caracteres, y solo puede contener letras y números'
}

// ------------------------------ // Iniciativa

export const titlePattern: Pattern = {
  value: titleRegex,
  message: 'Title must be only letters and numbers, and at least 2 characters long'
}

export const descriptionPattern: Pattern = {
  value: descriptionRegex,
  message: 'Description must be only letters and numbers, and at least 2 characters long'
}

export const addressPattern: Pattern = {
  value: addressRegex,
  message: 'Address must be only letters and numbers, and at least 2 characters long'
}

export const hour12Pattern: Pattern = {
  value: hour12Regex,
  message: 'Hour must be in 12 hour format, for example: 11:30 AM'
}

export const extraInfoPattern: Pattern = {
  value: extraInfoRegex,
  message: 'Extra info must be only letters and numbers, and at least 2 characters long'
}

// ------------------------------ //

export const companyNamePattern: Pattern = {
  value: companyNameRegex,
  message: 'Company name must be at least 2 characters long, and only letters and numbers'
}

export const companyDescriptionPattern: Pattern = {
  value: companyDescriptionRegex,
  message: 'Company description must be at least 2 characters long, 1000 characters max, and only letters and numbers'
}

export const websitePattern: Pattern = {
  value: websiteRegex,
  message: 'Website must be a valid URL, for example: https://www.google.com'
}
