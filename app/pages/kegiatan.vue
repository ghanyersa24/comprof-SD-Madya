<script setup lang="ts">
useSeoMeta({
  title: 'Kegiatan Sekolah - SD Muhammadiyah 01 Ambulu',
  description: 'Program kegiatan pembiasaan spiritual dan ekstrakurikuler SD Muhammadiyah 1 Ambulu. Sholat Dhuha, Tahfidz Quran, Futsal, Tapak Suci, dan lainnya.',
  ogTitle: 'Kegiatan Sekolah - SD Muhammadiyah 01 Ambulu',
  ogDescription: 'Membentuk generasi Robbani yang cerdas, kreatif, dan berakhlak mulia.',
})

const spiritualActivities = [
  {
    title: 'Sholat Dhuha',
    description: 'Dilaksanakan setiap pagi sebelum memulai pembelajaran untuk melatih kedisiplinan dan keberkahan hari.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_mD4UmPo9VHhwC4xAhaMPCfpcMiYF6uo1M7FwS3b5teq6p-YGR2SygJuRycR64U3eO_v9JC0Kqrv4vZb7R0a1tZp_RqNbhHMTgGJLwm_xNwwVLhj0bZxxA5SjY4ttGVTqmkJYKUwRDlblgiC7yzsjlMMVymz40KPzIIp4ot_OrcVokg7ZUT83MWuPeqIm7siI6ySrdYWw4vRbLunA-fH9KFFg_f2rqzg_o4i5IjSqStJNYpxw1sjReZp6ECYDUuPMNDHiqAjtS6M',
  },
  {
    title: 'Dhuhur Berjamaah',
    description: 'Membiasakan sholat tepat waktu dan mempererat ukhuwah antar siswa dan guru.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC19_CXTosaWMjzNs5k8vIAcJfHqc1QSo6Xq_ifxlXrjPae_vPhjWZYDj-degA0WCU1xkSLwwqcqbbJfyYujzJ3ZHCwotAT9Xhrm7oevO1F2I2xR9oGix6iiv_1a-GHL37p9ON1gU32Tj-LyiIIoYspPPveD-HV9x-iPrFzKexiqze_p_2ZCNaldI7Z3GlM1YZqAysTsqID03SoYNH_z0nUH-jFXTOFFKmoXiau09K92iWlnP5wY3LQYLzJuNRZxdNpZfjWqwUl-nM',
  },
  {
    title: 'Tahfidz Quran',
    description: 'Program hafalan Al-Quran dengan metode yang menyenangkan sesuai perkembangan usia anak.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgL3xlefjEY3rDCUWLBqh2sn-CS1Qb7bFTRw_Ox6io_z3PefWSGmOKiJYpOQnjjhoQ4Xb2tqk3jWaE1JSAmCShj4nirLK0qeI9xou_8UnxHUvqy7WrI-HDuvdKoI78tcbNv759pcIMBL6QhS2x15gIzLt5p7rDQgLFtZ9x6B2o-hDGQ1ZEZRYgjVgDO7grLszLiLxr6QiNouB61B11ZpximFt1RlMHNDoXxG_uyxo8fqPqKZJKOOkwkBMWkIVOal2X0HjgFjfn7pg',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="px-6 mb-12 -mt-20 pt-24">
      <div
        class="relative rounded-xl overflow-hidden aspect-[4/5] md:aspect-video flex items-end p-8 bg-primary-container max-w-7xl mx-auto">
        <div class="absolute inset-0 opacity-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQph-FNHvtLJcCuGfpf1zRcq8q0F2VJ5vcCue5Z2LEsFCAUB_0sGkFhTs2A827c4sWtO-Hbkrts2nOyYTeM1yMSGlOKCWYe5q47diuNnOG81ey_8kINx5I37yNmgFInPN2F8-pw3PJlCCmRmavZXSqP1IBkc0gVZKgxEMXZ_umAeiyIWUhKE1uyJ_UYFiPJ1M7ea0R5B3ZEfFiV0OBlFoNVwQinNu1DBLT2gtKn2RRFSRAiyTTqXekTbj2q-z7Llz1y1yZIoGdWEs"
            alt="Kegiatan belajar siswa" class="w-full h-full object-cover" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
        <div class="relative z-10 max-w-2xl">
          <AppBadge class="mb-4">Program Unggulan</AppBadge>
          <h1 class="text-4xl md:text-6xl font-headline font-extrabold text-white leading-tight tracking-tight mb-4">
            Kegiatan Sekolah
          </h1>
          <p class="text-lg md:text-xl text-white/90 font-body italic leading-relaxed">
            Kokoh dalam Spiritual, Unggul dalam Intelektual..
          </p>
        </div>
      </div>
    </section>

    <!-- Spiritual Section -->
    <section class="px-6 mb-16 max-w-7xl mx-auto">
      <div class="mb-8 border-l-4 border-secondary pl-6">
        <h2 class="text-primary font-headline text-2xl font-bold uppercase tracking-widest mb-2">
          Pembiasaan Spiritual
        </h2>
        <p class="text-on-surface-variant italic text-lg max-w-lg">
          Menanamkan nilai-nilai keislaman sejak dini melalui rutinitas ibadah harian yang bermakna.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ActivityCard v-for="activity in spiritualActivities" :key="activity.title" :title="activity.title"
          :description="activity.description" :image="activity.image" />
      </div>
    </section>

    <!-- Extracurricular Section -->
    <section class="bg-surface-container-low py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-primary font-headline text-3xl font-extrabold uppercase tracking-[0.2em] mb-4">
            Ekstrakurikuler
          </h2>
          <div class="h-1 w-20 bg-secondary mx-auto" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          <!-- Futsal -->
          <div
            class="md:col-span-2 md:row-span-1 bg-surface-container-lowest rounded-xl p-8 relative overflow-hidden group">
            <div class="relative z-10 flex flex-col h-full justify-end">
              <AppIcon name="sports_soccer" class="text-secondary text-4xl mb-4" />
              <h4 class="font-headline font-bold text-primary text-2xl mb-2">Futsal</h4>
              <p class="font-body text-on-surface-variant max-w-xs">
                Melatih kerjasama tim, fisik, dan sportifitas siswa di lapangan hijau.
              </p>
            </div>
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <AppIcon name="sports_soccer" class="text-[120px]" />
            </div>
          </div>

          <!-- Tapak Suci -->
          <div
            class="md:col-span-1 md:row-span-2 bg-primary-container rounded-xl p-8 flex flex-col justify-between group overflow-hidden">
            <div class="relative z-10">
              <AppIcon name="sports_martial_arts" class="text-secondary-container text-4xl mb-4" />
              <h4 class="font-headline font-bold text-white text-2xl mb-4">Tapak Suci</h4>
              <p class="font-body text-white/80">
                Seni bela diri khas Muhammadiyah untuk kemandirian dan keberanian diri.
              </p>
            </div>
            <div class="mt-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpy9RYzvDLRzeG9QMKrfhGBWpUBxR-zPz-5UJfgav4EkKugGY-Tek3IDJrw1ZcChnEAVQeRACN6qksdWtJ7RtRYWCYVpfr8TPPF6StQQF1NBI2ymrXYKnLuUKegzjAeLiJ2dPCGyqnWbmFLnnrBX-ngdDEAf71mX0XVyc2laCAMmD2NeunZcANlPAFUvO8YEsW9axCc8m0H-gFkc_inEruomTUZkYYijZNwDElFchpKH9djPa_fvOxipfIDXluEqAinnOujsQCRQI"
                alt="Latihan Tapak Suci"
                class="rounded-lg h-32 w-full object-cover shadow-lg opacity-60 group-hover:opacity-100 transition-opacity"
                loading="lazy" />
            </div>
          </div>

          <!-- Hizbul Wathan -->
          <div
            class="md:col-span-1 md:row-span-1 bg-secondary-container rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <AppIcon name="forest" class="text-primary text-5xl mb-4" />
            <h4 class="font-headline font-bold text-primary text-2xl mb-2">Hizbul Wathan</h4>
            <p class="font-body text-on-secondary-container text-sm">
              Kepanduan untuk mencetak karakter mandiri dan peduli lingkungan.
            </p>
          </div>

          <!-- Marching Band -->
          <div class="md:col-span-2 md:row-span-1 bg-surface-container-highest rounded-xl p-8 flex items-center gap-8">
            <div class="flex-1">
              <AppIcon name="music_note" class="text-primary text-4xl mb-4" />
              <h4 class="font-headline font-bold text-primary text-2xl mb-2">Marching Band</h4>
              <p class="font-body text-on-surface-variant">
                Harmonisasi nada dan langkah dalam balutan kedisiplinan musik yang megah.
              </p>
            </div>
            <div class="hidden sm:block w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBvcXR307HzoQlSV5zVYv5fQ0c1P03HrsAFNGjrRqspQkVx7nQqTufKY7O6q-DcILiZiJDY-eldR-jaCr5IzFeROf_F84LgZwrGg8FfaS1ah7eVbD9SnO-K9phvwPoe-Q1dOAxiCUzJtYb4aSUCg34I-wXag_O6pKNWoYuqCDjyTaBotO2SDqTfGrqY1aMnjOsuTLLNANQ9BWh9yEaPHQ8v83AS-VL2YD6Iw33GoElvFRLRmN4zbISWnFh4jIvqigqUjpXoZ3s0v0"
                alt="Marching Band" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="py-24 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
      <AppIcon name="format_quote" :filled="true" class="text-secondary text-5xl mb-6 opacity-30" />
      <p class="text-3xl md:text-4xl font-body italic text-primary leading-tight mb-8">
        "Pendidikan adalah apa yang tersisa setelah seseorang melupakan apa yang telah dipelajari di sekolah."
      </p>
      <div class="flex flex-col items-center">
        <div class="h-px w-12 bg-outline-variant mb-4" />
        <p class="font-headline font-bold text-on-surface-variant tracking-widest uppercase text-xs">
          KH Ahmad Dahlan
        </p>
      </div>
    </section>
  </div>
</template>
