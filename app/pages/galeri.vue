<script setup lang="ts">
useSeoMeta({
  title: 'Galeri Sekolah - SD Muhammadiyah Ambulu',
  description: 'Dokumentasi visual kegiatan, fasilitas, dan momen berharga di SD Muhammadiyah 1 Ambulu.',
  ogTitle: 'Galeri Sekolah - SD Muhammadiyah Ambulu',
  ogDescription: 'Jejak langkah dan pencapaian kami dalam mendidik generasi rabbani.',
})

const filters = ['Semua Momen', 'Kegiatan Belajar', 'Ekstrakurikuler', 'Prestasi Siswa', 'Fasilitas']
const activeFilter = ref('Semua Momen')
const showVideo = ref(false)

const galleryItems = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGqDIgNtmgiYHiftSbSWwGB2MiuURHb7jMUtoMeEAZ6CeIaF5W8XhOe8ZHHaR_NHSJITH91Hc13K5xVfCRTv8Ef-qYBUruPMdooHfcvXQVT6kTJbpZvgai42MGt7GvFZobq7txkFBBlM3LB_-dmD_vmBWAqmvW-DFu48AdwtGCmnbQIXmbhJ0waMabRIDISLLfcyUpGt7cjEHiEBDkvmocukYbwTFSCNTTVHgKgxTzFaxMHcWkr432WB0Cb4JM50aNISAqfacKv20',
    alt: 'Metode Pembelajaran Aktif',
    label: 'Akademik',
    title: 'Metode Pembelajaran Aktif',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3JEufzyVd5dBXD1EjtkIqhCyrQfHbLdZOom3rbTLKQmSNglhiwuU7-Zu4YZgyzjq-kCqvNS-SdYRLpuPDr0sl96BZM68KYfET3HTLQkJvwMy5bTxWbbGe5j4jGi5wnTE9welYsnZjPWdiey3RuCrG8h8x0_cYuC_i0Yi-eMkjExC3ikyIxjK_gWHWaINJOD3M-OP6KOwbdRKYWfvpTWEKSNP4tWonw5oYbmJ7rxKHInHkMRwgB787m76vLl8dgRptPyrH6GrSUlI',
    alt: 'Panahan Sunnah',
    label: 'Ekskul',
    title: 'Panahan Sunnah',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3m8_Z7Yo7j9X2oFhQsgo07CqG-w65oCnZf0GLlSq_qk29hcoMRIH3t_hhjXJr6upAm6_DprfRijlCfIxH2OhcvETb5SCZtsw5Gbzy-TL0JmOT7OxDi-dwxRlMALMHRa_9fywFPnNi-aa85gsba1SCMOuXcIvQiz6mI2uDgokwJkexNeRIm9ENOiMG2NQEC-tiT7goBQIlmN1BfNt_pTEf10JKQyppjjaVAzbMcyBDia3ab-4PdnT0_01shVkYVKc9WZvfbPdRXec',
    alt: 'Perpustakaan',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoDp3i603dOs1cDvdCnNaS_cEEyM8zJh6-eE6c0KyDHjl9d2-X1MgL0XfmMfM9N4sjv_OAP1Wge-wPKMAxYHrlC5lAIFbU8DGNhZpCL-APEoJqc0ryRKrBIDfgQllqWqi6NRQF4tmzhZJU61ql8cddhgj3QBO36XlBcQLhvkZzvJNPDZvyznz-JriB6JPg8PJErtAXCT1pNxu-VlDIDPs865wMKfOAe4jJUCWDoiJg79IeDpx8nTWxs0vCRAAjZBezyPMzYEOZiyI',
    alt: 'Lab Komputer',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiKRVWL8E1Ar1AscjO5uDY_UaxdlXQ_vV6Uicys-XR898qD-ltooIFVud-S13ITRqPtaIWHnfYrvRAdbm6TDgpRwRzP5wz3zRUp928SUTnJoEn2hfbKVnAyDF--6Ot7B2GCwGiRMi36P-F2fHd6QRk5BMmsI8uWxHG6gsUT6I1SoPsWW0Cb8ohIHpLVR9hZmQCAW4gDiuZnw4n5iXa-4rgIU7q25ukzfPyyNAhHews5GQtARf2X9grhUD9JvEaMFEOriNt0RHOPOU',
    alt: 'Kebun Sekolah',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaXB7wBr_EU72v4CiHCwKbmqReCAyNhuAq6kQPLzSSe30kl1Jd8uNeQFISZ_HqHufPi1suGPqiaCcsBOVP15x8LQgEqj4iL06cjg6PNMYmZEfGjGFCc3xRfhc0SB-oUEA1sfL8En7DD3xyFdAs_cz099u7mqVwo046yQkOZ4WjggQGjPgqHisQl0z8c7GnLf9mErnNwXtlqVjUZRmLV8FuqeR_zT2zSCMNRWO-IfRWz8Hjip5GdPdvotEpVePsf5nGz5BPOZPxm5g',
    alt: 'Ruang Seni',
    span: 'col-span-1 row-span-1',
  },
]
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl_3pn07llD5gfYrftib-KBiOS7mZQI3DVUpKtfgnQJZux8S1n-1mYvdonB8WAAuhKlDT9_c83Sx3bCo5H60sXYfpvUUR04uc_qkoa8G3LlvTHAVsSdDbiiUEMQL9kvolyqWpCmJRtvCrqMe3tD0rSKbdHgZRlQtbUYZ6Rim8nX9DnVKrC1KZWbmsWnzaJ-uXNMtAbGjmDWjfisr79lzcvJBab-p92SN09i5D2BIiataVOHxGMuppmdofYJEdTKU-8nYmjVTgQpzA"
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
        <div v-for="(item, index) in galleryItems" :key="index"
          :class="[item.span, 'rounded-3xl overflow-hidden relative group bg-surface-container-low']">
          <img :src="item.src" :alt="item.alt"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
          <div v-if="item.label"
            class="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
            <span class="font-label text-[10px] text-secondary-container font-bold tracking-widest uppercase">{{
              item.label
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
