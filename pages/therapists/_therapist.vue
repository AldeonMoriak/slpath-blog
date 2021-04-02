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
}
</script>
