<script setup lang="ts">
useSeoMeta({
  title: 'Prestasi & Penghargaan - SD Muhammadiyah Ambulu',
  description: 'Prestasi akademik dan non-akademik SD Muhammadiyah 1 Ambulu. Tradisi mencetak generasi berprestasi dengan 500+ trofi nasional.',
  ogTitle: 'Prestasi & Penghargaan - SD Muhammadiyah Ambulu',
  ogDescription: 'Tradisi mencetak generasi berprestasi. 500+ trofi nasional, 98% lulusan terbaik.',
})

const stats = [
  { value: '500+', label: 'Trofi Nasional' },
  { value: '98%', label: 'Lulusan Terbaik' },
  { value: '12', label: 'Ekskul Unggulan' },
  { value: '20+', label: 'Tahun Pengabdian' },
]

const testimonials = [
  {
    quote: 'SD Muhammadiyah Ambulu memberikan landasan karakter yang sangat kuat bagi saya. Kedisiplinan dan nilai keislaman yang diajarkan terbawa hingga saya menempuh karir sekarang.',
    name: 'dr. Hendra Wijaya',
    role: 'Alumni Tahun 2005',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOY7-Q_xKKPFps_a-VkfXKKzD2FGb6W1xRdSljH86a9K5jxkNs5Qh2VUOYoGbwIv1HZ-HDcGN71CIzIsvpa7e9AdwTjfxl8-Fbv5eNfOtTc9bA9b0STnCI2A1XfVWkfeSChFxOr6ZEzzzoCLXRMMWdlGacwlU-Inl4fgeT3fnyd0QNfEnqKFuxrxzNI5MwiW_W2IBNflkMWbfzkMm-cPAGdr-4FRvIIyVE2yxi6OQVpcd1n4-Gu_E8dRAgjpkaZbi7U4Gzj0hyi6g',
  },
  {
    quote: 'Saya sangat bersyukur pernah sekolah di sini. Gurunya sangat perhatian dan mampu menemukan bakat seni saya yang saat itu belum terlihat. Juara lukis pertama saya dimulai dari sini.',
    name: 'Siti Aminah, M.Ds',
    role: 'Desainer & Alumni 2010',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBGeaDgkApaIc-hisB_uUv8NJ1YBZsGWvQvpSUlfirSe41ddsBSiOmUoEnldO2kQ_OhJbo4LByo_EMcR6Ag8VSoAugLjVzv-rJRqdC7yC8uXh4ukWOgc2tRcxVz4Afdpmm4wlhJFsm9JX2AXYYxQl8LYiR7HT2oT8779AVBZEkBFzEM-PLmu6oFvwfTHDQ82eOOMCMV6Ne0qhdIQygXdGbmhYo3SYoh0zSTNsl_x0a1qD7gJgSXjmjOOafIh0XWF3OjC0fHzBAcGk',
  },
  {
    quote: 'Ekosistem belajarnya sangat kompetitif namun tetap suportif. Saya diajarkan untuk tidak pernah takut gagal dalam berkompetisi. Semangat juara itu masih ada dalam diri saya.',
    name: 'Ir. Rizky Pratama',
    role: 'Alumni Tahun 2008',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKy5j7x_LayIcmdtnjTLRyLgezl7CosIKu1jZHRw-SEV0ErlGcfo0kFmn1GZGTu8G9ZGKp3tipkTr6ISxIOVYkLkPvq41ykMzkcbOCSBKWq3-uQ62inBlodh8UApuZrVbL8S40l893GUq_XQa9aE6wynKhAE6Pinl-CXls1TfSnmWN_BAKsna4DzROSgMU10VOMeaFlWB_lBK5WTubRjSfZAbKK7tNkighmcRcDUWlYgKBD38YmSCg6zpm9COT5Y-fFar4D9BjN-o',
  },
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
          "Unggul dalam Imtaq dan Iptek. Kami tidak hanya mengejar nilai, tapi menempa karakter juara yang berlandaskan nilai-nilai Islami."
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

    <!-- Achievement Bento Grid -->
    <section class="max-w-7xl mx-auto px-6 py-20">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div class="max-w-xl">
          <h2 class="font-headline text-3xl font-bold text-primary mb-4 leading-none">Pencapaian Terbaru</h2>
          <p class="font-body text-lg text-on-surface-variant">
            Sorotan prestasi akademik dan non-akademik siswa-siswi terbaik kami di tingkat regional maupun nasional.
          </p>
        </div>
        <div class="flex gap-2">
          <span class="inline-flex items-center gap-1 bg-surface-container-high px-3 py-1 rounded-full font-label text-xs font-bold text-primary">SEMUA</span>
          <span class="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full font-label text-xs font-medium text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer">AKADEMIK</span>
          <span class="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full font-label text-xs font-medium text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer">OLAHRAGA</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Main Featured Card -->
        <div class="md:col-span-8 group relative overflow-hidden rounded-2xl bg-primary text-white aspect-[16/9] shadow-lg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyW0nbk7y_SmCOhteZSQBzdLdNLKD0SuuzDdcdiwLU09S0MuxSq3gkCP4nlOGlWhvX3HdyWv_N04D98c0qE9T0-W0oNaEdOgb6hkEP0xwmCq5KKkNvJnoGhet62hFE-MCCE_Uep-B0GJykz2Lq4zjMZ2JYya1W-8Eb8--k-tw2yfWBH20Q4Yl82eBsAp-pgdcrTuPVdGy3XravHK42U3HC50OcmeHeA51GDNi_4K9aq83DXqDH_BXf-wN7PXt7OGtp1Dw-qz3idNw"
            alt="Juara Olimpiade Sains"
            class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
          <div class="absolute bottom-0 left-0 p-8">
            <AppBadge class="mb-4">Juara Umum</AppBadge>
            <h3 class="font-headline text-3xl font-bold mb-2">Olimpiade Sains Nasional 2023</h3>
            <p class="font-body text-white/80 max-w-lg">
              Berhasil mempertahankan gelar Juara Umum tingkat Kabupaten selama 3 tahun berturut-turut.
            </p>
          </div>
        </div>

        <!-- Side Card -->
        <div class="md:col-span-4 bg-surface-container-lowest p-6 rounded-2xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-shadow">
          <div class="flex justify-between items-start mb-6">
            <AppIcon name="emoji_events" class="text-secondary text-4xl" />
            <span class="font-label text-[10px] font-bold text-on-surface-variant opacity-60">OKT 2023</span>
          </div>
          <h4 class="font-headline text-xl font-bold text-primary mb-3">Juara 1 Tahfidz Qur'an</h4>
          <p class="font-body text-on-surface-variant mb-4">
            Ananda Ahmad meraih predikat terbaik dalam kategori 2 Juz tingkat Provinsi Jawa Timur.
          </p>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgj3O9NQ0vBPtRnWHWHTulopR0K3BD1sG8YrYGuNm_TMWmzrTmvieSdkDo99cbR92wFjGWN63hjoF0OFgpQGQSvzATYPNjtYxJfE2Hfue6c_exb-H3EYO9D3Ls9l7bAlJSe_OvLFnkdJJQWA5fGi8oxNz3qBPi7WlvN4dO-q-rr3ONpvUvExPpPV7JeuXWFXlnpBPqc7hwVGAtioorpq2v9PS-tc8rUpCLQJfrVIxDzgbl2Y7LV33gwjQFpDPm3gQk2OLvXrTdvgI"
                alt="Ahmad Fauzi"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span class="font-label text-xs font-bold text-primary">Ahmad Fauzi (Kelas 5)</span>
          </div>
        </div>

        <!-- Bottom Cards -->
        <div class="md:col-span-4 bg-surface-container-high p-8 rounded-2xl flex flex-col justify-center">
          <p class="serif-italic text-2xl text-primary mb-2">"Pendidikan adalah paspor ke masa depan."</p>
          <p class="font-label text-sm text-secondary font-bold uppercase tracking-tighter">— Malcolm X</p>
        </div>

        <div class="md:col-span-4 group relative overflow-hidden rounded-2xl bg-white aspect-square md:aspect-auto shadow-sm">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLGXYybPwRmcxIUvzQYa2pgZFmWtlQ4FnmiEQK_96-7Al8IfgCFE0TwklZ_OGan-PiuQHuF8mHBW6Q0TVSBOb7jddXjraBlNaFmvEY7fEORoNzfMZg3B84dBfO6tB2hi6FNHhqjorxKV7ApMmInsHyNEYkryXI7vCDQAAqI5_pVzsf8ggmibYpYCZmIo4Ha30EslCjv9kZvrn4yEAgKgvXBswJ8nmMk2EIrllgH0BvBIdhelmwok7TUZN7GmP76mtgCND_vEbNymQ"
            alt="Galeri Prestasi"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
          <div class="absolute inset-0 flex items-center justify-center p-6 text-center">
            <h5 class="font-headline text-xl font-bold text-white text-shadow-premium">Galeri Prestasi Selengkapnya</h5>
          </div>
        </div>

        <div class="md:col-span-4 bg-primary-container text-white p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <AppIcon name="workspace_premium" class="text-secondary-container" />
              <span class="font-label text-xs font-bold uppercase tracking-widest text-secondary-container">Akreditasi A</span>
            </div>
            <h5 class="font-headline text-xl font-bold mb-2">Lembaga Unggul</h5>
            <p class="font-body text-white/70 text-sm">
              Terstandarisasi nasional dengan fasilitas pendukung bakat minat terlengkap di Ambulu.
            </p>
          </div>
          <NuxtLink
            to="/kegiatan"
            class="mt-6 font-label text-xs font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
          >
            PELAJARI KURIKULUM
            <AppIcon name="arrow_forward" class="text-sm" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Alumni Testimonials -->
    <section class="bg-surface-container-low py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="font-headline text-3xl font-bold text-primary mb-4">Suara Alumni</h2>
          <div class="w-20 h-1 bg-secondary mx-auto" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            :quote="testimonial.quote"
            :name="testimonial.name"
            :role="testimonial.role"
            :image="testimonial.image"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection
      title="Siapkan Masa Depan Gemilang Buah Hati Anda"
      subtitle="Bergabunglah dengan komunitas pembelajar kami dan jadilah bagian dari tradisi juara di SD Muhammadiyah Ambulu."
      cta-primary="Daftar Sekarang"
      cta-secondary="Konsultasi Pendidikan"
    />
  </div>
</template>
