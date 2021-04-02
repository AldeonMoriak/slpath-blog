<template>
  <div
    dir="rtl"
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 font-vazir"
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 ml-20 text-blue-600 lg:w-32 lg:ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="27df4f81-c854-45de-942a-fe90f7a300f9"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
              width="52"
              height="24"
            ></rect>
          </svg>
          <span class="relative">خدمات</span>
        </span>
        وبسایت
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        خدماتی که در این سامانه به مراجعان عزیز ارائه می شود به شرح زیر می باشد
      </p>
    </div>
    <div class="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
      <div
        v-for="interest in interests"
        :key="interest.id"
        class="flex flex-col max-w-md sm:mx-auto sm:flex-row"
      >
        <div class="ml-4">
          <div
            class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50"
          >
            <svg
              class="w-10 h-10 text-purple-600"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
        </div>
        <div class="bg-white shadow-md rounded-lg py-5 px-2">
          <h6 class="mb-3 text-xl font-bold leading-5">{{ interest.title }}</h6>
          <p class="mb-3 text-sm text-gray-900 prose lg:prose-sm">
            {{ interest.description }}
          </p>
          <nuxt-link
            :to="'/services/' + interest.id"
            aria-label=""
            class="inline-flex items-center font-semibold transition-colors duration-200 bg-purple-200 text-purple-600 hover:bg-purple-400 px-4 rounded-md py-1 align-middle hover:text-purple-200 justify-end"
            >بیشتر</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: [],
    }
  },
  async fetch() {
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/categories/getAll`
    ).then((res) => res.json())
    this.interests = data
  },
}
</script>
