interface Classes {
  [key: string]: string
}

export const classesBuilder = (type: string, custom: string) => {
  const classes: Classes = {
    t1: 'text-3xl font-normal leading-[140%]' + ' ' + custom,
    t2: 'text-2xl leading-[140%]' + ' ' + custom,
    t3: 'text-xl  leading-[140%]' + ' ' + custom,
    subtitle: 'text-lg leading-[140%]' + ' ' + custom,
    base: 'text-base font-light leading-[155%]' + ' ' + custom,
    small: 'text-sm font-light leading-[155%]' + ' ' + custom
  }

  return classes[type]
}
