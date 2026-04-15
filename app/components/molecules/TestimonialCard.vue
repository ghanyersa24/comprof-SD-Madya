<script setup lang="ts">
interface Props {
  quote: string
  name: string
  role: string
  image: string
}

defineProps<Props>()
</script>

<template>
  <div class="bg-white p-8 rounded-2xl shadow-ambient relative">
    <AppIcon
      name="format_quote"
      class="text-secondary/20 text-6xl absolute top-4 right-4"
    />
    <p class="font-body text-lg italic text-on-surface-variant mb-8 relative z-10">
      "{{ quote }}"
    </p>
    <div class="flex items-center gap-4">
      <img
        :src="image"
        :alt="name"
        class="w-12 h-12 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <h6 class="font-headline font-bold text-primary">{{ name }}</h6>
        <p class="font-label text-xs text-on-surface-variant">{{ role }}</p>
      </div>
    </div>
  </div>
</template>
