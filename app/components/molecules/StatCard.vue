<script setup lang="ts">
interface Props {
  value: string
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
    <div class="text-secondary-container font-headline text-3xl font-bold mb-1">{{ value }}</div>
    <div class="font-label text-xs uppercase tracking-tighter text-white/60">{{ label }}</div>
  </div>
</template>
