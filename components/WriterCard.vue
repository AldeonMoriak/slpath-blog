<template>
  <div class="font-wyekan">
    <img
      :alt="post.alt"
      :src="post.image"
      class="object-cover w-14 h-14 rounded-full shadow-sm text-sm mx-auto"
    />
    <p
      class="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-sm text-center"
      aria-label="نام نویسنده"
    >
      {{ post.name }}
    </p>
    <p class="text-gray-600 text-xs text-right prose max-w-xs">
      {{ post.description }}
    </p>
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
