<template>
  <footer class="bg-[#002447] w-full mt-auto">
    <div class="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-start gap-8 max-w-7xl mx-auto">
      <!-- Brand -->
      <div class="max-w-md">
        <h3 class="text-xl font-bold text-[#FED65B] mb-4 font-headline uppercase tracking-wider">
          SD Muhammadiyah Ambulu
        </h3>
        <p class="font-body text-white/60 text-sm leading-relaxed mb-6">
          Mewujudkan lembaga pendidikan dasar Islam yang unggul, kompetitif, dan berkarakter Qurani untuk mencetak generasi pemimpin masa depan.
        </p>
        <div class="flex gap-4">
          <a
            v-for="icon in ['public', 'alternate_email', 'call']"
            :key="icon"
            href="#"
            class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#FED65B] hover:bg-white/10 transition-colors"
          >
            <AppIcon :name="icon" class="text-lg" />
          </a>
        </div>
      </div>

      <!-- Links -->
      <div class="grid grid-cols-2 gap-12 md:gap-24">
        <div class="flex flex-col gap-4">
          <h4 class="font-label text-white font-bold text-xs uppercase tracking-[0.2em]">Navigasi</h4>
          <NuxtLink
            v-for="link in [
              { to: '/', label: 'Beranda' },
              { to: '/prestasi', label: 'Prestasi' },
              { to: '/kegiatan', label: 'Akademik' },
              { to: '/galeri', label: 'Galeri' },
            ]"
            :key="link.to"
            :to="link.to"
            class="font-body text-white/60 hover:text-[#FED65B] text-sm transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-label text-white font-bold text-xs uppercase tracking-[0.2em]">Sosial Media</h4>
          <a
            v-for="social in ['Facebook', 'Instagram', 'YouTube', 'WhatsApp']"
            :key="social"
            href="#"
            class="font-body text-white/60 hover:text-[#FED65B] text-sm transition-colors"
          >
            {{ social }}
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white/5 py-8 px-8 max-w-7xl mx-auto">
      <p class="font-body text-center text-white/40 text-sm">
        © {{ new Date().getFullYear() }} SD Muhammadiyah Ambulu. Unggul dalam Imtaq dan Iptek.
      </p>
    </div>
  </footer>
</template>
