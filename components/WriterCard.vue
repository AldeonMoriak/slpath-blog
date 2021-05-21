<template>
  <div
    class="font-vazir"
    @mouseover="$emit('mouse-over-event')"
    @mouseout="$emit('mouse-out-event')"
  >
    <img
      :alt="writer.alt"
      :src="writer.image"
      class="object-cover w-full text-sm mx-auto shadow-inner rounded-md mb-3"
      @click="$router.push('/therapists/' + writer.username)"
    />
    <p
      class="text-gray-900 text-lg font-medium text-right leading-8"
      aria-label="نام نویسنده"
    >
      {{ writer.name }}
    </p>
    <p
      class="text-gray-500 text-right font-medium text-xs prose max-w-xs sm:prose-sm"
    >
      {{ writer.description }}
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    writer: {
      type: Object,
      default() {
        return {
          image: '',
          name: '',
          alt: '',
          username: '',
        }
      },
    },
  },
}
</script>
