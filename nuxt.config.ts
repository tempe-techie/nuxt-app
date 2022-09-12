import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    // Config for Vite
    optimizeDeps: {
      esbuildOptions: {
        supported: { 
          bigint: true 
        },
        define: {
          global: 'globalThis'
        }
      }
    }
  }
})
