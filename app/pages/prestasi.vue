<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ApiAchievement } from '~/composables/api/types'

const { data: achievementsData } = await useAchievements()
const achievements = computed<ApiAchievement[]>(() => achievementsData.value?.data ?? [])

const activeFilter = ref('SEMUA')
const filters = ['SEMUA', 'AKADEMIK', 'OLAHRAGA', 'SENI', 'LAINNYA']
const searchQuery = ref('')
const categoryMap: Record<string, string> = {
  AKADEMIK: 'ACADEMIC',
  OLAHRAGA: 'SPORT',
  SENI: 'ART',
  LAINNYA: 'OTHER',
}

const filteredAchievements = computed(() => {
  const q = searchQuery.value.toLowerCase()
  const apiCategory = activeFilter.value === 'SEMUA' ? null : categoryMap[activeFilter.value]
  return achievements.value.filter(item => {
    const matchesFilter = !apiCategory || item.category === apiCategory
    const studentName = item.student?.name?.toLowerCase() ?? ''
    const matchesSearch = !q
      || item.title.toLowerCase().includes(q)
      || (item.description?.toLowerCase().includes(q) ?? false)
      || studentName.includes(q)
    return matchesFilter && matchesSearch
  })
})

useSeoMeta({
  title: "Prestasi & Penghargaan - SD Muhammadiyah 01 Ambulu",
  description:
    "Prestasi akademik dan non-akademik SD Muhammadiyah 1 Ambulu. Tradisi mencetak generasi berprestasi dengan 500+ trofi nasional.",
  ogTitle: "Prestasi & Penghargaan - SD Muhammadiyah 01 Ambulu",
  ogDescription:
    "Tradisi mencetak generasi berprestasi. 500+ trofi nasional, 98% lulusan terbaik.",
})

const stats = [
  { value: "500+", label: "Trofi" },
  { value: "98%", label: "Lulusan Terbaik" },
  { value: "12", label: "Ekskul Unggulan" },
  { value: "20+", label: "Tahun Pengabdian" },
]


</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative px-6 py-16 md:py-24 bg-primary text-white overflow-hidden -mt-20 pt-32">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-secondary-container rounded-full blur-[100px] -mr-48 -mt-48" />
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary-container rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>
      <div class="max-w-7xl mx-auto relative z-10 text-center">
        <AppBadge class="mb-6">Sekolah Juara</AppBadge>
        <h1 class="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Tradisi Mencetak <br />
          <span class="text-secondary-container">Generasi Berprestasi</span>
        </h1>
        <p class="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed italic">
          "Kokoh dalam Spiritual, Unggul dalam Intelektual.."
        </p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <StatCard v-for="stat in stats" :key="stat.label" :value="stat.value" :label="stat.label" />
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <!-- Header -->
      <div class="flex flex-col gap-6 mb-10">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div class="max-w-xl">
            <h2 class="font-headline text-3xl font-bold text-primary mb-3 leading-none">
              Daftar Prestasi
            </h2>
            <p class="font-body text-lg text-on-surface-variant">
              Sorotan prestasi akademik dan non-akademik siswa-siswi terbaik kami
              di tingkat regional maupun nasional.
            </p>
          </div>

          <!-- Filter buttons -->
          <div class="flex gap-2 flex-shrink-0">
            <button v-for="filter in filters" :key="filter" :class="[
              'px-4 py-2 rounded-full font-label text-xs font-medium cursor-pointer transition-colors whitespace-nowrap',
              activeFilter === filter
                ? 'bg-primary text-white font-bold'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
            ]" @click="activeFilter = filter">{{ filter }}</button>
          </div>
        </div>

        <!-- Search bar -->
        <div class="relative max-w-md">
          <AppIcon name="search"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl pointer-events-none" />
          <input v-model="searchQuery" type="text" placeholder="Cari prestasi, siswa, atau kategori..."
            class="w-full pl-12 pr-4 py-3 rounded-full bg-surface-container-high font-body text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary transition" />
          <button v-if="searchQuery"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
            @click="searchQuery = ''">
            <AppIcon name="close" class="text-lg" />
          </button>
        </div>

        <!-- Result count -->
        <p class="font-label text-sm text-on-surface-variant">
          Menampilkan <span class="font-bold text-primary">{{ filteredAchievements.length }}</span> prestasi
        </p>
      </div>

      <!-- Achievement Cards Grid -->
      <div v-if="filteredAchievements.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in filteredAchievements" :key="item.id"
          class="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow border border-outline-variant/30">
          <!-- Card image -->
          <div class="h-44 overflow-hidden flex-shrink-0">
            <img :src="item.image" :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" />
          </div>

          <div class="p-6 flex flex-col gap-4 flex-1">
            <div class="flex justify-between items-start gap-2">
              <AppBadge variant="subtle">{{ item.level }}</AppBadge>
              <span class="font-label text-xs font-bold text-on-surface-variant flex-shrink-0">{{ item.year }}</span>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center flex-shrink-0">
                <AppIcon :name="item.category === 'SPORT' ? 'sports' : 'emoji_events'" :filled="true"
                  class="text-secondary text-xl" />
              </div>
              <div>
                <span :class="[
                  'font-label text-[10px] font-bold uppercase tracking-widest',
                  item.category === 'SPORT' ? 'text-tertiary' : 'text-secondary'
                ]">{{ item.category }}</span>
                <h4 class="font-headline text-base font-bold text-primary leading-snug mt-0.5">
                  {{ item.title }}
                </h4>
              </div>
            </div>

            <p class="font-body text-sm text-on-surface-variant leading-relaxed">
              {{ item.description }}
            </p>

            <!-- Contributor -->
            <div v-if="item.student"
              class="mt-auto pt-4 border-t border-outline-variant/40">
              <div class="flex items-center gap-2">
                <AppIcon name="person" class="text-sm text-on-surface-variant" />
                <NuxtLink :to="`/siswa/${item.student.slug}`"
                  class="font-label text-xs font-bold text-primary hover:underline">
                  {{ item.student.name }}
                </NuxtLink>
              </div>
            </div>
          </div><!-- /p-6 -->
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-24 flex flex-col items-center gap-4">
        <div class="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center">
          <AppIcon name="search_off" class="text-4xl text-on-surface-variant" />
        </div>
        <div>
          <h3 class="font-headline text-xl font-bold text-on-surface mb-2">Tidak ada hasil</h3>
          <p class="font-body text-sm text-on-surface-variant">
            Coba ubah kata kunci atau pilih kategori yang berbeda.
          </p>
        </div>
        <button class="mt-2 px-5 py-2 rounded-full bg-primary text-white font-label text-sm font-bold"
          @click="searchQuery = ''; activeFilter = 'SEMUA'">Reset Pencarian</button>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection title="Siapkan Masa Depan Gemilang Buah Hati Anda"
      subtitle="Bergabunglah dengan komunitas pembelajar kami dan jadilah bagian dari tradisi juara di SD Muhammadiyah 01 Ambulu."
      cta-primary="Daftar Sekarang" cta-secondary="Konsultasi Pendidikan" />
  </div>
</template>
