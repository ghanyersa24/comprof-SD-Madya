import type { ApiTeacher } from './types'

export function useTeachers() {
  const config = useRuntimeConfig()
  return useFetch<{ data: ApiTeacher[] }>(
    `${config.public.apiBase}/api/v1/teachers`
  )
}

export function useTeacher(slug: MaybeRefOrGetter<string>) {
  const config = useRuntimeConfig()
  return useFetch<{ data: ApiTeacher }>(
    () => `${config.public.apiBase}/api/v1/teachers/${toValue(slug)}`
  )
}
