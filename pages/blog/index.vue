<template>
  <div dir="rtl" class="font-wyekan">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <p class="text-xl font-semibold text-gray-500 mb-2">
        پربازدیدترین مقالات
      </p>
      <div class="border-b-2 border-gray-400 mb-4 w-72"></div>
      <div
        v-if="$fetchState.pending"
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <blog-post-skeleton />
        <blog-post-skeleton />
        <blog-post-skeleton />
      </div>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div
        v-else
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <blog-post
          v-for="fetchedPost in posts"
          :key="fetchedPost.id"
          :post="{
            excerpt: fetchedPost.description,
            image: `${$axios.defaults.baseURL}/articles/image/${fetchedPost.thumbnailUrl}`,
            link: `blog/${fetchedPost.admin.username}/${fetchedPost.id}`,
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
    </div>
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <p class="text-xl font-semibold text-gray-500 mb-2">جدیدترین مقالات</p>
      <div class="border-b-2 border-gray-400 mb-4 w-72"></div>
      <div
        v-if="$fetchState.pending"
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <blog-post-skeleton />
        <blog-post-skeleton />
        <blog-post-skeleton />
      </div>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div
        v-else
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <blog-post
          v-for="fetchedPost in posts"
          :key="fetchedPost.id"
          :post="{
            excerpt: fetchedPost.description,
            image: `${$axios.defaults.baseURL}/articles/image/${fetchedPost.thumbnailUrl}`,
            link: `blog/${fetchedPost.admin.username}/${fetchedPost.id}`,
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
    }
  },
  async fetch() {
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/articles/getAll`
    ).then((res) => res.json())
    console.log(data)
    this.posts = data
  },
}
</script>
