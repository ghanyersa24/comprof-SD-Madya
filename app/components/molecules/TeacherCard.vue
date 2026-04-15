<script setup lang="ts">
interface Props {
  name: string
  role: string
  subject: string
  quote: string
  image: string
}

defineProps<Props>()
</script>

<template>
  <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient flex flex-col">
    <div class="h-64 relative overflow-hidden group">
      <img
        :src="image"
        :alt="name"
        class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
      <div class="absolute top-4 right-4 bg-secondary-container px-3 py-1 rounded-full">
        <span class="text-primary font-label font-bold text-[10px]">{{ subject }}</span>
      </div>
    </div>
    <div class="p-6 flex flex-col flex-grow">
      <h4 class="text-primary font-headline font-bold text-xl mb-1">{{ name }}</h4>
      <p class="text-on-surface-variant font-label text-xs font-medium mb-4">{{ role }}</p>
      <p class="text-on-surface font-body italic text-base leading-relaxed mt-auto border-l-2 border-secondary/30 pl-4">
        "{{ quote }}"
      </p>
    </div>
  </div>
</template>
