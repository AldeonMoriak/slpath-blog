<template>
  <div
    dir="rtl"
    class="max-w-3xl lg:max-w-4xl mx-auto grid md:grid-cols-4 md:gap-16 font-vazir"
  >
    <div
      v-if="interest.therapists && interest.therapists.length > 0"
      class="hidden md:block"
    >
      <aside
        v-if="$fetchState.pending"
        class="sticky top-28 space-y-1 font-bold tracking-wide my-14"
      >
        <writer-card-skeleton />
      </aside>

      <p v-else-if="$fetchState.error">
        مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
      </p>
      <aside
        v-else
        class="sticky top-28 space-y-1 font-bold tracking-wide my-14"
      >
        <div class="flex justify-between w-52">
          <p>درمانگران مرتبط</p>
          <div>
            <div
              class="rounded-sm h-6 w-6 text-purple-600 bg-purple-200 hover:bg-purple-300 inline-block cursor-pointer"
              @click="next"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              class="rounded-sm h-6 w-6 text-purple-600 bg-purple-200 hover:bg-purple-300 inline-block cursor-pointer"
              @click="previous"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="h-1 w-52 relative overflow-hidden">
          <div class="w-full h-full bg-gray-200 absolute"></div>
          <div
            class="h-full bg-purple-500 relative transition-all ease-out duration-1000"
            :class="width"
          ></div>
        </div>
        <transition name="fade" mode="out-in">
          <writer-card
            :key="interest.therapists[index].id"
            class="w-52"
            :writer="{
              username: `${interest.therapists[index].username}`,
              name: `${interest.therapists[index].name}`,
              alt: `عکس
          ${interest.therapists[index].name}`,
              image: `${$axios.defaults.baseURL}/image/${interest.therapists[index].profilepictureUrl}`,
              description: `${interest.therapists[index].description}`,
            }"
            @mouse-over-event="pauseHandler"
            @mouse-out-event="continueInterval"
          >
            <nuxt-link
              :to="'/therapists/' + interest.therapists[index].username"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 bg-purple-200 text-purple-600 hover:bg-purple-300 hover:text-purple-900 justify-end p-2 rounded-md mt-2"
              >بیشتر</nuxt-link
            >
          </writer-card>
        </transition>
      </aside>
    </div>
    <div
      v-if="$fetchState.pending"
      class="px-4 py-14 mx-auto w-full col-span-3"
    >
      <blog-post-skeleton class="w-full mx-auto mb-8 text-left md:w-3/4" />
    </div>
    <div v-else class="w-full col-span-3 mx-auto px-4">
      <article
        class="space-y-12 mt-16"
        itemid="#"
        itemscope
        itemtype="http://schema.org/BlogPosting"
      >
        <div class="mb-8 mx-auto">
          <img
            :src="
              interest
                ? `${$axios.defaults.baseURL}/categories/image/${interest.imageUrl}`
                : null
            "
            class="object-cover w-full h-64 bg-center rounded-t-lg"
            :alt="interest.title"
          />
          <div class="py-0.5 pr-1">
            <h1
              class="mb-3 mt-2 mr-3 text-xl font-black leading-tight text-gray-900 md:text-2xl"
              itemprop="headline"
              :title="interest.title"
            >
              {{ interest.title }}
            </h1>
          </div>
        </div>
        <p
          v-if="interest.therapists && interest.therapists.length > 0"
          class="shadow-lg py-2 font-medium text-purple-600 cursor-pointer text-2xl text-center bg-purple-300 rounded-md mx-auto md:hidden"
          @click="$scrollTo('#therapists')"
        >
          درمانگران مرتبط
        </p>

        <div class="">
          <div
            v-viewer.static
            class="list-disc font-vazir p-5 rounded-xl ck-content prose lg:prose-xl mx-auto selection"
            dir="rtl"
            v-html="interest.content"
          ></div>
        </div>
      </article>
    </div>

    <div
      v-if="interest.therapists && interest.therapists.length > 0"
      class="col-span-3 max-w-max mx-auto md:hidden mt-8 md:mt-0"
    >
      <div v-if="$fetchState.pending" class="space-y-1 font-bold tracking-wide">
        <writer-card-skeleton />
      </div>

      <p v-else-if="$fetchState.error">
        مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
      </p>
      <div v-else id="therapists" class="space-y-1 font-medium tracking-wide">
        <div class="flex justify-between w-full">
          <p>درمانگران مرتبط</p>
          <div>
            <div
              class="rounded-sm h-6 w-6 text-purple-600 bg-purple-200 hover:bg-purple-300 inline-block cursor-pointer"
              @click="next"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              class="rounded-sm h-6 w-6 text-purple-600 bg-purple-200 hover:bg-purple-300 inline-block cursor-pointer"
              @click="previous"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="h-1 w-full relative overflow-hidden">
          <div class="w-full h-full bg-gray-200 absolute"></div>
          <div
            class="h-full bg-purple-500 relative transition-all ease-out duration-1000"
            :class="width"
          ></div>
        </div>
        <transition name="fade" mode="out-in">
          <writer-card
            :key="interest.therapists[index].id"
            :writer="{
              username: `${interest.therapists[index].username}`,
              name: `${interest.therapists[index].name}`,
              alt: `عکس ${interest.therapists[index].name}`,
              image: `${$axios.defaults.baseURL}/image/${interest.therapists[index].profilepictureUrl}`,
              description: `${interest.therapists[index].description}`,
            }"
            @mouse-over-event="pauseHandler"
            @mouse-out-event="continueInterval"
          >
            <nuxt-link
              :to="'/therapists/' + interest.therapists[index].username"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 bg-purple-200 text-purple-600 hover:bg-purple-300 hover:text-purple-900 justify-end p-2 rounded-md mt-2"
              >بیشتر</nuxt-link
            >
          </writer-card>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicePage',
  data() {
    return {
      interest: {},
      index: 0,
      lastIndex: 0,
      progressInterval: 0,
      width: 'w-0',
      widthIndex: 0,
      widthList: [
        'w-0',
        'w-1/6',
        'w-2/6',
        'w-3/6',
        'w-4/6',
        'w-5/6',
        'w-full',
        'w-screen',
      ],
      pause: false,
    }
  },
  async fetch() {
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/categories/getCategory/${this.$route.params.service}`
    ).then((res) => res.json())
    this.interest = data
    this.lastIndex =
      data.therapists && data.therapists.length !== 0
        ? data.therapists.length - 1
        : 0
  },
  watch: {
    width(val) {
      if (val === this.widthList[this.widthList.length - 1]) {
        this.next()
      }
    },
  },
  mounted() {
    this.progressBarIndicator()
  },
  beforeDestroy() {
    this.clearBarInterval()
  },
  methods: {
    next() {
      this.clearBarInterval()
      this.index = this.index === this.lastIndex ? 0 : this.index + 1
      this.width = 'w-0'
      this.progressBarIndicator()
    },
    previous() {
      this.clearBarInterval()
      this.index = this.index === 0 ? this.lastIndex : this.index - 1
      this.width = 'w-0'
      this.progressBarIndicator()
    },
    pauseHandler() {
      this.pause = true
    },
    continueInterval() {
      this.pause = false
    },
    progressBarIndicator() {
      this.widthIndex = 1
      this.progressInterval = setInterval(() => {
        if (!this.pause) {
          this.width = this.widthList[this.widthIndex]
          this.widthIndex++
          if (this.width === this.widthList[this.widthList.length - 1]) {
            this.clearBarInterval()
          }
        }
      }, 1000)
    },
    clearBarInterval() {
      clearInterval(this.progressInterval)
    },
  },
}
</script>
