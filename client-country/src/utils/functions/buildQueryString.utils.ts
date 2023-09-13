export const buildQueryString = (filters: Record<string, string>, currentQuery: Record<string, string>) => {
  const filteredFilters: Record<string, string> = {}

  for (const key in filters) {
    if (filters[key] !== undefined && filters[key] !== null && filters[key] !== '') {
      filteredFilters[key] = filters[key].toString()
    }
  }

  for (const key in currentQuery) {
    if (currentQuery[key].length > 1 && (!filteredFilters[key] || filteredFilters[key] === '')) {
      filteredFilters[key] = currentQuery[key].toString()
    }
  }

  const queryString = new URLSearchParams(filteredFilters).toString()
  return queryString ? `?${queryString}` : ''
}
