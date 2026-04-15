<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <span class="font-label text-primary font-bold tracking-widest uppercase text-sm block">
    {{ text }}
  </span>
</template>
