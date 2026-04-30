<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { achievements } from '~/data/achievements'
import { studentById } from '~/data/students'

const activeFilter = ref('SEMUA')
const filters = ['SEMUA', 'AKADEMIK', 'OLAHRAGA']
const searchQuery = ref('')
const expandedTeamId = ref<string | null>(null)
const popoverPosition = ref({ top: 0, left: 0 })

const filteredAchievements = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return achievements.filter(item => {
    const matchesFilter = activeFilter.value === 'SEMUA' || item.category === activeFilter.value
    const studentNames = item.studentIds
      .map(id => studentById(id)?.name ?? '')
      .join(' ')
      .toLowerCase()
    const matchesSearch = !q
      || item.title.toLowerCase().includes(q)
      || item.description.toLowerCase().includes(q)
      || studentNames.includes(q)
      || (item.teamLabel?.toLowerCase().includes(q) ?? false)
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

function updatePopoverPosition() {
  if (!expandedTeamId.value) return
  const btn = document.querySelector(`[data-team-button-id="${expandedTeamId.value}"]`) as HTMLElement | null
  if (!btn) {
    // button not present (scrolled out / removed) → close
    expandedTeamId.value = null
    return
  }
  const rect = btn.getBoundingClientRect()

  // if button is completely outside viewport → close
  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    expandedTeamId.value = null
    return
  }

  // detect fixed header overlap (common header selector used in repo)
  const navbar = document.querySelector('header.fixed') as HTMLElement | null
  if (navbar) {
    const navRect = navbar.getBoundingClientRect()
    // if the button's top is behind the navbar's bottom, it's covered → close
    if (rect.top < navRect.bottom + 2) {
      expandedTeamId.value = null
      return
    }
  }

  const POPOVER_WIDTH = 256
  const POPOVER_MAX_HEIGHT = 224
  const GAP = 8

  let left = rect.left
  if (left + POPOVER_WIDTH + GAP > window.innerWidth) {
    left = Math.max(GAP, window.innerWidth - POPOVER_WIDTH - GAP)
  }
  if (left < GAP) left = GAP

  let top = rect.bottom + GAP
  if (top + POPOVER_MAX_HEIGHT + GAP > window.innerHeight) {
    const above = rect.top - POPOVER_MAX_HEIGHT - GAP
    if (above >= GAP) {
      top = above
    } else {
      top = Math.max(GAP, window.innerHeight - POPOVER_MAX_HEIGHT - GAP)
    }
  }

  popoverPosition.value = { top, left }
}

function openTeamPopover(id: string, ev: MouseEvent) {
  const newId = String(id)
  if (expandedTeamId.value === newId) {
    expandedTeamId.value = null
    return
  }
  expandedTeamId.value = newId
  // Position immediately and allow scroll/resize listeners to keep it attached
  updatePopoverPosition()
}

function handleDocumentClick(e: MouseEvent) {
  if (!expandedTeamId.value) return
  const path = (e.composedPath && (e as any).composedPath()) || (e as any).path || []
  const clickedInside = path.some((node: any) => {
    try {
      return node && node.dataset && (
        node.dataset.teamButtonId === expandedTeamId.value ||
        node.dataset.teamPopoverId === expandedTeamId.value ||
        node.dataset.teamId === expandedTeamId.value
      )
    } catch {
      return false
    }
  })
  if (!clickedInside) expandedTeamId.value = null
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  // Keep popover anchored to the button during scrolling and resizing
  window.addEventListener('scroll', updatePopoverPosition, { passive: true })
  window.addEventListener('resize', updatePopoverPosition)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  window.removeEventListener('scroll', updatePopoverPosition)
  window.removeEventListener('resize', updatePopoverPosition)
})

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
                <AppIcon :name="item.category === 'OLAHRAGA' ? 'sports' : 'emoji_events'" :filled="true"
                  class="text-secondary text-xl" />
              </div>
              <div>
                <span :class="[
                  'font-label text-[10px] font-bold uppercase tracking-widest',
                  item.category === 'OLAHRAGA' ? 'text-tertiary' : 'text-secondary'
                ]">{{ item.category }}</span>
                <h4 class="font-headline text-base font-bold text-primary leading-snug mt-0.5">
                  {{ item.title }}
                </h4>
              </div>
            </div>

            <p class="font-body text-sm text-on-surface-variant leading-relaxed">
              {{ item.description }}
            </p>

            <!-- Contributors / team -->
            <div v-if="item.studentIds.length > 0 || item.teamLabel"
              class="mt-auto pt-4 border-t border-outline-variant/40 flex flex-col gap-2">
              <div v-if="item.teamLabel" class="flex items-center gap-2 relative">
                <AppIcon name="groups" class="text-sm text-on-surface-variant" />
                <button @click="openTeamPopover(String(item.id), $event)" :data-team-button-id="String(item.id)"
                  class="font-label text-xs font-bold text-on-surface-variant hover:underline focus:outline-none">
                  {{ item.teamLabel }}
                </button>

                <Teleport to="body">
                  <div v-if="expandedTeamId === String(item.id)" :data-team-popover-id="String(item.id)"
                    :style="{ position: 'fixed', top: popoverPosition.top + 'px', left: popoverPosition.left + 'px', zIndex: 9999 }"
                    class="w-64 bg-surface-container-low rounded-lg p-3 shadow-lg border border-outline-variant">
                    <div class="font-label text-xs text-on-surface-variant mb-2">Anggota Tim</div>
                    <ul class="space-y-1 max-h-44 overflow-auto">
                      <li v-for="sid in item.studentIds" :key="sid">
                        <NuxtLink v-if="studentById(sid)" :to="`/siswa/${studentById(sid)!.slug}`"
                          class="text-primary font-label text-xs hover:underline">
                          {{ studentById(sid)!.name }}
                        </NuxtLink>
                        <span v-else class="font-label text-xs text-on-surface-variant">Unknown</span>
                      </li>
                    </ul>
                  </div>
                </Teleport>
              </div>
              <div v-else class="flex items-center gap-2 flex-wrap">
                <AppIcon name="person" class="text-sm text-on-surface-variant" />
                <template v-for="(sid, idx) in item.studentIds" :key="sid">
                  <NuxtLink v-if="studentById(sid)" :to="`/siswa/${studentById(sid)!.slug}`"
                    class="font-label text-xs font-bold text-primary hover:underline">{{ studentById(sid)!.name }}
                  </NuxtLink>
                  <span v-if="idx < item.studentIds.length - 1"
                    class="font-label text-xs text-on-surface-variant">,</span>
                </template>
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
