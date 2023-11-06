export const nextIsDisabled = (step: number, getValues: any, errors: any) => {
  if (step === 0) {
    console.log(step, getValues()?.birthday, errors)
    const withErrors = 'firstName' in errors || 'lastName' in errors || 'birthday' in errors
    return !(getValues()?.firstName && getValues()?.lastName && getValues()?.birthday && !withErrors)
  }
  if (step === 1) {
    const withErrors = 'email' in errors || 'phone' in errors || 'username' in errors
    return !(getValues()?.email && getValues()?.phone && getValues()?.username && !withErrors)
  }
  if (step === 2) {
    const withErrors = 'password' in errors || 'repeatPassword' in errors
    return !(getValues()?.password && getValues()?.repeatPassword && !withErrors)
  }
  if (step === 3) {
    const validOrgName =
      getValues()?.role === 'organization' ? getValues()?.orgName?.length > 0 && Object.keys(errors).length === 0 : true
    return !(getValues()?.role && validOrgName)
  }

  return true
}
