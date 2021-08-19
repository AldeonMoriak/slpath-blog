<template>
  <div v-if="$fetchState.pending">
    <therapist-info-card-skeleton />
  </div>
  <div v-else-if="$fetchState.error">
    <h1
      class="text-center font-vazir text-purple-600 mt-10 text-2xl sm:text-4xl"
    >
      {{ data.message }}
    </h1>
    <div class="mx-auto text-center w-sm font-vazir text-purple-600 p-3 mt-5">
      <a href="/" class="hover:(text-purple-800, bg-purple-200) rounded p-5"
        >صفحه اصلی</a
      >
    </div>
    <lottie-player
      v-if="errorCode === 404"
      class="mx-auto h-md"
      autoplay
      loop
      src="/animations/404.json"
      speed="1"
      debug
    ></lottie-player>
    <lottie-player
      v-if="errorCode !== 404"
      class="mx-auto h-md"
      autoplay
      src="/animations/not-found.json"
      loop
      speed="1"
      debug
    ></lottie-player>
  </div>
  <therapist-info-card v-else-if="therapist" :therapist="therapist" />
  <lottie-player
    v-else
    class="mx-auto h-md"
    autoplay
    loop
    src="/animations/404.json"
    speed="1"
    debug
  ></lottie-player>
</template>

<script>
import TherapistInfoCard from '@/components/TherapistInfoCard'
import TherapistInfoCardSkeleton from '~/components/TherapistInfoCardSkeleton.vue'
export default {
  components: {
    TherapistInfoCard,
    TherapistInfoCardSkeleton,
  },
  data() {
    return {
      therapist: {},
      isError: false,
      errorCode: 0,
    }
  },
  async fetch() {
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/getTherapist/${this.$route.params.therapist}`
    ).then((res) => res.json())
    if (data.statusCode) {
      this.isError = true
      this.errorCode = data.statusCode
    }
    this.therapist = data.user
  },
  head() {
    return this.therapist
      ? {
          title: `${this.therapist.name} @${this.therapist.username} - TaniOnline`,
          meta: [
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              name: 'twitter:site',
              content: `${process.env.baseURL}/blog/${this.therapist.username}`,
            },
            {
              name: 'twitter:title',
              content: 'درمانگر ' + this.therapist.name,
            },
            {
              name: 'twitter:description',
              content: this.therapist.description,
            },
            {
              name: 'twitter:image',
              content: `https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${this.therapist.profilePictureUrl}`,
            },
          ],
        }
      : null
  },
}
</script>
