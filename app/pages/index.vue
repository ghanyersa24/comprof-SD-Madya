<script setup lang="ts">
const testimonials = [
  {
    quote:
      "SD Muhammadiyah 01 Ambulu memberikan landasan karakter yang sangat kuat bagi saya. Kedisiplinan dan nilai keislaman yang diajarkan terbawa hingga saya menempuh karir sekarang.",
    name: "dr. Hendra Wijaya",
    role: "Alumni Tahun 2005",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOY7-Q_xKKPFps_a-VkfXKKzD2FGb6W1xRdSljH86a9K5jxkNs5Qh2VUOYoGbwIv1HZ-HDcGN71CIzIsvpa7e9AdwTjfxl8-Fbv5eNfOtTc9bA9b0STnCI2A1XfVWkfeSChFxOr6ZEzzzoCLXRMMWdlGacwlU-Inl4fgeT3fnyd0QNfEnqKFuxrxzNI5MwiW_W2IBNflkMWbfzkMm-cPAGdr-4FRvIIyVE2yxi6OQVpcd1n4-Gu_E8dRAgjpkaZbi7U4Gzj0hyi6g",
  },
  {
    quote:
      "Saya sangat bersyukur pernah sekolah di sini. Gurunya sangat perhatian dan mampu menemukan bakat seni saya yang saat itu belum terlihat. Juara lukis pertama saya dimulai dari sini.",
    name: "Siti Aminah, M.Ds",
    role: "Desainer & Alumni 2010",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBGeaDgkApaIc-hisB_uUv8NJ1YBZsGWvQvpSUlfirSe41ddsBSiOmUoEnldO2kQ_OhJbo4LByo_EMcR6Ag8VSoAugLjVzv-rJRqdC7yC8uXh4ukWOgc2tRcxVz4Afdpmm4wlhJFsm9JX2AXYYxQl8LYiR7HT2oT8779AVBZEkBFzEM-PLmu6oFvwfTHDQ82eOOMCMV6Ne0qhdIQygXdGbmhYo3SYoh0zSTNsl_x0a1qD7gJgSXjmjOOafIh0XWF3OjC0fHzBAcGk",
  },
  {
    quote:
      "Ekosistem belajarnya sangat kompetitif namun tetap suportif. Saya diajarkan untuk tidak pernah takut gagal dalam berkompetisi. Semangat juara itu masih ada dalam diri saya.",
    name: "Ir. Rizky Pratama",
    role: "Alumni Tahun 2008",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKy5j7x_LayIcmdtnjTLRyLgezl7CosIKu1jZHRw-SEV0ErlGcfo0kFmn1GZGTu8G9ZGKp3tipkTr6ISxIOVYkLkPvq41ykMzkcbOCSBKWq3-uQ62inBlodh8UApuZrVbL8S40l893GUq_XQa9aE6wynKhAE6Pinl-CXls1TfSnmWN_BAKsna4DzROSgMU10VOMeaFlWB_lBK5WTubRjSfZAbKK7tNkighmcRcDUWlYgKBD38YmSCg6zpm9COT5Y-fFar4D9BjN-o",
  },
]

useSeoMeta({
  title: "SD Muhammadiyah 01 Ambulu - Sekolah Juara",
  description:
    "SD Muhammadiyah 1 Ambulu - Unggul dalam Imtaq dan Iptek, Mencetak Generasi Berkarakter Qurani yang Siap Menghadapi Masa Depan.",
  ogTitle: "SD Muhammadiyah 01 Ambulu - Sekolah Juara",
  ogDescription: "Kokoh dalam Spiritual, Unggul dalam Intelektual.",
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[751px] flex items-center overflow-hidden hero-gradient -mt-20 pt-20">
      <div class="absolute inset-0 opacity-20">
        <img src="~/assets/images/bangunan_sekolah.png" alt="Gedung SD Muhammadiyah 01 Ambulu"
          class="w-full h-full object-cover" />
      </div>
      <div class="relative max-w-7xl mx-auto px-6 py-20 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <AppBadge variant="subtle" size="md">
            <AppIcon name="stars" :filled="true" class="text-sm" />
            Sekolah Juara
          </AppBadge>

          <h1 class="font-headline font-extrabold text-5xl md:text-7xl text-white leading-tight tracking-tighter">
            SD Muhammadiyah 01 Ambulu
          </h1>

          <p class="font-body text-xl md:text-2xl text-white/90 leading-relaxed italic max-w-xl">
            "Kokoh dalam Spiritual, Unggul dalam Intelektual."
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <AppButton href="/kontak" variant="primary">
              Daftar Sekarang
              <AppIcon name="arrow_forward" />
            </AppButton>
            <AppButton href="/prestasi" variant="outline">
              Lihat Profil
            </AppButton>
          </div>
        </div>

        <div class="hidden md:block relative">
          <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img src="~/assets/images/prestasi_portrait.png" alt="Siswa SD Muhammadiyah 01 Ambulu"
              class="w-full aspect-[4/5] object-cover" />
          </div>
          <!-- Achievement Float Card -->
          <div class="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl max-w-xs z-20">
            <div class="flex gap-4 items-center">
              <div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                <AppIcon name="workspace_premium" :filled="true" class="text-primary" />
              </div>
              <div>
                <p class="font-headline font-bold text-primary text-lg leading-tight">
                  Akreditasi A
                </p>
                <p class="font-body text-on-surface-variant text-sm">
                  Unggul & Terpercaya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Snippet -->
    <section class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-12 gap-16 items-center">
          <div class="md:col-span-5 order-2 md:order-1">
            <div class="relative">
              <div class="absolute inset-0 bg-primary-container rounded-3xl -rotate-3 scale-105 opacity-10" />
              <img src="~/assets/images/pembelajaran.png" alt="Guru mengajar di kelas"
                class="relative z-10 rounded-3xl shadow-xl aspect-square object-cover" loading="lazy" />
            </div>
          </div>
          <div class="md:col-span-7 order-1 md:order-2 space-y-8">
            <SectionLabel text="Profil Sekolah" />
            <h2 class="font-headline font-bold text-4xl text-primary leading-tight">
              Membina Akhlak, Mengasah Logika Sejak Dini
            </h2>
            <p class="font-body text-xl text-on-surface-variant leading-relaxed">
              Berdiri dengan semangat dakwah Muhammadiyah, kami mengintegrasikan
              kurikulum nasional dengan nilai-nilai spiritual yang kokoh.
              Sejarah panjang kami di Ambulu telah melahirkan ribuan lulusan
              yang berprestasi dan beradab.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div class="bg-surface-container-low p-6 rounded-2xl">
                <h3 class="font-headline font-bold text-primary mb-3">
                  Visi Kami
                </h3>
                <p class="font-body text-on-surface-variant italic">
                  "Menjadi lembaga pendidikan dasar yang unggul dalam Imtaq dan
                  Iptek bertaraf nasional."
                </p>
              </div>
              <div class="bg-surface-container-low p-6 rounded-2xl">
                <h3 class="font-headline font-bold text-primary mb-3">
                  Nilai Utama
                </h3>
                <ul class="font-body text-on-surface-variant space-y-2">
                  <li class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Kejujuran (Siddiq)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-secondary rounded-full" />
                    Kecerdasan (Fathanah)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Prestasi Highlight (Bento Grid) -->
    <section class="py-24 bg-surface-container-low">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16 space-y-4">
          <SectionLabel text="Wall of Fame" class="justify-center" />
          <h2 class="font-headline font-bold text-4xl text-primary">
            Prestasi Membanggakan
          </h2>
          <p class="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            Dedikasi siswa dan guru kami dalam meraih keunggulan di berbagai
            bidang kompetisi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <!-- Main Achievement -->
          <div
            class="md:col-span-2 md:row-span-2 bg-primary-container rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group">
            <img src="~/assets/images/prestasi.jpeg"
              alt="Borong Juara FLS3N dan O2SN Tahun 2026 tingkat SD negeri dan swasta se-Kecamatan Ambulu"
              class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"
              loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
            <div class="relative z-10 space-y-4">
              <AppBadge>Tingkat Kecamatan</AppBadge>
              <h3 class="font-headline font-bold text-3xl text-white">
                Borong Juara FLS3N dan O2SN Tahun 2026
              </h3>
              <p class="font-body text-white/80 max-w-lg hidden md:block">
                Keberhasilan ini menjadi bukti nyata komitmen sekolah dalam
                mengembangkan potensi akademik maupun non-akademik peserta didik
                secara seimbang.
              </p>
            </div>
          </div>

          <!-- Small Achievement 1 -->
          <div class="relative rounded-3xl overflow-hidden flex flex-col justify-between min-h-[220px] group">
            <img src="~/assets/images/tahfidz.png" alt="Program Tahfidz Quran SD Muhammadiyah 01 Ambulu"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/10" />
            <div class="relative z-10 p-6 flex flex-col justify-between h-full">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <AppIcon name="menu_book" :filled="true" class="text-white" />
              </div>
              <div class="mt-4">
                <h4 class="font-headline font-bold text-white">
                  Tahfidz Quran
                </h4>
                <p class="font-body text-white/80 text-sm">
                  Lulusan hafal Al-Qur’an Juz 30.
                </p>
              </div>
            </div>
          </div>

          <!-- Small Achievement 2 -->
          <div class="relative rounded-3xl overflow-hidden flex flex-col justify-between min-h-[220px] group">
            <img src="~/assets/images/marching_band.png" alt="Ekskul Unggulan SD Muhammadiyah 01 Ambulu"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-secondary/10" />
            <div class="relative z-10 p-6 flex flex-col justify-between h-full">
              <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <AppIcon name="music_note" :filled="true" class="text-white" />
              </div>
              <div class="mt-4">
                <h4 class="font-headline font-bold text-white">
                  Ekskul Unggulan
                </h4>
                <p class="font-body text-white/80 text-sm">
                  Pembinaan bakat minat yang intensif untuk hasil maksimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alumni Testimonials -->
    <section class="bg-surface-container-low py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <SectionLabel text="Suara Alumni" class="justify-center" />
          <h2 class="font-headline font-bold text-4xl text-primary">
            Apa Kata Mereka?
          </h2>
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
    <CtaSection title="Mulai Perjalanan Prestasi Anak Anda Bersama Kami"
      subtitle="Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 telah dibuka. Kuota terbatas."
      cta-primary="Daftar Online Sekarang" cta-secondary="Panduan PPDB" cta-primary-link="/kontak" />
  </div>
</template>
