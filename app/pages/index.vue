<script setup lang="ts">
useSeoMeta({
  title: 'SD Muhammadiyah 01 Ambulu - Sekolah Juara',
  description: 'SD Muhammadiyah 1 Ambulu - Unggul dalam Imtaq dan Iptek, Mencetak Generasi Berkarakter Qurani yang Siap Menghadapi Masa Depan.',
  ogTitle: 'SD Muhammadiyah 01 Ambulu - Sekolah Juara',
  ogDescription: 'Kokoh dalam Spiritual, Unggul dalam Intelektual.',
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[751px] flex items-center overflow-hidden hero-gradient -mt-20 pt-20">
      <div class="absolute inset-0 opacity-20">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl_3pn07llD5gfYrftib-KBiOS7mZQI3DVUpKtfgnQJZux8S1n-1mYvdonB8WAAuhKlDT9_c83Sx3bCo5H60sXYfpvUUR04uc_qkoa8G3LlvTHAVsSdDbiiUEMQL9kvolyqWpCmJRtvCrqMe3tD0rSKbdHgZRlQtbUYZ6Rim8nX9DnVKrC1KZWbmsWnzaJ-uXNMtAbGjmDWjfisr79lzcvJBab-p92SN09i5D2BIiataVOHxGMuppmdofYJEdTKU-8nYmjVTgQpzA"
          alt="Gedung SD Muhammadiyah 01 Ambulu"
          class="w-full h-full object-cover"
        />
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
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhd3eLlWmN2yVHT2cyrWWh6Isz_HXM8dp2rrvhmqjxv40p6fxIt1ohbrbU0C-a12KRv8lXyBLFctASL4sJFIltGMqmP-4J6ZMyZO4m9KlDS6YvLFIOWF5E4Hyqr2ZHWpPgDR7E3ObDy2F80gSdGIyXscfJzKyBUWzkwosjzXuVNf89NRwQGCp5_9dVyFPoYFBkNhXXm6YkCfjIGH87LVQoJsgB7m_V33eFZEGPPiaW1r-sbfnxuYk9wvFclO5v-gH_VCXdtELLQlk"
              alt="Siswa SD Muhammadiyah 01 Ambulu"
              class="w-full aspect-[4/5] object-cover"
            />
          </div>
          <!-- Achievement Float Card -->
          <div class="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl max-w-xs z-20">
            <div class="flex gap-4 items-center">
              <div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center">
                <AppIcon name="workspace_premium" :filled="true" class="text-primary" />
              </div>
              <div>
                <p class="font-headline font-bold text-primary text-lg leading-tight">Akreditasi A</p>
                <p class="font-body text-on-surface-variant text-sm">Unggul & Terpercaya</p>
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
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzntRlPAVRgquHp_hS_gMST5eNt6qj55Vwdjkhf_KH7AYweuu0nUyRPnhwPaYZb4H-XXRxt8NEGCc3xe2ZAxPRDZtzzhZXcrfDR2jmxW8q4z0cSHnDIRanQ9DNReNgJzmWJkoIXaMOvoMenfCJKnCyB1eoLw4sX5RgWv-YEH8W3wq1dVV8VwUR5rEUfDK8y1j7NFNL7V_D8fNX-e_Vgo5eYgAewQDOON604uKvF6jpcr3QiEiJWvCr3vPN-9IDcb-sMGmD8VooiH0"
                alt="Guru mengajar di kelas"
                class="relative z-10 rounded-3xl shadow-xl aspect-square object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div class="md:col-span-7 order-1 md:order-2 space-y-8">
            <SectionLabel text="Profil Sekolah" />
            <h2 class="font-headline font-bold text-4xl text-primary leading-tight">
              Membina Akhlak, Mengasah Logika Sejak Dini
            </h2>
            <p class="font-body text-xl text-on-surface-variant leading-relaxed">
              Berdiri dengan semangat dakwah Muhammadiyah, kami mengintegrasikan kurikulum nasional dengan nilai-nilai spiritual yang kokoh. Sejarah panjang kami di Ambulu telah melahirkan ribuan lulusan yang berprestasi dan beradab.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div class="bg-surface-container-low p-6 rounded-2xl">
                <h3 class="font-headline font-bold text-primary mb-3">Visi Kami</h3>
                <p class="font-body text-on-surface-variant italic">
                  "Menjadi lembaga pendidikan dasar yang unggul dalam Imtaq dan Iptek bertaraf nasional."
                </p>
              </div>
              <div class="bg-surface-container-low p-6 rounded-2xl">
                <h3 class="font-headline font-bold text-primary mb-3">Nilai Utama</h3>
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
          <h2 class="font-headline font-bold text-4xl text-primary">Prestasi Membanggakan</h2>
          <p class="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            Dedikasi siswa dan guru kami dalam meraih keunggulan di berbagai bidang kompetisi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          <!-- Main Achievement -->
          <div class="md:col-span-2 md:row-span-2 bg-primary-container rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7EsCiy_rddl_fnCXRYvDRkdHxsqgOKobinIW_okPbw4F0V-gH5vcCTgbqwVbwW6UhJz97--qdYU0yNBrO5uSJbxA-IKpv0NKbv1Y55FURplF9Vq0ilFqjV4tCkWal-qvJAKEyulMMMWXRvaj6qxllU-6atsd4R3UcuIYuswng1fSVGlaJdfAolgAT_Mvvozb89J41-elJDoUhc4QlCpG2KenUQ1VfkehnUUr6iEPMC98LBBARK192ndoyd9qwRxYZGkOLI9mNnBI"
              alt="Tim robotik SD Muhammadiyah 01 Ambulu"
              class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
            <div class="relative z-10 space-y-4">
              <AppBadge>Tingkat Provinsi</AppBadge>
              <h3 class="font-headline font-bold text-3xl text-white">Juara 1 Lomba Robotik Nasional</h3>
              <p class="font-body text-white/80 max-w-lg">
                Inovasi tanpa batas dari tim robotik cilik SD Muhammadiyah 01 Ambulu yang berhasil mengungguli sekolah-sekolah unggulan lainnya.
              </p>
            </div>
          </div>

          <!-- Small Achievement 1 -->
          <div class="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-between border border-outline-variant/10">
            <div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center">
              <AppIcon name="menu_book" :filled="true" class="text-secondary" />
            </div>
            <div class="mt-4">
              <h4 class="font-headline font-bold text-primary">Tahfidz Quran</h4>
              <p class="font-body text-on-surface-variant">Lulusan dengan hafalan minimal 2 Juz Al-Quran.</p>
            </div>
          </div>

          <!-- Small Achievement 2 -->
          <div class="bg-secondary-container rounded-3xl p-6 flex flex-col justify-between">
            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <AppIcon name="sports_soccer" class="text-white" />
            </div>
            <div class="mt-4">
              <h4 class="font-headline font-bold text-primary">Ekskul Unggulan</h4>
              <p class="font-body text-on-secondary-container/80 text-sm">
                Pembinaan bakat minat yang intensif untuk hasil maksimal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CtaSection
      title="Mulai Perjalanan Prestasi Anak Anda Bersama Kami"
      subtitle="Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 telah dibuka. Kuota terbatas."
      cta-primary="Daftar Online Sekarang"
      cta-secondary="Panduan PPDB"
      cta-primary-link="/kontak"
    />
  </div>
</template>
