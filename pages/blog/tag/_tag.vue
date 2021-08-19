<template>
  <main class="max-w-2xl lg:max-w-4xl mx-auto px-6 font-vazir" dir="rtl">
    <article class="grid md:grid-cols-3 md:gap-16">
      <div class="hidden md:block">
        <aside
          v-if="$fetchState.pending"
          class="sticky top-14 space-y-1 font-bold tracking-wide my-14"
        >
          <div class="h-8 w-14 animate-pulse bg-purple-200 rounded-full" />
        </aside>

        <p v-else-if="$fetchState.error" class="block">
          مشکلی پیش آمده است. لطفا صفحه را رفرش کنید
        </p>
        <aside
          v-else
          class="sticky top-14 space-y-1 font-bold tracking-wide my-14 text-center"
        >
          <span class="text-gray-500 font-thin block"> مقالاتی که تگ </span>
          <div
            class="text-purple-800 bg-purple-200 px-2 ml-1 rounded-full text-sm hover:bg-purple-300 h-8 text-center py-2 inline-block"
          >
            {{ $route.params.tag }}
          </div>
          <span class="text-gray-500 font-thin block">
            در آن ها استفاده شده است
          </span>
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
    </article>
  </main>
</template>

<script>
export default {
  name: 'Writer',
  data() {
    return {
      posts: [],
      page: 1,
      limit: 10,
    }
  },
  async fetch() {
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/articles/tag/${encodeURIComponent(
        this.$route.params.tag
      )}?page=${this.page}&limit=${this.limit}`
    ).then((res) => res.json())
    this.posts = data
  },
  methods: {},
}
</script>
