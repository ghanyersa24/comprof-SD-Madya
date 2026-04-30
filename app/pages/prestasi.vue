<script setup lang="ts">
import { ref, computed } from 'vue'
import imgPrestasi from '~/assets/images/prestasi.jpeg'
import imgPrestasiPortrait from '~/assets/images/prestasi_portrait.png'
import imgTahfidz from '~/assets/images/tahfidz.png'
import imgPembelajaran from '~/assets/images/pembelajaran.png'
import imgGaleriKegiatan from '~/assets/images/galeri_kegiatan.png'
import imgFutsal from '~/assets/images/futsal.png'
import imgTapakSuci from '~/assets/images/tapak_suci.png'
import imgHizbulWathan from '~/assets/images/hizbul_wathan.png'
import imgMarchingBand from '~/assets/images/marching_band.png'

const activeFilter = ref('SEMUA')
const filters = ['SEMUA', 'AKADEMIK', 'OLAHRAGA']
const searchQuery = ref('')

const achievements = [
  {
    id: 1,
    title: 'Borong Juara FLS3N Tingkat Kecamatan',
    category: 'AKADEMIK',
    level: 'Tingkat Kecamatan',
    year: '2026',
    description: 'Meraih juara di berbagai bidang seni pada Festival & Lomba Seni Siswa Nasional tingkat kecamatan Ambulu.',
    student: 'Tim FLS3N SDM',
    image: imgPrestasi,
  },
  {
    id: 2,
    title: "Juara 1 Tahfidz Qur'an 2 Juz",
    category: 'AKADEMIK',
    level: 'Tingkat Provinsi',
    year: '2023',
    description: "Meraih predikat terbaik dalam kategori 2 Juz tingkat Provinsi Jawa Timur.",
    student: 'Ahmad Fauzi (Kelas 5)',
    image: imgTahfidz,
  },
  {
    id: 3,
    title: 'Juara 1 Olimpiade Matematika',
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2024',
    description: 'Meraih juara pertama dalam kompetisi olimpiade matematika tingkat Kabupaten Jember.',
    student: 'Rizka Aulia (Kelas 6)',
    image: imgPembelajaran,
  },
  {
    id: 4,
    title: 'Juara 1 Lomba Menulis Cerpen',
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2023',
    description: 'Karya cerpen bertema lingkungan hidup berhasil meraih juara pertama tingkat kabupaten.',
    student: 'Nadia Putri (Kelas 5)',
    image: imgGaleriKegiatan,
  },
  {
    id: 5,
    title: 'Juara 2 Olimpiade IPA',
    category: 'AKADEMIK',
    level: 'Tingkat Provinsi',
    year: '2022',
    description: 'Finalis terbaik olimpiade ilmu pengetahuan alam tingkat Provinsi Jawa Timur.',
    student: 'Farel Hendra (Kelas 6)',
    image: imgPembelajaran,
  },
  {
    id: 6,
    title: 'Juara 1 Lomba Kaligrafi',
    category: 'AKADEMIK',
    level: 'Tingkat Provinsi',
    year: '2024',
    description: 'Meraih emas dalam lomba kaligrafi kategori naskh pada kompetisi seni Islam tingkat provinsi.',
    student: 'Zahra Nabila (Kelas 4)',
    image: imgTahfidz,
  },
  {
    id: 7,
    title: 'Juara 2 Cerdas Cermat PAI',
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2023',
    description: 'Tim cerdas cermat pendidikan agama Islam berhasil meraih peringkat kedua se-kabupaten.',
    student: 'Tim Kelas 6',
    image: imgGaleriKegiatan,
  },
  {
    id: 8,
    title: 'Juara 1 Pidato Bahasa Indonesia',
    category: 'AKADEMIK',
    level: 'Tingkat Kecamatan',
    year: '2024',
    description: 'Tampil memukau dengan tema nilai-nilai kebangsaan dalam lomba pidato tingkat kecamatan.',
    student: 'Dinda Rahayu (Kelas 5)',
    image: imgMarchingBand,
  },
  {
    id: 9,
    title: 'Juara 3 Olimpiade Bahasa Inggris',
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2022',
    description: 'Berhasil masuk tiga besar dalam kompetisi bahasa Inggris antar SD se-kabupaten.',
    student: 'Kevin Santoso (Kelas 6)',
    image: imgPembelajaran,
  },
  {
    id: 10,
    title: 'Juara 1 Lomba Baca Puisi',
    category: 'AKADEMIK',
    level: 'Tingkat Kecamatan',
    year: '2025',
    description: 'Penampilan ekspresif dan penuh penghayatan mengantarkan menjadi juara pertama.',
    student: 'Anisa Permata (Kelas 4)',
    image: imgGaleriKegiatan,
  },
  {
    id: 11,
    title: "Juara 1 Tahfidz Qur'an 5 Juz",
    category: 'AKADEMIK',
    level: 'Tingkat Kabupaten',
    year: '2025',
    description: "Prestasi luar biasa menghafal 5 juz Al-Qur'an dengan tajwid terbaik se-kabupaten.",
    student: 'Bilal Yusuf (Kelas 6)',
    image: imgTahfidz,
  },
  {
    id: 12,
    title: 'Juara 2 Lomba Sains Kreatif',
    category: 'AKADEMIK',
    level: 'Tingkat Kecamatan',
    year: '2024',
    description: 'Proyek inovasi daur ulang sampah plastik meraih penghargaan kedua tingkat kecamatan.',
    student: 'Tim Kelas 5',
    image: imgPembelajaran,
  },
  {
    id: 13,
    title: 'Borong Juara O2SN Tingkat Kecamatan',
    category: 'OLAHRAGA',
    level: 'Tingkat Kecamatan',
    year: '2026',
    description: 'Meraih berbagai medali dalam Olimpiade Olahraga Siswa Nasional tingkat kecamatan Ambulu.',
    student: 'Tim O2SN SDM',
    image: imgPrestasiPortrait,
  },
  {
    id: 14,
    title: 'Juara 1 Atletik 100m Putra O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kabupaten',
    year: '2024',
    description: 'Meraih emas lari 100 meter putra dengan catatan waktu terbaik se-kabupaten.',
    student: 'Arya Bagas (Kelas 6)',
    image: imgPrestasiPortrait,
  },
  {
    id: 15,
    title: 'Juara 1 Pencak Silat Putra',
    category: 'OLAHRAGA',
    level: 'Tingkat Provinsi',
    year: '2023',
    description: 'Tampil gagah dan penuh teknik memukau untuk meraih emas pencak silat tingkat provinsi.',
    student: 'Satria Wibawa (Kelas 5)',
    image: imgTapakSuci,
  },
  {
    id: 16,
    title: 'Juara 2 Renang Gaya Bebas O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kabupaten',
    year: '2023',
    description: 'Catatan waktu terbaik kedua dalam nomor renang 50 meter gaya bebas putri.',
    student: 'Syifa Aulia (Kelas 6)',
    image: imgGaleriKegiatan,
  },
  {
    id: 17,
    title: 'Juara 1 Bulu Tangkis Putra O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kecamatan',
    year: '2025',
    description: 'Mendominasi pertandingan bulu tangkis putra dengan teknik smash yang tajam.',
    student: 'Rafi Saputra (Kelas 5)',
    image: imgHizbulWathan,
  },
  {
    id: 18,
    title: 'Juara 3 Futsal O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kabupaten',
    year: '2022',
    description: 'Tim futsal bermain dengan semangat juara dan berhasil meraih posisi ketiga tingkat kabupaten.',
    student: 'Tim Futsal SDM',
    image: imgFutsal,
  },
  {
    id: 19,
    title: 'Juara 1 Tenis Meja Putri O2SN',
    category: 'OLAHRAGA',
    level: 'Tingkat Kecamatan',
    year: '2024',
    description: 'Menguasai meja dengan smash presisi untuk meraih gelar juara putri tingkat kecamatan.',
    student: 'Laila Fitri (Kelas 4)',
    image: imgPrestasiPortrait,
  },
  {
    id: 20,
    title: 'Juara 2 Panahan Tingkat Provinsi',
    category: 'OLAHRAGA',
    level: 'Tingkat Provinsi',
    year: '2023',
    description: 'Keahlian memanah yang mengagumkan mengantarkan pada peringkat kedua tingkat provinsi.',
    student: 'Haris Maulana (Kelas 6)',
    image: imgHizbulWathan,
  },
]

const filteredAchievements = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return achievements.filter(item => {
    const matchesFilter = activeFilter.value === 'SEMUA' || item.category === activeFilter.value
    const matchesSearch = !q
      || item.title.toLowerCase().includes(q)
      || item.description.toLowerCase().includes(q)
      || item.student?.toLowerCase().includes(q)
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
      <div class="max-w-7xl mx-auto relative z-10 text-center">
        <AppBadge class="mb-6">Sekolah Juara</AppBadge>
        <h1
          class="font-headline text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Tradisi Mencetak <br />
          <span class="text-secondary-container">Generasi Berprestasi</span>
        </h1>
        <p
          class="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed italic"
        >
          "Kokoh dalam Spiritual, Unggul dalam Intelektual.."
        </p>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <StatCard
            v-for="stat in stats"
            :key="stat.label"
            :value="stat.value"
            :label="stat.label"
          />
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
            <button
              v-for="filter in filters"
              :key="filter"
              :class="[
                'px-4 py-2 rounded-full font-label text-xs font-medium cursor-pointer transition-colors whitespace-nowrap',
                activeFilter === filter
                  ? 'bg-primary text-white font-bold'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
              ]"
              @click="activeFilter = filter"
            >{{ filter }}</button>
          </div>
        </div>

        <!-- Search bar -->
        <div class="relative max-w-md">
          <AppIcon
            name="search"
            class="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl pointer-events-none"
          />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari prestasi, siswa, atau kategori..."
            class="w-full pl-12 pr-4 py-3 rounded-full bg-surface-container-high font-body text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary transition"
          />
          <button
            v-if="searchQuery"
            class="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
            @click="searchQuery = ''"
          >
            <AppIcon name="close" class="text-lg" />
          </button>
        </div>

        <!-- Result count -->
        <p class="font-label text-sm text-on-surface-variant">
          Menampilkan <span class="font-bold text-primary">{{ filteredAchievements.length }}</span> prestasi
        </p>
      </div>

      <!-- Achievement Cards Grid -->
      <div
        v-if="filteredAchievements.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="item in filteredAchievements"
          :key="item.id"
          class="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow border border-outline-variant/30"
        >
          <!-- Card image -->
          <div class="h-44 overflow-hidden flex-shrink-0">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div class="p-6 flex flex-col gap-4 flex-1">
          <div class="flex justify-between items-start gap-2">
            <AppBadge variant="subtle">{{ item.level }}</AppBadge>
            <span class="font-label text-xs font-bold text-on-surface-variant flex-shrink-0">{{ item.year }}</span>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center flex-shrink-0">
              <AppIcon
                :name="item.category === 'OLAHRAGA' ? 'sports' : 'emoji_events'"
                :filled="true"
                class="text-secondary text-xl"
              />
            </div>
            <div>
              <span
                :class="[
                  'font-label text-[10px] font-bold uppercase tracking-widest',
                  item.category === 'OLAHRAGA' ? 'text-tertiary' : 'text-secondary'
                ]"
              >{{ item.category }}</span>
              <h4 class="font-headline text-base font-bold text-primary leading-snug mt-0.5">
                {{ item.title }}
              </h4>
            </div>
          </div>

          <p class="font-body text-sm text-on-surface-variant leading-relaxed">
            {{ item.description }}
          </p>

          <div
            v-if="item.student"
            class="mt-auto pt-4 border-t border-outline-variant/40 flex items-center gap-2"
          >
            <AppIcon name="person" class="text-sm text-on-surface-variant" />
            <span class="font-label text-xs font-bold text-on-surface-variant">{{ item.student }}</span>
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
        <button
          class="mt-2 px-5 py-2 rounded-full bg-primary text-white font-label text-sm font-bold"
          @click="searchQuery = ''; activeFilter = 'SEMUA'"
        >Reset Pencarian</button>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection
      title="Siapkan Masa Depan Gemilang Buah Hati Anda"
      subtitle="Bergabunglah dengan komunitas pembelajar kami dan jadilah bagian dari tradisi juara di SD Muhammadiyah 01 Ambulu."
      cta-primary="Daftar Sekarang"
      cta-secondary="Konsultasi Pendidikan"
    />
  </div>
</template>
