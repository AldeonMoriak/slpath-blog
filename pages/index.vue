<template>
  <div dir="rtl" class="font-vazir px-4">
    <!-- <h1
      class="text-4xl sm:text-6xl lg:text-7xl leading-none font-medium tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10 text-right"
    >
      جامعه آنلاین توانبخشی ایران
    </h1>
    <p
      class="max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11 text-right text-gray-400"
    >
      تفاوت میان دانش و تجارت
    </p> -->
    <!-- <p class="text-lg font-light text-gray-600">خدمات وبسایت</p> -->
    <div class="mt-40">
      <services-card ref="services">
        <div class="flex flex-col w-full sm:max-w-sm lg:mx-0">
          <div class="flex justify-between items-end">
            <p class="text-xl font-medium text-gray-600 mb-2 xl:text-2xl">
              خدمات وبسایت
            </p>
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

          <div
            class="border-b-2 shadow-md rounded border-purple-900 mb-4"
          ></div>
        </div>
      </services-card>
    </div>
    <div class="mt-20">
      <therapists-card ref="therapists">
        <div class="flex flex-col w-full sm:max-w-sm lg:mx-0">
          <div class="flex justify-between items-end">
            <p class="text-xl font-medium text-gray-600 mb-2 xl:text-2xl">
              درمانگران وبسایت
            </p>
            <div>
              <div
                class="rounded-sm h-6 w-6 text-purple-600 bg-purple-200 hover:bg-purple-300 inline-block cursor-pointer"
                @click="nextTherapist"
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
                @click="previousTherapist"
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

          <div
            class="border-b-2 shadow-md rounded border-purple-900 mb-4"
          ></div>
        </div>
      </therapists-card>
    </div>
  </div>
</template>

<script>
import ServicesCard from '@/components/ServicesCard'
import TherapistsCard from '~/components/TherapistsCard.vue'
export default {
  components: {
    ServicesCard,
    TherapistsCard,
  },
  methods: {
    next() {
      this.$refs.services.next()
    },
    previous() {
      this.$refs.services.previous()
    },
    nextTherapist() {
      this.$refs.therapists.next()
    },
    previousTherapist() {
      this.$refs.therapists.previous()
    },
  },
}
</script>
