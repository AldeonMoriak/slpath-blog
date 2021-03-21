<template>
  <main class="max-w-2xl lg:max-w-4xl mx-auto px-6 font-vazir" dir="rtl">
    <article class="grid md:grid-cols-3 md:gap-16">
      <div class="hidden md:block">
        <aside
          class="sticky top-28 space-y-1 font-bold tracking-wide my-14 text-center"
        >
          <div class="text-gray-700 font-normal bg-purple-200 rounded-full">
            پر بازدید ترین مقالات وبسایت
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
          v-for="fetchedPost in favs"
          :key="fetchedPost.id"
          :post="{
            excerpt: fetchedPost.description,
            image: `${$axios.defaults.baseURL}/articles/image/${fetchedPost.imageUrl}`,
            link: `/blog/${fetchedPost.admin.username}/${fetchedPost.id}`,
            date: fetchedPost.createdDateTime,
            views: fetchedPost.views,
            comments: fetchedPost.commentCount,
            title: fetchedPost.title,
            author: {
              name: fetchedPost.admin.name,
              image: `${$axios.defaults.baseURL}/image/${fetchedPost.admin.profilePictureThumbnailUrl}`,
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
import infiniteScroll from '../../mixins/infiniteScroll'
export default {
  name: 'MostViewedPosts',
  mixins: [infiniteScroll],
  data() {
    return {
      favs: [],
      page: 1,
      limit: 10,
      totalCount: 0,
    }
  },
  async fetch() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      const favs = await fetch(
        `${this.$axios.defaults.baseURL}/articles/getAllFavs?page=${this.page}&limit=${this.limit}`
      ).then((res) => res.json())
      if (favs.data && favs.data.length > 0) this.page++
      this.favs.push(...favs.data)
      this.totalCount = favs.totalCount
    },
  },
}
</script>
