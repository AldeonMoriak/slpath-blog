<template>
  <div class="flex justify-center min-h-screen bg-gray-100 font-vazir">
    <div
      class="w-5/6 md:w-2/3 m-auto bg-white border-2 border-purple-700 rounded"
    >
      <div
        dir="rtl"
        class="p-4 lg:flex lg:justify-around lg:items-center sm:p-12"
      >
        <div class="lg:text-center">
          <h1 class="text-2xl font-bold text-purple-700">
            {{ therapist.name }}
          </h1>
          <p class="text-sm">{{ therapist.occupation }}</p>
        </div>
        <div class="w-16 h-1 my-4 bg-purple-700 rounded lg:w-1 lg:h-16"></div>
        <div dir="ltr">
          <div class="flex items-center py-1">
            <svg
              class="text-purple-700 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="18px"
              height="18px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"
              />
            </svg>
            <a :href="'mailto:' + therapist.email" class="px-4">{{
              therapist.email
            }}</a>
          </div>
          <div class="flex items-center py-1">
            <svg
              class="text-purple-700 fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
              />
            </svg>
            <a :href="'tel:' + therapist.mobileNumber" class="px-4">{{
              therapist.mobileNumber
            }}</a>
          </div>
          <div class="flex items-center py-1">
            <svg
              class="text-purple-700 fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
              />
            </svg>
            <nuxt-link class="px-4" :to="`/blog/${therapist.username}`">{{
              host + '/blog/' + therapist.username
            }}</nuxt-link>
          </div>
          <div v-if="therapist.clinicAddress" class="flex items-center py-1">
            <svg
              class="text-purple-700 fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.13.48 1.53 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
            <span class="px-4">{{ therapist.clinicAddress }}</span>
          </div>
        </div>
      </div>
      <div class="text-white bg-purple-700">
        <div class="p-4 text-sm md:flex md:items-center md:justify-center">
          <a
            v-if="therapist.whatsappId"
            :href="'https://wa.me/' + therapist.whatsappId"
            target="_blank"
            class="flex md:block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-purple-800"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>حساب واتساپ {{ therapist.name }}</title>
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
            <span class="ml-4 md:hidden text-base"
              >+{{ therapist.whatsappId }}</span
            >
          </a>
          <a
            v-if="therapist.telegramUsername"
            :href="'https://t.me/' + therapist.telegramUsername"
            target="_blank"
            class="flex md:block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-purple-800"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>حساب تلگرام {{ therapist.name }}</title>
              <path
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
              />
            </svg>
            <span class="ml-4 md:hidden text-base"
              >@{{ therapist.telegramUsername }}</span
            >
          </a>
          <a
            v-if="therapist.instagramUsername"
            :href="'https://www.instagram.com/' + therapist.instagramUsername"
            target="_blank"
            class="flex md:block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-purple-800"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
            <span class="ml-4 md:hidden text-base"
              >@{{ therapist.instagramUsername }}</span
            >
          </a>
          <a
            v-if="therapist.linkedinId"
            :href="'https://www.linkedin.com/in/' + therapist.linkedinId"
            target="_blank"
            class="flex md:block px-4 py-2 m-2 transition duration-500 ease-in-out rounded hover:bg-purple-800"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
            <span class="ml-4 md:hidden text-base"
              >@{{ therapist.linkedinId }}</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    therapist: {
      type: Object,
      default() {
        return {
          name: '',
          occupation: '',
        }
      },
    },
  },
  computed: {
    host() {
      return process.env.BASEURL // window.location.protocol + '//' + window.location.host
    },
    imageUrl() {
      return `url(https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${this.therapist.profilePictureUrl})`
    },
  },
}
</script>
