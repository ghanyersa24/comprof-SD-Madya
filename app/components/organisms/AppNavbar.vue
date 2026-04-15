<script setup lang="ts">
const route = useRoute()

const navItems = [
  { to: '/', label: 'Beranda', icon: 'home' },
  { to: '/prestasi', label: 'Prestasi', icon: 'emoji_events' },
  { to: '/kegiatan', label: 'Akademik', icon: 'menu_book' },
  { to: '/pengajar', label: 'Pengajar', icon: 'group' },
  { to: '/galeri', label: 'Galeri', icon: 'photo_library' },
  { to: '/kontak', label: 'Kontak', icon: 'contact_support' },
]

const mobileMenuOpen = ref(false)

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-[#002447] shadow-ambient">
    <div class="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
          <AppIcon name="school" class="text-primary" />
        </div>
        <span class="font-headline font-bold tracking-tight text-lg text-white uppercase tracking-wider">
          SD Madya Ambulu
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NavLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :label="item.label"
          :icon="item.icon"
          :active="isActive(item.to)"
        />
      </nav>

      <!-- PPDB Button -->
      <NuxtLink
        to="/kontak"
        class="bg-secondary-container text-primary font-headline font-bold px-6 py-2 rounded-lg scale-95 active:duration-150 transition-all hover:shadow-lg uppercase text-xs tracking-widest hidden sm:block"
      >
        PPDB
      </NuxtLink>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden text-white"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Menu"
      >
        <AppIcon :name="mobileMenuOpen ? 'close' : 'menu'" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="slide">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-[#002447] border-t border-white/10 px-6 py-4 space-y-2"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="[
            'flex items-center gap-4 p-3 transition-all rounded-lg',
            isActive(item.to)
              ? 'bg-secondary-container text-primary font-bold'
              : 'text-white/80 hover:bg-white/10'
          ]"
          @click="mobileMenuOpen = false"
        >
          <AppIcon :name="item.icon" />
          <span class="font-body">{{ item.label }}</span>
        </NuxtLink>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
