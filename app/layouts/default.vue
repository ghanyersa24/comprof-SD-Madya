<template>
  <div class="flex flex-col min-h-screen">
    <AppNavbar />
    <main class="flex-grow pt-20 pb-20 md:pb-0">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
