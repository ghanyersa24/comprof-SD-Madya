<script setup lang="ts">
const route = useRoute()

const navItems = [
  { to: '/', label: 'Beranda', icon: 'home' },
  { to: '/prestasi', label: 'Prestasi', icon: 'emoji_events' },
  { to: '/kegiatan', label: 'Akademik', icon: 'menu_book' },
  { to: '/galeri', label: 'Galeri', icon: 'photo_library' },
  { to: '/kontak', label: 'Kontak', icon: 'contact_support' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <nav class="md:hidden fixed bottom-0 left-0 w-full bg-[#002447]/95 backdrop-blur-md z-50 px-6 py-3 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
    <MobileNavItem
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      :label="item.label"
      :icon="item.icon"
      :active="isActive(item.to)"
    />
  </nav>
</template>
