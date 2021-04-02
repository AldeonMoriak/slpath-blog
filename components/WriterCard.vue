<template>
  <div
    class="font-vazir"
    @mouseover="$emit('mouse-over-event')"
    @mouseout="$emit('mouse-out-event')"
  >
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
      class="text-gray-500 text-right font-medium text-xs prose max-w-xs sm:prose-sm"
    >
      {{ post.description }}
    </p>
    <slot></slot>
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
