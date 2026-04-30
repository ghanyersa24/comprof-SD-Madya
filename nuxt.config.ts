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
        { property: 'og:image', content: 'https://pwmu.co/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-19-at-6.37.00-PM-1024x602.jpeg' },
        { name: 'twitter:image', content: 'https://pwmu.co/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-19-at-6.37.00-PM-1024x602.jpeg' }
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
