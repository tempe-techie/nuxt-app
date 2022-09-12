import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    // Config for Vite
    build: {
      target: "es2020"
    },
    define: {
      "global": {},
    },
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
