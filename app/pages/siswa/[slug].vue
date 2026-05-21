<script setup lang="ts">
import { computed } from 'vue'
import type { ApiStudent, ApiAchievement } from '~/composables/api/types'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data, error } = await useStudent(slug)

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Siswa tidak ditemukan',
    fatal: true,
  })
}

const student = computed<ApiStudent | null>(() => data.value?.data ?? null)

function studentInitials(name: string): string {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase()
}

const studentAchievements = computed(() =>
  (student.value?.achievements ?? [])
    .slice()
    .sort((a, b) => Number(b.year ?? 0) - Number(a.year ?? 0))
)

const achievementsByYear = computed(() => {
  const groups = new Map<string, ApiAchievement[]>()
  for (const a of studentAchievements.value) {
    const year = a.year ?? 'Unknown'
    if (!groups.has(year)) groups.set(year, [])
    groups.get(year)!.push(a)
  }
  return Array.from(groups.entries())
})

const levelRank: Record<string, number> = {
  'District Level': 1,
  'Regency Level': 2,
  'Provincial Level': 3,
  'National Level': 4,
}

const stats = computed(() => {
  const all = studentAchievements.value
  const academic = all.filter(a => a.category === 'ACADEMIC').length
  const sport = all.filter(a => a.category === 'SPORT').length
  const highest = all.reduce<string | null>((acc, a) => {
    if (!a.level) return acc
    if (!acc) return a.level
    return (levelRank[a.level] ?? 0) > (levelRank[acc] ?? 0) ? a.level : acc
  }, null)
  return {
    total: all.length,
    academic,
    sport,
    highest: highest ?? '-',
  }
})

useSeoMeta({
  title: () => `${student.value?.name} - Profil Siswa | SD Muhammadiyah 01 Ambulu`,
  description: () =>
    student.value?.bio ?? `Profil siswa ${student.value?.name} dan daftar prestasinya di SD Muhammadiyah 01 Ambulu.`,
})
</script>

<template>
  <div v-if="student">
    <!-- Hero -->
    <section
      class="relative px-6 py-16 md:py-24 bg-primary text-white overflow-hidden -mt-20 pt-32"
    >
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-secondary-container rounded-full blur-[100px] -mr-48 -mt-48"
        />
        <div
          class="absolute bottom-0 left-0 w-96 h-96 bg-primary-container rounded-full blur-[100px] -ml-48 -mb-48"
        />
      </div>

      <div class="max-w-5xl mx-auto relative z-10">
        <NuxtLink
          to="/prestasi"
          class="inline-flex items-center gap-2 font-label text-xs font-bold text-white/70 hover:text-white mb-8 transition-colors"
        >
          <AppIcon name="arrow_back" class="text-sm" />
          Kembali ke Prestasi
        </NuxtLink>

        <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
          <!-- Avatar -->
          <div class="flex-shrink-0">
            <div
              v-if="student.photo"
              class="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-white/20 shadow-ambient"
            >
              <img
                :src="student.photo"
                :alt="student.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              v-else
              class="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-secondary-container text-primary flex items-center justify-center font-headline text-5xl md:text-6xl font-extrabold border-4 border-white/20 shadow-ambient"
            >
              {{ studentInitials(student.name) }}
            </div>
          </div>

          <!-- Identity -->
          <div class="flex-1">
            <AppBadge class="mb-4">Profil Siswa</AppBadge>
            <h1
              class="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight"
            >
              {{ student.name }}
            </h1>
            <p class="font-label text-sm font-bold text-secondary-container uppercase tracking-widest mb-6">
              {{ student.grade }}
            </p>
            <p
              v-if="student.quote"
              class="font-body text-lg md:text-xl text-white/80 leading-relaxed italic border-l-2 border-secondary-container/50 pl-4"
            >
              "{{ student.quote }}"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats + Bio -->
    <section class="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div class="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30">
          <div class="font-headline text-3xl font-bold text-primary mb-1">{{ stats.total }}</div>
          <div class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Total Prestasi</div>
        </div>
        <div class="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30">
          <div class="font-headline text-3xl font-bold text-primary mb-1">{{ stats.academic }}</div>
          <div class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Prestasi Akademik</div>
        </div>
        <div class="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30">
          <div class="font-headline text-3xl font-bold text-primary mb-1">{{ stats.sport }}</div>
          <div class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Prestasi Olahraga</div>
        </div>
        <div class="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30">
          <div class="font-headline text-lg font-bold text-primary mb-1">{{ stats.highest }}</div>
          <div class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Pencapaian Tertinggi</div>
        </div>
      </div>

      <div v-if="student.bio || student.hobbies?.length" class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="md:col-span-2" v-if="student.bio">
          <h3 class="font-headline text-xl font-bold text-primary mb-3">Tentang</h3>
          <p class="font-body text-base text-on-surface leading-relaxed">{{ student.bio }}</p>
        </div>
        <div v-if="student.hobbies?.length">
          <h3 class="font-headline text-xl font-bold text-primary mb-3">Minat</h3>
          <div class="flex flex-wrap gap-2">
            <AppBadge
              v-for="hobby in student.hobbies"
              :key="hobby"
              variant="subtle"
            >{{ hobby }}</AppBadge>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Timeline -->
    <section class="max-w-5xl mx-auto px-6 pb-16">
      <h2 class="font-headline text-3xl font-bold text-primary mb-2 leading-none">
        Riwayat Prestasi
      </h2>
      <p class="font-body text-on-surface-variant mb-8">
        Daftar lengkap prestasi yang pernah diraih.
      </p>

      <div v-if="achievementsByYear.length > 0" class="flex flex-col gap-10">
        <div
          v-for="[year, items] in achievementsByYear"
          :key="year"
          class="flex flex-col md:flex-row gap-6"
        >
          <!-- Year column -->
          <div class="md:w-32 flex-shrink-0">
            <div class="font-headline text-3xl font-bold text-primary">{{ year }}</div>
            <div class="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              {{ items.length }} prestasi
            </div>
          </div>

          <!-- Items column -->
          <div class="flex-1 flex flex-col gap-4">
            <div
              v-for="item in items"
              :key="item.id"
              class="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex flex-col sm:flex-row gap-4"
            >
              <div v-if="item.image" class="w-full sm:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="flex items-center gap-2 flex-wrap">
                  <AppBadge v-if="item.level" variant="subtle">{{ item.level }}</AppBadge>
                  <span
                    :class="[
                      'font-label text-[10px] font-bold uppercase tracking-widest',
                      item.category === 'SPORT' ? 'text-tertiary' : 'text-secondary'
                    ]"
                  >{{ item.category }}</span>
                </div>
                <h4 class="font-headline text-lg font-bold text-primary leading-snug">
                  {{ item.title }}
                </h4>
                <p v-if="item.description" class="font-body text-sm text-on-surface-variant leading-relaxed">
                  {{ item.description }}
                </p>
                <div v-if="item.rank" class="flex items-center gap-2 mt-1">
                  <AppIcon name="emoji_events" class="text-sm text-on-surface-variant" />
                  <span class="font-label text-xs font-bold text-on-surface-variant">{{ item.rank }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-16 flex flex-col items-center gap-3">
        <div class="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
          <AppIcon name="emoji_events" class="text-3xl text-on-surface-variant" />
        </div>
        <p class="font-body text-on-surface-variant">Belum ada prestasi tercatat.</p>
      </div>
    </section>
  </div>
</template>
