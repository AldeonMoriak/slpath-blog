<template>
  <div>
    <h1 v-if="error.statusCode === 404">صفحه مورد نظر یافت نشد</h1>
    <h1 v-else>خطای ناشناخته ای اتفاق افتاده است</h1>
    <a href="/">صفحه اصلی</a>
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
