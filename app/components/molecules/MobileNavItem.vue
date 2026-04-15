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
      'flex flex-col items-center gap-1',
      active ? 'text-[#FED65B]' : 'text-white/60'
    ]"
  >
    <AppIcon :name="icon" :filled="active" />
    <span class="font-label text-[10px] font-bold">{{ label }}</span>
  </NuxtLink>
</template>
