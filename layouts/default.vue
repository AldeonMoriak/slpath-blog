<template>
  <div class="h-full bg-gray-100">
    <the-header class="border-t-4 border-purple-600 sticky top-0 m-0" />
    <main class="max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <Nuxt />
    </main>
    <back-to-top />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import BackToTop from '~/components/BackToTop.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
    BackToTop,
  },
}
</script>
