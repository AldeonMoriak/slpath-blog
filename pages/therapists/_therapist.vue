<template>
  <therapist-info-card :therapist="therapist" />
</template>

<script>
import TherapistInfoCard from '@/components/TherapistInfoCard'
export default {
  components: {
    TherapistInfoCard,
  },
  data() {
    return {
      therapist: {},
    }
  },
  async fetch() {
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/getTherapist/${this.$route.params.therapist}`
    ).then((res) => res.json())
    this.therapist = data.user
  },
  head() {
    return {
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
          content:
            'http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg',
        },
      ],
    }
  },
}
</script>
