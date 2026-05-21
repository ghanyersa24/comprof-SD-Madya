import type { ApiAchievement } from './types'

export function useAchievements(category?: MaybeRefOrGetter<string | undefined>) {
  const config = useRuntimeConfig()
  return useFetch<{ data: ApiAchievement[] }>(
    () => {
      const cat = toValue(category)
      const qs = cat ? `?category=${cat}` : ''
      return `${config.public.apiBase}/api/v1/achievements${qs}`
    }
  )
}
