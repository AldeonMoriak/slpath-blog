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
  <main v-else class="max-w-2xl lg:max-w-4xl mx-auto px-6 font-vazir" dir="rtl">
    <article class="grid md:grid-cols-3 md:gap-16">
      <div class="hidden md:block">
        <aside
          class="
            sticky
            top-28
            space-y-1
            font-bold
            tracking-wide
            my-14
            text-center
          "
        >
          <div class="text-gray-700 font-normal bg-purple-200 rounded-full">
            جدیدترین مقالات وبسایت
          </div>
        </aside>
      </div>
      <div v-if="$fetchState.pending" class="col-span-2 space-y-12 mt-16">
        <blog-post-skeleton />
      </div>
      <p v-else-if="$fetchState.error" class="block">
        مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
      </p>
      <div v-else class="col-span-2 space-y-12 mt-16">
        <blog-post
          v-for="fetchedPost in posts"
          :key="fetchedPost.id"
          :post="{
            excerpt: fetchedPost.description,
            image: `https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${fetchedPost.imageUrl}`,
            link: `/blog/${fetchedPost.admin.username}/${fetchedPost.id}`,
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
      <div v-if="isLoading" class="col-span-2 space-y-12 mt-16">
        <blog-post-skeleton />
      </div>
    </article>
  </main>
</template>

<script>
import infiniteScroll from '@/mixins/infiniteScroll'
export default {
  name: 'RecentPosts',
  mixins: [infiniteScroll],
  data() {
    return {
      posts: [],
      page: 1,
      limit: 10,
      totalCount: 0,
      noData: false,
    }
  },
  async fetch() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      this.$store.commit('enableLoading')
      const posts = await fetch(
        `${this.$axios.defaults.baseURL}/articles/getAll?page=${this.page}&limit=${this.limit}`
      )
        .then((res) => res.json())
        .finally(() => {
          this.$store.commit('disableLoading')
        })
      if (posts.data && posts.data.length > 0) {
        this.page++
        this.posts.push(...posts.data)
      } else this.noData = true
      this.totalCount = posts.totalCount
    },
  },
}
</script>
