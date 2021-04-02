<template>
  <main class="max-w-2xl lg:max-w-4xl mx-auto px-6 font-vazir" dir="rtl">
    <div class="max-w-max mx-auto md:hidden mt-8 md:mt-0">
      <div v-if="$fetchState.pending" class="space-y-1 font-bold tracking-wide">
        <writer-card-skeleton />
      </div>

      <p v-else-if="$fetchState.error">
        مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
      </p>
      <div v-else>
        <writer-card
          :post="{
            name: `${posts[0].admin.name}`,
            alt: `عکس
          ${posts[0].admin.name}`,
            image: `${$axios.defaults.baseURL}/image/${posts[0].admin.profilePictureThumbnailUrl}`,
            description: `${posts[0].admin.description}`,
          }"
        >
          <nuxt-link
            :to="'/therapists/' + posts[0].admin.username"
            aria-label=""
            class="inline-flex items-center font-semibold transition-colors duration-200 bg-purple-200 text-purple-600 hover:bg-purple-300 hover:text-purple-900 justify-end p-2 rounded-md mt-2"
            >بیشتر</nuxt-link
          >
        </writer-card>
      </div>
    </div>
    <main class="grid md:grid-cols-3 md:gap-16">
      <div class="hidden md:block">
        <aside
          v-if="$fetchState.pending"
          class="sticky top-14 space-y-1 font-bold tracking-wide my-14"
        >
          <writer-card-skeleton />
        </aside>

        <p v-else-if="$fetchState.error">
          مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
        </p>
        <aside
          v-else
          class="sticky top-14 space-y-1 font-bold tracking-wide my-14"
        >
          <writer-card
            class="w-52"
            :post="{
              name: `${posts[0].admin.name}`,
              alt: `عکس
          ${posts[0].admin.name}`,
              image: `${$axios.defaults.baseURL}/image/${posts[0].admin.profilePictureThumbnailUrl}`,
              description: `${posts[0].admin.description}`,
            }"
          >
            <nuxt-link
              :to="'/therapists/' + posts[0].admin.username"
              aria-label=""
              class="inline-flex items-center font-semibold transition-colors duration-200 bg-purple-200 text-purple-600 hover:bg-purple-300 hover:text-purple-900 justify-end p-2 rounded-md mt-2"
              >بیشتر</nuxt-link
            >
          </writer-card>
        </aside>
      </div>
      <div v-if="$fetchState.pending" class="col-span-2 space-y-12 mt-16">
        <blog-post-skeleton />
      </div>
      <p v-else-if="$fetchState.error">
        مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
      </p>
      <div v-else class="col-span-2 space-y-12 mt-16">
        <blog-post
          v-for="fetchedPost in posts"
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
    </main>
  </main>
</template>

<script>
import WriterCard from '~/components/WriterCard.vue'
import WriterCardSkeleton from '~/components/WriterCardSkeleton.vue'
import infiniteScroll from '~/mixins/infiniteScroll'
export default {
  name: 'Writer',
  components: { WriterCard, WriterCardSkeleton },
  mixins: [infiniteScroll],
  data() {
    return {
      posts: [],
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
      const data = await fetch(
        `${this.$axios.defaults.baseURL}/articles/getPosts/${this.$route.params.slug}?page=${this.page}&limit=${this.limit}`
      ).then((res) => res.json())
      this.posts.push(...data.data)
      if (data.data && data.data.length > 0) this.page++
      this.totalCount = data.totalCount
    },
  },
}
</script>
