import type { ApiGallery } from './types'

export function useGalleries(category?: MaybeRefOrGetter<string | undefined>) {
  const config = useRuntimeConfig()
  return useFetch<{ data: ApiGallery[] }>(
    () => {
      const cat = toValue(category)
      const qs = cat ? `?category=${cat}` : ''
      return `${config.public.apiBase}/api/v1/galleries${qs}`
    }
  )
}
