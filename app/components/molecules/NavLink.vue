<script setup lang="ts">
interface Props {
  to: string
  label: string
  icon: string
  active?: boolean
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="to"
    :class="[
      'font-label text-sm font-medium px-3 py-2 transition-colors',
      active
        ? 'text-[#FED65B] border-b-2 border-[#735c00] font-bold'
        : 'text-white/80 hover:bg-white/10 rounded-lg'
    ]"
  >
    {{ label }}
  </NuxtLink>
</template>
