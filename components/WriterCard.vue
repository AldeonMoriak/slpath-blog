<template>
  <div class="font-vazir">
    <img
      :alt="post.alt"
      :src="post.image"
      class="object-cover w-full text-sm mx-auto shadow-inner rounded-md mb-3"
    />
    <p
      class="text-gray-900 text-lg font-medium text-right leading-8"
      aria-label="نام نویسنده"
    >
      {{ post.name }}
    </p>
    <p
      class="text-gray-600 text-right font-medium text-xs prose max-w-xs lg:prose-sm"
    >
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
