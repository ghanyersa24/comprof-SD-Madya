<script setup lang="ts">
useSeoMeta({
  title: 'Tim Pengajar - SD Muhammadiyah 01 Ambulu',
  description: 'Profil tenaga pengajar SD Muhammadiyah 1 Ambulu. Tim pendidik profesional yang berdedikasi membentuk generasi Robbani.',
  ogTitle: 'Tim Pengajar - SD Muhammadiyah 01 Ambulu',
  ogDescription: 'Pilar kecemerlangan — tim pendidik profesional SD Muhammadiyah 01 Ambulu.',
})

const teachers = [
  {
    name: 'Siti Aminah, S.Pd.',
    role: 'Wali Kelas 6A',
    subject: 'MATEMATIKA',
    quote: 'Membangun logika berpikir yang kuat di atas pondasi akhlak yang mulia adalah visi saya.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClAZngn61XDSEODjA5YS30LuYsccXxnibfrMdrtGA7yR4qlc16PI31gMnxvBNYlv6Bk9Xx0ygU-4yjGaKFDETduusUzcjWnVHsbd1lRRbX4SrYqHGULVubjbJTnq9UOzlZYQ0gVSQzeCVPVrXKCrIw2kirYPUA8ltJti6q_DD095BNIEsh5dLqi13OQQ2dnlgJke67MNxf-UuWIPK2IZa8XfOjaRfun-KvW_0TpoQDAqf2OdLeIrFnHq4DQqPGU8woBNHlsdq5ZjA',
  },
  {
    name: 'Bambang Susanto, M.Si.',
    role: 'Kepala Laboratorium',
    subject: 'SAINS',
    quote: 'Eksplorasi alam adalah cara kita mengagumi kebesaran Sang Pencipta melalui ilmu pengetahuan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJSDNG6GrJqnZs407PVoE1mKAAPTztAmkrHTRi-TCzcW8jWm6XKVvP_txRaEayttCB6cxHHbnB2slbxxF1HZRkgablX2Yag0RcnW4ZWwBxk-QNCHG6CkX05XTBgdBwHLvF9rX6pTQuUOtte5Pf_yI7mqew5RMB6Old5MV6pG3leVRuCnmc4YhK_PZS5nSZpk3DVZmLaprZmTB43JDZ_grLK-oSs299yrVh8DDIlTJaz71fUxXmUcBLlz2_TMtTCLND8J_ouVELUA8',
  },
  {
    name: 'Laila Syarifah, Lc.',
    role: 'Koordinator Al-Islam',
    subject: 'BAHASA ARAB',
    quote: 'Bahasa adalah kunci peradaban. Mari kita buka gerbang ilmu agama dengan bahasa Al-Qur\'an.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_6h2YNDz6XNtX9cuzDBrqjkQh1bak33tL59M13bjn6OsDhXZc5HN8HrfMXtz6Sqmm73iWgS-HNQICVEx9lQBYStWty4OZS17PpNFsO_ALY207EmHVEq15UIEK7jPyIHVjVrI_umKgD32vgsljNUcQb3Gh5MIxY6hrXQVC7N8DJw6P4JuonV-zP5i10Jzl-wSor8Sw4-x5bFLgrsWoPEhJczUOG-6QzibCDW3AZfQDSlu0xnfeipUtw9VqmNge6DbtndHIsNQCMkc',
  },
  {
    name: 'Ust. H. Ridwan Mansyur',
    role: 'Guru Ismuba',
    subject: 'AL-ISLAM',
    quote: 'Ilmu tanpa adab seperti pohon tanpa buah. Kita tanamkan karakter sejak dini.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyLG0ZIq4NibQ9-g45hE_s15YOUwof8wLQ7OZ7U0FX7xjWcj2bvfDg1AX4Ry5bdv43Aqv8dxLJUJk-gO8uCEMKtvVrNN9KuK4hAipc_CSvEJwCCg5ACj7qpUjIJH_yEfLh0BB_I2eyKOtXDTvp-epbrEEy_EhzGUG8ow24hoOxyBTFJsm4Q6aBgiOzvSuqyjb--IA5UG9-GklnoTzY_0nawytSDK5TpIBSt8U9gChqxj1s_k_vs5ObCcDWMEOBkrcipMgot7Jlq6I',
  },
  {
    name: 'Maya Puspita, S.Kom.',
    role: 'Guru TIK',
    subject: 'TEKNOLOGI',
    quote: 'Menyiapkan generasi muslim yang melek teknologi untuk menjawab tantangan zaman.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzA86MwQf9je7eyqfBU99__5FXgrbLzvNlMtMpv_y6-GT8GTTOHfOt_fR0tVWBP-MMrMaV7qMp12INyzMvkB7OCifmKBfdLZaQw_5srRW74QFnx6eZEdvt6zrlG0DKRfSeetl82Yii5EVvQC6gMUzCYFdZvAX7UClyLqDh4JpnrWlfmrzls6z5R31Ph-tmAC0JjsBMy8jPmVe3Lr4umGCSX0sLL2lgVe1imXu7tKh46GsUuR9KvYqjPjDKSYI11MoCQDs63TeRLzg',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="mb-16 text-center md:text-left max-w-7xl mx-auto px-6 pt-12">
      <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 mb-6">
        <span class="text-secondary font-label font-bold text-[10px] uppercase tracking-widest">Akademik</span>
      </div>
      <h1 class="text-primary font-headline font-extrabold text-4xl md:text-6xl tracking-tight leading-tight mb-6">
        Tim Pengajar <br />
        <span class="text-secondary">Pilar Kecemerlangan</span>
      </h1>
      <p class="text-on-surface-variant font-body text-xl max-w-2xl leading-relaxed italic">
        "Kami mendedikasikan diri untuk membimbing tunas bangsa dengan integritas spiritual dan kemajuan intelektual."
      </p>
    </section>

    <!-- Teachers Grid -->
    <section class="max-w-7xl mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Principal Card (Featured) -->
        <div class="lg:col-span-3 grid md:grid-cols-5 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient border border-outline-variant/10">
          <div class="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXLNuQ22aJMkuYzX1u3y-1v7waQVmEf-AWvMCjUmztRy5AArBqce-dsDTjWzC1hB6kEiJBK0UTIAjQTHjtU1_ZwFGxAz0gIVzPITx9p4KoUSN4jz5XYVw6D6eXXZLMTbjFElUxdsqrfnxy5EDM0fvG6-d-L0mo-X-BXqlhvRdbfAeRcoq9O-VwTH9U_U7J9QLghVqYqJ-Qy8cgP7Wyd5DIrixhq5Fk1rSxPg-cxIyVoFqDkUtrFtnChqmhuQoO3gJgYDmEPk5ZCgA"
              alt="Beni Hendarto, S.Pd.I - Kepala Sekolah"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>
          <div class="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
            <span class="text-secondary font-label font-bold text-xs uppercase tracking-widest mb-2">Kepala Sekolah</span>
            <h2 class="text-primary font-headline font-bold text-3xl mb-4 italic">Drs. H. Ahmad Fauzi, M.Pd.</h2>
            <div class="w-12 h-1 bg-secondary mb-6" />
            <p class="text-on-surface font-body text-xl italic leading-relaxed mb-6">
              "Pendidikan bukan sekadar mengisi wadah, melainkan menyalakan api semangat keimanan dan ilmu pengetahuan dalam setiap jiwa murid."
            </p>
            <div class="flex gap-4">
              <span class="text-primary font-label font-bold text-xs flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">
                PROFIL LENGKAP
                <AppIcon name="arrow_forward" class="text-sm" />
              </span>
            </div>
          </div>
        </div>

        <!-- Teacher Cards -->
        <TeacherCard
          v-for="teacher in teachers"
          :key="teacher.name"
          :name="teacher.name"
          :role="teacher.role"
          :subject="teacher.subject"
          :quote="teacher.quote"
          :image="teacher.image"
        />
      </div>
    </section>
  </div>
</template>
