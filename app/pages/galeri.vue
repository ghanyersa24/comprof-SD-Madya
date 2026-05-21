<script setup lang="ts">
import { ref, computed } from 'vue'
useSeoMeta({
  title: 'Galeri Sekolah - SD Muhammadiyah 01 Ambulu',
  description: 'Dokumentasi visual kegiatan, fasilitas, dan momen berharga di SD Muhammadiyah 1 Ambulu.',
  ogTitle: 'Galeri Sekolah - SD Muhammadiyah 01 Ambulu',
  ogDescription: 'Jejak langkah dan pencapaian kami dalam mendidik generasi rabbani.',
})

import type { ApiGallery } from '~/composables/api/types'

const { data: galleriesData } = await useGalleries()
const galleryItems = computed<ApiGallery[]>(() => galleriesData.value?.data ?? [])

const categoryLabelMap: Record<string, string> = {
  Activity: 'Kegiatan',
  Achievement: 'Prestasi Siswa',
  Facility: 'Fasilitas',
  Other: 'Lainnya',
}

const filters = ['Semua Momen', 'Kegiatan', 'Prestasi Siswa', 'Fasilitas', 'Lainnya']
const activeFilter = ref('Semua Momen')
const showVideo = ref(false)

const filteredItems = computed(() =>
  activeFilter.value === 'Semua Momen'
    ? galleryItems.value
    : galleryItems.value.filter(item => categoryLabelMap[item.category] === activeFilter.value)
)
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="px-6 py-12 md:py-20 max-w-7xl mx-auto">
      <div class="flex flex-col gap-4">
        <span class="font-label text-secondary font-bold tracking-[0.2em] uppercase text-xs">Visual Documentation</span>
        <h1
          class="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tight max-w-3xl leading-[1.1]">
          Jejak Langkah &amp; <span class="text-secondary italic font-body font-normal">Pencapaian</span> Kami
        </h1>
        <p class="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
          Menangkap momen-momen berharga dalam perjalanan mendidik generasi rabbani yang unggul dalam Imtaq dan Iptek.
        </p>
      </div>
    </section>

    <!-- Video Profile -->
    <section class="px-6 mb-20 max-w-7xl mx-auto">
      <div class="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-primary-container group">
        <template v-if="!showVideo">
          <img
            src="~/assets/images/bangunan_sekolah_2.png"
            alt="Video Profil Sekolah"
            class="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            loading="lazy" />
          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-t from-primary/80 to-transparent">
            <button @click="showVideo = true"
              class="w-20 h-20 md:w-28 md:h-28 rounded-full bg-secondary-container text-primary flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all mb-6">
              <AppIcon name="play_arrow" :filled="true" class="text-4xl md:text-6xl" />
            </button>
            <h3 class="font-headline text-2xl md:text-4xl font-bold text-white mb-2">Video Profil Sekolah</h3>
            <p class="font-body text-white/80 italic text-lg">Mengenal lebih dekat lingkungan belajar SD Muhammadiyah
              Ambulu</p>
          </div>
        </template>
        <iframe v-else class="w-full h-full" src="https://www.youtube.com/embed/R9PtEAAiUUg?autoplay=1"
          title="Video Profil Sekolah" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </section>

    <!-- Gallery Filters -->
    <div class="sticky top-[72px] z-40 bg-surface/80 backdrop-blur-xl px-6 py-4 mb-8 overflow-x-auto hide-scrollbar">
      <div class="flex gap-3 max-w-7xl mx-auto">
        <button v-for="filter in filters" :key="filter" :class="[
          'px-6 py-2 rounded-full font-label text-sm font-medium whitespace-nowrap transition-colors',
          activeFilter === filter
            ? 'bg-primary text-white font-bold'
            : 'bg-surface-container-high text-primary hover:bg-surface-container-highest'
        ]" @click="activeFilter = filter">
          {{ filter }}
        </button>
      </div>
    </div>

    <!-- Bento Photo Grid -->
    <section class="px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
        <div v-for="(item, index) in filteredItems" :key="item.id"
          :class="[index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1', 'rounded-3xl overflow-hidden relative group bg-surface-container-low']">
          <img v-if="item.image" :src="item.image" :alt="item.title"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
          <div v-else class="w-full h-full bg-surface-container-high flex items-center justify-center">
            <AppIcon name="image" class="text-4xl text-on-surface-variant" />
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
            <span class="font-label text-[10px] text-secondary-container font-bold tracking-widest uppercase">{{
              categoryLabelMap[item.category] ?? item.category
              }}</span>
            <h4 class="font-headline text-xl text-white font-bold">{{ item.title }}</h4>
          </div>
        </div>

        <!-- Achievement Card -->
        <div
          class="col-span-2 row-span-1 rounded-3xl bg-primary-container p-8 flex flex-col justify-between relative overflow-hidden">
          <div class="absolute -right-10 -top-10 opacity-10">
            <AppIcon name="military_tech" :filled="true" class="text-[200px]" />
          </div>
          <div>
            <AppBadge variant="subtle" class="mb-4">Highlight 2024</AppBadge>
            <h4 class="font-headline text-2xl text-white font-bold leading-tight">
              Juara Umum Olimpiade Matematika Tingkat Kabupaten
            </h4>
          </div>
          <NuxtLink to="/prestasi"
            class="text-secondary-container font-label text-sm font-bold flex items-center gap-2 hover:gap-4 transition-all">
            Lihat Selengkapnya
            <AppIcon name="arrow_forward" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="mt-20 px-6 py-16 bg-surface-container-low">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="max-w-xl text-center md:text-left">
          <h2 class="font-headline text-3xl md:text-5xl font-extrabold text-primary mb-6">
            Ingin Menjadi Bagian Dari Kami?
          </h2>
          <p class="font-body text-xl text-on-surface-variant italic">
            Pendaftaran Peserta Didik Baru telah dibuka. Mari bertumbuh bersama dalam nilai-nilai Islami dan kecerdasan
            masa
            depan.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <AppButton href="/kontak" variant="secondary" size="lg">Daftar Sekarang</AppButton>
        </div>
      </div>
    </section>
  </div>
</template>

