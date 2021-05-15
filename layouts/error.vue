<template>
  <div>
    <h1
      v-if="error.statusCode === 404"
      class="text-center font-vazir text-purple-600 mt-10 text-2xl sm:text-4xl"
    >
      صفحه مورد نظر یافت نشد
    </h1>
    <h1 v-else>خطای ناشناخته ای اتفاق افتاده است</h1>
    <div class="mx-auto text-center w-sm font-vazir text-purple-600 p-3 mt-5">
      <a href="/" class="hover:(text-purple-800, bg-purple-200) rounded p-5"
        >صفحه اصلی</a
      >
    </div>
    <lottie-player
      class="mx-auto h-md"
      autoplay
      loop
      src="/animations/not-found.json"
      speed="1"
    ></lottie-player>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: {
      type: Object,
      default() {
        return {
          statusCode: 0,
        }
      },
    },
  },
}
</script>
