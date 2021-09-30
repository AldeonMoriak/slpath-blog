<template>
  <div v-if="noData">
    <h1
      class="text-center font-vazir text-purple-600 mt-10 text-2xl sm:text-4xl"
      dir="rtl"
    >
      هنوز مطلبی در این صفحه قرار نگرفته است.
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
      src="/animations/blogger.json"
      speed="1"
      debug
    ></lottie-player>
  </div>
  <div v-else dir="rtl" class="font-vazir">
    <div
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div class="flex flex-col w-full sm:max-w-sm mx-auto lg:mx-0">
        <div class="flex justify-between items-baseline align-baseline">
          <p class="text-xl font-medium text-gray-500 mb-2">
            پربازدیدترین مقالات
          </p>
          <nuxt-link
            to="blog/most-viewed"
            class="
              flex
              transition-colors
              duration-200
              text-purple-800
              hover:text-purple-600
            "
          >
            <span class="ml-1"> همه </span>
            <div class="rounded-full h-5 w-5 bg-white hover:bg-purple-200">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </nuxt-link>
        </div>

        <!-- <div class="border-b-2 shadow-md rounded border-purple-900 mb-4"></div> -->
      </div>
      <div
        v-if="$fetchState.pending"
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <blog-post-skeleton />
        <blog-post-skeleton />
        <blog-post-skeleton />
      </div>
      <p v-else-if="$fetchState.error" class="block">
        مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
      </p>
      <div
        v-else
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <blog-post
          v-for="fetchedPost in favs"
          :key="fetchedPost.id"
          :post="{
            excerpt: fetchedPost.description,
            image: `https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${fetchedPost.thumbnailUrl}`,
            link: `blog/${fetchedPost.admin.username}/${fetchedPost.id}`,
            date: fetchedPost.createdDateTime,
            views: fetchedPost.views,
            comments: fetchedPost.commentCount,
            title: fetchedPost.title,
            author: {
              name: fetchedPost.admin.name,
              image: `https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${fetchedPost.admin.profilePictureThumbnailUrl}`,
              link: `/blog/${fetchedPost.admin.username}`,
            },
          }"
        />
      </div>
    </div>
    <div
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div class="flex flex-col w-full sm:max-w-sm mx-auto lg:mx-0">
        <div class="flex justify-between items-baseline align-baseline">
          <p class="text-xl font-medium text-gray-500 mb-2">جدیدترین مقالات</p>
          <nuxt-link
            to="blog/posts"
            class="
              flex
              transition-colors
              duration-200
              text-purple-800
              hover:text-purple-600
            "
          >
            <span class="ml-1"> همه </span>
            <div class="rounded-full h-5 w-5 bg-white hover:bg-purple-200">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </nuxt-link>
        </div>
        <!-- <div class="border-b-2 shadow-md rounded border-purple-900 mb-4"></div> -->
      </div>
      <div
        v-if="$fetchState.pending"
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <blog-post-skeleton />
        <blog-post-skeleton />
        <blog-post-skeleton />
      </div>
      <p v-else-if="$fetchState.error" class="block">
        مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
      </p>
      <div
        v-else
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <blog-post
          v-for="fetchedPost in posts"
          :key="fetchedPost.id"
          :post="{
            excerpt: fetchedPost.description,
            image: `https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${fetchedPost.thumbnailUrl}`,
            link: `blog/${fetchedPost.admin.username}/${fetchedPost.id}`,
            date: fetchedPost.createdDateTime,
            views: fetchedPost.views,
            comments: fetchedPost.commentCount,
            title: fetchedPost.title,
            author: {
              name: fetchedPost.admin.name,
              image: `https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${fetchedPost.admin.profilePictureThumbnailUrl}`,
              link: `/blog/${fetchedPost.admin.username}`,
            },
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlogPostSkeleton from '@/components/BlogPostSkeleton'
export default {
  components: { BlogPostSkeleton },
  data() {
    return {
      posts: [],
      favs: [],
      noData: false,
    }
  },
  async fetch() {
    this.$store.commit('enableLoading')
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/articles/getAll?page=1&limit=3`
    )
      .then((res) => res.json())
      .finally(() => {
        this.$store.commit('disableLoading')
      })
    if (data.data && data.data.length > 0) {
      this.posts = data.data
    } else {
      this.noData = true
    }

    this.$store.commit('enableLoading')
    const favs = await fetch(
      `${this.$axios.defaults.baseURL}/articles/getAllFavs?page=1&limit=3`
    )
      .then((res) => res.json())
      .finally(() => {
        this.$store.commit('disableLoading')
      })
    this.favs = favs.data
  },
}
</script>
