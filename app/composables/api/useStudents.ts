import type { ApiStudent } from './types'

export function useStudents() {
  const config = useRuntimeConfig()
  return useFetch<{ data: ApiStudent[] }>(
    `${config.public.apiBase}/api/v1/students`
  )
}

export function useStudent(slug: MaybeRefOrGetter<string>) {
  const config = useRuntimeConfig()
  return useFetch<{ data: ApiStudent }>(
    () => `${config.public.apiBase}/api/v1/students/${toValue(slug)}`
  )
}
