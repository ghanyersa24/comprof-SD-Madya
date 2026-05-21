import type { ApiActivity } from './types'

export function useActivities(category?: MaybeRefOrGetter<string | undefined>) {
  const config = useRuntimeConfig()
  return useFetch<{ data: ApiActivity[] }>(
    () => {
      const cat = toValue(category)
      const qs = cat ? `?category=${cat}` : ''
      return `${config.public.apiBase}/api/v1/activities${qs}`
    }
  )
}

export function useActivity(slug: MaybeRefOrGetter<string>) {
  const config = useRuntimeConfig()
  return useFetch<{ data: ApiActivity }>(
    () => `${config.public.apiBase}/api/v1/activities/${toValue(slug)}`
  )
}
