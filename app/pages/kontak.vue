<script setup lang="ts">
useSeoMeta({
  title: 'Kontak & Pendaftaran - SD Muhammadiyah Ambulu',
  description: 'Hubungi SD Muhammadiyah 1 Ambulu atau daftar online untuk PPDB Tahun Ajaran 2025/2026. Formulir pendaftaran peserta didik baru.',
  ogTitle: 'Kontak & Pendaftaran - SD Muhammadiyah Ambulu',
  ogDescription: 'Pendaftaran Peserta Didik Baru tahun ajaran 2025/2026. Daftar online sekarang.',
})

const operationalHours = [
  { day: 'Senin - Kamis', time: '07:00 - 14:00', closed: false },
  { day: 'Jumat', time: '07:00 - 11:00', closed: false },
  { day: 'Sabtu', time: '07:00 - 12:00', closed: false },
  { day: 'Minggu', time: 'Tutup', closed: true },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="px-6 mb-16 max-w-7xl mx-auto pt-4">
      <div class="relative overflow-hidden rounded-xl bg-primary-container p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div class="z-10 w-full md:w-3/5">
          <AppBadge class="mb-6">Pendaftaran 2025/2026</AppBadge>
          <h1 class="font-headline font-extrabold text-4xl md:text-6xl text-white mb-6 leading-tight tracking-tighter">
            Mulai Masa Depan Gemilang di Sini.
          </h1>
          <p class="font-body italic text-xl text-white/80 max-w-xl">
            Bergabunglah dengan komunitas pembelajar yang unggul dalam Imtaq dan Iptek. Kami menyambut generasi Robbani yang siap menghadapi tantangan zaman.
          </p>
        </div>
        <div class="relative w-full md:w-2/5 aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWc82fin-nrKyzZi4GS3S2b8QwacOFD2E_NbO-gQSEO7Ch0Hqgl0gxd01RJlxmeBbwEuGNLgkll-kbTOmWCjOuTWQxdDUqIHw4amhXly-5CRjQOg0EwePAz59Ve8Jq2XUtJN51105KZ7Rqz7isuYtCd6kDe2eSFTSOFxdWGym9-p_oLM7Z6RmUaz7WZonbYcG6oR5QR72ZJmC7ZYct3VBOXUzTk2RAalx1v7IUNwJJebgLaxNEtC4v-1x5XXqLw2Ywmc5ymlJAzoQ"
            alt="Siswa SD Muhammadiyah"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Decorative Sheen -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/40 pointer-events-none" />
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
      <!-- Sidebar: Contact Info -->
      <aside class="lg:col-span-4 space-y-12">
        <!-- Contact Wells -->
        <div class="space-y-6">
          <h3 class="font-headline font-bold text-2xl text-primary flex items-center gap-2">
            <AppIcon name="contact_support" />
            Hubungi Kami
          </h3>
          <ContactInfo
            icon="location_on"
            title="Alamat Sekolah"
            content="Jl. Muhammadiyah No. 45, Ambulu, Kabupaten Jember, Jawa Timur 68172"
          />
          <ContactInfo
            icon="call"
            title="Telepon & WhatsApp"
            content=""
          >
            <p class="font-body text-on-surface leading-relaxed">(0336) 881234</p>
            <p class="font-body text-on-surface leading-relaxed">+62 812 3456 7890 (Admin PPDB)</p>
          </ContactInfo>
        </div>

        <!-- Operational Hours -->
        <div class="bg-primary p-8 rounded-xl text-white relative overflow-hidden">
          <AppIcon name="schedule" class="absolute -right-4 -bottom-4 text-white/5 text-9xl" />
          <h3 class="font-headline font-bold text-xl mb-6 relative z-10">Jam Operasional</h3>
          <ul class="space-y-4 relative z-10">
            <li
              v-for="item in operationalHours"
              :key="item.day"
              class="flex justify-between border-b border-white/10 pb-2 last:border-0"
            >
              <span class="font-body">{{ item.day }}</span>
              <span :class="['font-label font-bold', item.closed ? 'text-error' : 'text-secondary-container']">
                {{ item.time }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Map -->
        <div class="rounded-xl overflow-hidden h-64 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE39xcjw_sWSwuji27KPytMjyPt1W2qi90bbmAjgcUmI6islFVkxUPTjmgwMu93JGPyIh4GBTJCZHIji-Esf8fD22LeiUpXI6PjSOM7gzSIjj29-BTCPzT277qjG8z79xI6_By8IwOBlgkz72X8hjEuU5DdgU2fhRU0tPbmhm74PeCsCdaalk4PY3C-MZkeb4Q-vjN9diDUKFmHiFxvpMauokG9OQyUma3j0Y_pgJP5cIM2wa7_33KS2dYguKtqAms02tZMpIPu4o"
            alt="Lokasi SD Muhammadiyah Ambulu"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </aside>

      <!-- Main: Registration Form -->
      <div class="lg:col-span-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-ambient">
        <div class="mb-10 text-center lg:text-left">
          <h2 class="font-headline font-extrabold text-3xl text-primary mb-3">Formulir Pendaftaran Online</h2>
          <p class="font-body text-on-surface-variant text-lg">
            Lengkapi data calon siswa di bawah ini. Tim kami akan menghubungi Anda dalam 2x24 jam kerja.
          </p>
        </div>

        <form class="space-y-8" @submit.prevent>
          <!-- Section: Data Siswa -->
          <div class="space-y-6">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-label font-bold text-xs">01</span>
              <h3 class="font-headline font-bold text-primary uppercase tracking-widest text-sm">Data Calon Siswa</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="font-label font-bold text-xs text-primary uppercase tracking-wider">Nama Lengkap Siswa</label>
                <input
                  type="text"
                  placeholder="Sesuai Akta Kelahiran"
                  class="w-full bg-surface-container-high border-none rounded-lg p-4 font-body focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div class="space-y-2">
                <label class="font-label font-bold text-xs text-primary uppercase tracking-wider">NIK Siswa</label>
                <input
                  type="text"
                  placeholder="16 Digit NIK"
                  class="w-full bg-surface-container-high border-none rounded-lg p-4 font-body focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div class="space-y-2">
                <label class="font-label font-bold text-xs text-primary uppercase tracking-wider">Tempat Lahir</label>
                <input
                  type="text"
                  placeholder="Kota Kelahiran"
                  class="w-full bg-surface-container-high border-none rounded-lg p-4 font-body focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div class="space-y-2">
                <label class="font-label font-bold text-xs text-primary uppercase tracking-wider">Tanggal Lahir</label>
                <input
                  type="date"
                  class="w-full bg-surface-container-high border-none rounded-lg p-4 font-body focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <!-- Section: Data Orang Tua -->
          <div class="space-y-6">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-label font-bold text-xs">02</span>
              <h3 class="font-headline font-bold text-primary uppercase tracking-widest text-sm">Data Orang Tua / Wali</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="font-label font-bold text-xs text-primary uppercase tracking-wider">Nama Ayah / Ibu</label>
                <input
                  type="text"
                  placeholder="Nama Lengkap Orang Tua"
                  class="w-full bg-surface-container-high border-none rounded-lg p-4 font-body focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div class="space-y-2">
                <label class="font-label font-bold text-xs text-primary uppercase tracking-wider">Nomor WhatsApp</label>
                <input
                  type="tel"
                  placeholder="Contoh: 0812..."
                  class="w-full bg-surface-container-high border-none rounded-lg p-4 font-body focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>
            <div class="space-y-2">
              <label class="font-label font-bold text-xs text-primary uppercase tracking-wider">Alamat Lengkap Domisili</label>
              <textarea
                placeholder="Nama Jalan, No. Rumah, RT/RW, Kecamatan"
                rows="3"
                class="w-full bg-surface-container-high border-none rounded-lg p-4 font-body focus:bg-white focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
          </div>

          <!-- Submit -->
          <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-2 text-on-surface-variant italic">
              <AppIcon name="verified_user" class="text-secondary" />
              <span class="text-sm">Data Anda terjamin kerahasiaannya.</span>
            </div>
            <button
              type="submit"
              class="w-full md:w-auto px-10 py-4 bg-primary text-white font-headline font-bold rounded-lg shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
            >
              Submit Pendaftaran
              <AppIcon name="arrow_forward" class="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
