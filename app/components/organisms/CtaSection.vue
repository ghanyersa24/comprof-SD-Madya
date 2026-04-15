<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  ctaPrimary?: string
  ctaSecondary?: string
  ctaPrimaryLink?: string
  ctaSecondaryLink?: string
}

defineProps<Props>()
</script>

<template>
  <section class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="bg-[#002447] rounded-3xl p-12 text-center relative overflow-hidden">
        <!-- Decorative blobs -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-secondary-container opacity-5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-container opacity-20 rounded-full blur-3xl -ml-32 -mb-32" />

        <div class="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 class="font-headline font-bold text-4xl text-white">{{ title }}</h2>
          <p class="font-body text-xl text-white/80">{{ subtitle }}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <AppButton
              v-if="ctaPrimary"
              :href="ctaPrimaryLink || '/kontak'"
              variant="primary"
            >
              {{ ctaPrimary }}
            </AppButton>
            <AppButton
              v-if="ctaSecondary"
              :href="ctaSecondaryLink || '#'"
              variant="ghost"
            >
              {{ ctaSecondary }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
