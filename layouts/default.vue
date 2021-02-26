<template>
  <div class="h-screen bg-gray-200 border border-t-4 border-teal-500">
    <the-header />
    <div class="max-w-2xl lg:max-w-6xl mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    TheHeader,
  },
}
</script>
