import { Orbis } from '@orbisclub/orbis-sdk';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Orbis)
})