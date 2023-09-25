// Cache<any>

export const localStorageProvider = (): Map<string, never> => {
  const map: Map<string, never> = new Map(JSON.parse(localStorage.getItem('app-cache') ?? '[]'))

  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  return map
}