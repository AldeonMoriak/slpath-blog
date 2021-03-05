<template>
  <main class="max-w-2xl lg:max-w-6xl mx-auto px-6 font-wyekan" dir="rtl">
    <article class="grid md:grid-cols-3 md:gap-16">
      <div class="hidden md:block">
        <aside
          v-if="$fetchState.pending"
          class="sticky top-14 space-y-1 font-bold tracking-wide my-14"
        >
          <writer-card-skeleton />
        </aside>

        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <aside
          v-else
          class="sticky top-14 space-y-1 font-bold tracking-wide my-14"
        >
          <writer-card
            class="w-36"
            :post="{
              name: `${posts[0].admin.name}`,
              alt: `عکس
          ${posts[0].admin.name}`,
              image: `${$axios.defaults.baseURL}/image/${posts[0].admin.profilePictureThumbnailUrl}`,
              description: `${posts[0].admin.description}`,
            }"
          />
        </aside>
      </div>
      <div v-if="$fetchState.pending" class="col-span-2 space-y-12 mt-16">
        <blog-post-skeleton />
      </div>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else class="col-span-2 space-y-12 mt-16">
        <blog-post
          v-for="fetchedPost in posts"
          :key="fetchedPost.id"
          :post="{
            excerpt: fetchedPost.description,
            image: `${$axios.defaults.baseURL}/articles/image/${fetchedPost.thumbnailUrl}`,
            link: `blog/${fetchedPost.admin.username}/${fetchedPost.id}`,
            date: fetchedPost.createdDateTime,
            views: 10,
            comments: 2,
            title: fetchedPost.title,
            author: {
              name: fetchedPost.admin.name,
              image: `${$axios.defaults.baseURL}/image/${fetchedPost.admin.profilePictureThumbnailUrl}`,
              link: `/blog/${fetchedPost.admin.username}`,
            },
          }"
        />
      </div>
    </article>
  </main>
</template>

<script>
import WriterCard from '~/components/WriterCard.vue'
import WriterCardSkeleton from '~/components/WriterCardSkeleton.vue'
export default {
  name: 'Writer',
  components: { WriterCard, WriterCardSkeleton },
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/articles/getPosts/${this.$route.params.slug}`
    ).then((res) => res.json())
    this.posts = data
  },
  methods: {},
}
</script>
