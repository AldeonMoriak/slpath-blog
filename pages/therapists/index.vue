<template>
  <div v-if="noData">
    <h1
      class="text-center font-vazir text-purple-600 mt-10 text-2xl sm:text-4xl"
      dir="rtl"
    >
      صفحه در حال ساخت می باشد
    </h1>
    <div class="mx-auto text-center w-sm font-vazir text-purple-600 p-3 mt-5">
      <nuxt-link
        to="/"
        class="hover:(text-purple-800, bg-purple-200) rounded p-5"
        >صفحه اصلی</nuxt-link
      >
    </div>
    <lottie-player
      class="mx-auto h-md"
      autoplay
      loop
      src="/animations/not-found.json"
      speed="1"
      debug
    ></lottie-player>
  </div>
  <div
    v-else
    dir="rtl"
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8 lg:py-20
      font-vazir
    "
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        class="
          max-w-lg
          mb-6
          font-sans
          text-3xl
          font-bold
          leading-none
          tracking-tight
          text-gray-900
          sm:text-4xl
          md:mx-auto
        "
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="
              absolute
              top-0
              left-0
              z-0
              hidden
              w-32
              -mt-8
              ml-20
              text-purple-600
              lg:w-32 lg:ml-28 lg:-mt-10
              sm:block
            "
          >
            <defs>
              <pattern
                id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
              width="52"
              height="24"
            ></rect>
          </svg>
          <span class="relative">درمانگران</span>
        </span>
        وبسایت
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        درمانگران مجرب تانی آنلاین آماده خدمت رسانی به مراجعان عزیز می باشند
      </p>
    </div>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="therapist in therapists" :key="therapist.id">
        <div
          class="
            relative
            overflow-hidden
            transition
            duration-300
            transform
            rounded
            shadow-lg
            lg:hover:-translate-y-2
            hover:shadow-2xl
          "
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            :src="`https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${therapist.profilePictureThumbnailUrl}`"
            :alt="therapist.name"
          />
          <div
            class="
              absolute
              inset-0
              flex flex-col
              justify-center
              px-5
              py-4
              text-center
              transition-opacity
              duration-300
              bg-black bg-opacity-75
              opacity-0
              hover:opacity-100
            "
          >
            <p class="mb-1 text-lg font-bold text-gray-100">
              {{ therapist.name }}
            </p>
            <p class="mb-4 text-xs text-gray-100">{{ therapist.occupation }}</p>
            <p class="mb-4 text-sm tracking-wide text-gray-300 text-right">
              {{ therapist.description }}
            </p>
            <div class="flex items-center justify-center">
              <nuxt-link
                :to="'/therapists/' + therapist.username"
                class="
                  text-gray-800
                  transition-colors
                  duration-300
                  hover:text-purple-800
                  bg-gray-400
                  hover:bg-purple-200
                  px-4
                  py-1
                  rounded-md
                "
              >
                مشاهده
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TherapistsPage',
  data() {
    return {
      therapists: [],
      noData: false,
    }
  },
  async fetch() {
    this.$store.commit('enableLoading')
    const data = await fetch(`${this.$axios.defaults.baseURL}/getTherapists`)
      .then((res) => res.json())
      .finally(() => {
        this.$store.commit('disableLoading')
      })
    if (data && data.length > 0) this.therapists = data
    else this.noData = true
  },
}
</script>
