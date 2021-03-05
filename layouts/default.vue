<template>
  <div class="h-full bg-gray-100">
    <the-header class="border-t-4 border-blue-500 sticky top-0 m-0" />
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
