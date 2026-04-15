<script setup lang="ts">
interface Props {
  image: string
  title: string
  description: string
  icon?: string
}

defineProps<Props>()
</script>

<template>
  <div class="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
    <div class="h-48 overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div class="p-6">
      <h4 class="font-headline font-bold text-primary text-xl mb-3">{{ title }}</h4>
      <p class="font-body text-on-surface-variant leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>
