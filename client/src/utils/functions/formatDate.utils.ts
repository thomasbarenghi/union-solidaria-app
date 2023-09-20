export const formatDate = (date: Date) => {
  const originalDate = new Date(date)
  const day = originalDate.getDate().toString().padStart(2, '0')
  const month = (originalDate.getMonth() + 1).toString().padStart(2, '0')
  const year = originalDate.getFullYear().toString()
  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
}
