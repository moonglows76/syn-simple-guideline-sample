// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  app: {
    head: {
      title: 'シンプルなガイドラインのサンプルソース'
    }
  },
  modules: [
    '@vueuse/nuxt',
  ],
  css: [
    '@/assets/scss/style.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
@use "sass:math";
@use "sass:color";
@use "@/assets/scss/_variables.scss";
@use "@/assets/scss/_mixins.scss";
`,
        },
      },
    },
  },
})
