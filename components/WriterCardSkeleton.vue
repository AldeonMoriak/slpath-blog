<template>
  <div class="font-wyekan">
    <img
      class="object-cover w-14 h-14 rounded-full shadow-sm animate-pulse bg-purple-200"
    />
    <p
      class="transition-colors duration-200 w-24 h-5 animate-pulse bg-purple-200"
      aria-label="نام نویسنده"
    ></p>
    <div class="text-xs text-right prose max-w-xs">
      <div class="animate-pulse bg-purple-200 w-40 h-5"></div>
      <div class="animate-pulse bg-purple-200 w-40 h-5"></div>
      <div class="animate-pulse bg-purple-200 w-40 h-5"></div>
      <div class="animate-pulse bg-purple-200 w-36 h-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {
          image: '',
          name: '',
          alt: '',
        }
      },
    },
  },
}
</script>
