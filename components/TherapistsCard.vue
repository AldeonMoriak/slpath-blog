<template>
  <div v-if="$fetchState.pending" class="text-center text-lg text-purple-400">
    در حال بارگزاری
  </div>
  <div
    v-else-if="$fetchState.error || therapists.length < 1"
    class="text-center text-lg text-purple-400"
  >
    خطایی رخ داده است. لطفا صفحه را رفرش کنید.
  </div>
  <div v-else>
    <slot></slot>
    <div class="h-2 relative overflow-hidden">
      <div class="w-full h-full bg-gray-200 absolute"></div>
      <div
        class="
          h-full
          bg-purple-500
          relative
          transition-all
          ease-linear
          duration-1000
        "
        :class="width"
      ></div>
    </div>
    <transition mode="out-in" name="fade">
      <div
        :key="therapists[index].id"
        class="
          grid grid-cols-1
          sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8
          md:py-16
          bg-white
        "
        @mouseover="pauseHandler"
        @mouseout="continueInterval"
      >
        <div
          class="
            relative
            z-10
            col-start-1
            row-start-1
            px-4
            pt-40
            pb-3
            bg-gradient-to-t
            from-black
            sm:bg-none
          "
        >
          <h2
            class="
              text-xl
              font-semibold
              text-white
              sm:text-2xl sm:leading-7 sm:text-black
              md:text-3xl
            "
          >
            {{ therapists[index].name }}
          </h2>
        </div>
        <div class="col-start-1 row-start-2 px-4 sm:pb-6">
          <div class="flex items-center text-sm font-medium">
            <div
              v-for="interest in therapists[index].categories"
              :key="interest.id"
              class="
                text-purple-600
                bg-purple-200
                my-1
                px-2
                ml-1
                rounded-full
                text-base
                hover:bg-purple-300
                max-h-12
                mr-1
              "
            >
              <nuxt-link :to="'/services/' + interest.id">
                {{ interest.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="col-start-1 row-start-3 space-y-3 px-4 my-5 sm:mt-2 sm:mb-4"
        >
          <p class="flex items-center prose lg:prose-lg">
            {{ therapists[index].description }}
          </p>
          <div>
            <nuxt-link
              :to="'/therapists/' + therapists[index].username"
              class="
                bg-purple-100
                text-purple-700 text-base
                font-semibold
                px-6
                py-1
                mt-10
                rounded-lg
                hover:bg-purple-300 hover:text-purple-900
              "
            >
              اطلاعات تماس
            </nuxt-link>
          </div>
        </div>
        <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
            <div class="relative col-span-3 row-span-2 md:col-span-2">
              <img
                :src="`https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${therapists[index].profilePictureUrl}`"
                :alt="therapists[index].title"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  bg-gray-100
                  sm:rounded-lg
                  transition-all
                  ease-out
                  duration-1000
                  shadow-inner
                "
              />
            </div>
            <div class="relative hidden md:block">
              <img
                :src="`https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${therapists[secondOne].profilePictureThumbnailUrl}`"
                :alt="therapists[secondOne].title"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  rounded-lg
                  bg-gray-100
                  shadow-inner
                  cursor-pointer
                "
                @click="next"
              />
            </div>
            <div class="relative hidden md:block">
              <img
                :src="`https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${therapists[thirdOne].profilePictureUrl}`"
                :alt="therapists[thirdOne].title"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  rounded-lg
                  bg-gray-100
                  shadow
                  cursor-pointer
                "
                @click="doubleNext"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import sliderCounter from '@/mixins/sliderCounter.js'
export default {
  name: 'TherapistCard',
  mixins: [sliderCounter],
  data() {
    return {
      therapists: [],
    }
  },
  async fetch() {
    this.$store.commit('enableLoading')
    const data = await fetch(`${this.$axios.defaults.baseURL}/getTherapists`)
      .then((res) => res.json())
      .finally(() => {
        this.$store.commit('disableLoading')
      })
    this.therapists = data
    this.lastIndex = data.length - 1
  },
}
</script>
