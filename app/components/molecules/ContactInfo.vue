<script setup lang="ts">
interface Props {
  icon: string
  title: string
  content: string
}

defineProps<Props>()
</script>

<template>
  <div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15">
    <div class="flex items-start gap-4">
      <AppIcon :name="icon" class="text-secondary" />
      <div>
        <h4 class="font-headline font-bold text-sm text-primary uppercase tracking-wider mb-1">
          {{ title }}
        </h4>
        <p class="font-body text-on-surface leading-relaxed">
          <slot>{{ content }}</slot>
        </p>
      </div>
    </div>
  </div>
</template>
