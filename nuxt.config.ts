// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { property: 'og:image', content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl_3pn07llD5gfYrftib-KBiOS7mZQI3DVUpKtfgnQJZux8S1n-1mYvdonB8WAAuhKlDT9_c83Sx3bCo5H60sXYfpvUUR04uc_qkoa8G3LlvTHAVsSdDbiiUEMQL9kvolyqWpCmJRtvCrqMe3tD0rSKbdHgZRlQtbUYZ6Rim8nX9DnVKrC1KZWbmsWnzaJ-uXNMtAbGjmDWjfisr79lzcvJBab-p92SN09i5D2BIiataVOHxGMuppmdofYJEdTKU-8nYmjVTgQpzA' },
        { name: 'twitter:image', content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl_3pn07llD5gfYrftib-KBiOS7mZQI3DVUpKtfgnQJZux8S1n-1mYvdonB8WAAuhKlDT9_c83Sx3bCo5H60sXYfpvUUR04uc_qkoa8G3LlvTHAVsSdDbiiUEMQL9kvolyqWpCmJRtvCrqMe3tD0rSKbdHgZRlQtbUYZ6Rim8nX9DnVKrC1KZWbmsWnzaJ-uXNMtAbGjmDWjfisr79lzcvJBab-p92SN09i5D2BIiataVOHxGMuppmdofYJEdTKU-8nYmjVTgQpzA' }
      ]
    },
  },

  googleFonts: {
    download: false,
    families: {
      Inter: [400, 500, 600, 700, 800],
      Newsreader: {
        wght: [400, 500, 600],
        ital: [400, 500, 600],
      },
    },
    display: 'swap',
  },

  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
})
