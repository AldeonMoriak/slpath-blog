<template>
  <div class="shadow-md z-40" dir="rtl">
    <loading v-if="$store.state.isLoading" />
    <div class="antialiased bg-gray-100 dark-mode:bg-gray-900 font-vazir">
      <div
        class="
          w-full
          text-gray-700
          bg-white
          dark-mode:text-gray-200 dark-mode:bg-gray-800
          h-70px
        "
      >
        <div
          class="
            flex flex-col
            max-w-screen-xl
            px-4
            mx-auto
            md:items-center md:justify-between md:flex-row md:px-6
            lg:px-8
          "
        >
          <div
            v-on-clickaway="closeNav"
            class="flex flex-row items-center justify-between px-4"
          >
            <nuxt-link
              to="/"
              class="
                text-lg
                font-semibold
                tracking-widest
                text-purple-900
                uppercase
                rounded-lg
                dark-mode:text-white
                focus:outline-none focus:shadow-outline
                hover:bg-purple-200
                px-1
                py-3
                mt-1
                flex
                items-center
              "
            >
              <!-- <nuxt-img
                width="40"
                class="text-purple-400"
                src="/images/TANI.svg"
              /> -->
              <img
                src="/images/chikaraWhite.svg"
                class="bg-purple-500 rounded-full p-1 ml-1 w-9"
              />

              <h1
                class="
                  text-xl
                  leading-none
                  font-medium
                  tracking-tight
                  text-gray-900 text-right
                "
              >
                جامعه آنلاین توانبخشی ایران
              </h1>
            </nuxt-link>
            <button
              class="
                rounded-lg
                md:hidden
                focus:outline-none focus:shadow-outline
              "
              @click.stop="
                openNav = !openNav
                open = false
              "
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  v-show="!openNav"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
                <path
                  v-show="openNav"
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            :class="[
              openNav ? 'flex' : 'hidden',
              'flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row md:content-center md:items-center transition duration-500 ease-in-out fixed top-0 mt-18 bg-white inset-x-0 md:static md:mt-0 z-40 shadow-md md:shadow-none',
            ]"
          >
            <nuxt-link
              to="/"
              :class="[
                'header-item',
                pageUrl === '/' ? 'active-header-item' : '',
              ]"
              >صفحه اصلی</nuxt-link
            >
            <nuxt-link
              to="/blog"
              :class="[
                'header-item',
                pageUrl.includes('/blog') ? 'active-header-item' : '',
              ]"
              >مقالات</nuxt-link
            >
            <nuxt-link
              to="/services"
              :class="[
                'header-item',
                pageUrl.includes('/services') ? 'active-header-item' : '',
              ]"
              >خدمات</nuxt-link
            >
            <nuxt-link
              to="/therapists"
              :class="[
                'header-item',
                pageUrl.includes('/therapists') ? 'active-header-item' : '',
              ]"
              >درمانگران</nuxt-link
            >
            <!-- <nuxt-link
              to="/features"
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >درباره ما</nuxt-link
            >
            <nuxt-link
              to="/"
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >تماس با ما</nuxt-link
            > -->
            <!-- <div
              v-on-clickaway="close"
              class="relative"
              @click.stop="open = !open"
            >
              <button
                class="flex flex-row text-gray-900 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                @click.stop="open = !open"
              >
                <span>More</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  :class="{ 'rotate-180': open, 'rotate-0': !open }"
                  class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                v-if="open"
                class="absolute left-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right transition duration-500 ease-in-out z-50"
              >
                <div
                  class="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700"
                >
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <nuxt-link
                      class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      to="/faqs"
                    >
                      <div class="bg-purple-400 rounded-lg p-3">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          class="md:h-6 md:w-6 h-4 w-4 text-purple-200"
                        >
                          <path
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          ></path>
                        </svg>
                      </div>
                      <div class="ml-3">
                        <p class="font-semibold">FAQs</p>
                        <p class="text-sm">Frequently Asked Questions</p>
                      </div>
                    </nuxt-link>

                    <nuxt-link
                      class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      to="/privacy-terms"
                    >
                      <div class="bg-purple-400 rounded-lg p-3">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          class="md:h-6 md:w-6 h-4 w-4 text-purple-200"
                        >
                          <path
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          ></path>
                        </svg>
                      </div>
                      <div class="ml-3">
                        <p class="font-semibold">Privacy Policy</p>
                        <p class="text-sm">Our Privacy Terms Page</p>
                      </div>
                    </nuxt-link>

                    <a
                      class="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      <div class="bg-purple-400 rounded-lg p-3">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          class="md:h-6 md:w-6 h-4 w-4 text-purple-200"
                        >
                          <path
                            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                          ></path>
                          <path
                            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                          ></path>
                        </svg>
                      </div>
                      <div class="ml-3">
                        <p class="font-semibold">Analytics</p>
                        <p class="text-sm">Take a look at your statistics</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> -->
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import Loading from './Loading.vue'
export default {
  components: { Loading },
  mixins: [clickaway],
  data() {
    return {
      open: false,
      openNav: false,
    }
  },
  computed: {
    pageUrl() {
      return this.$route.fullPath
    },
  },
  methods: {
    close() {
      this.open = false
    },
    closeNav() {
      this.openNav = false
    },
  },
}
</script>
