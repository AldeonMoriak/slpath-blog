<template>
  <div>
    <div v-if="$fetchState.pending" class="container px-4 py-14 mx-auto">
      <blog-post-skeleton
        class="w-full mx-auto mb-8 text-left md:w-3/4 lg:w-1/2"
      />
    </div>
    <div v-else class="w-full mx-auto md:w-3/4 lg:w-1/2 font-wyekan px-4">
      <article
        dir="rtl"
        class="container py-14 mx-auto"
        itemid="#"
        itemscope
        itemtype="http://schema.org/BlogPosting"
      >
        <div class="mb-8">
          <img
            :src="`${$axios.defaults.baseURL}/articles/image/${post.imageUrl}`"
            class="object-cover w-full h-64 bg-center rounded-t-lg"
            :alt="post.title"
          />
          <div class="bg-white rounded-b-xl py-0.5 pr-1 shadow-md">
            <h1
              class="mb-3 mt-1 text-xl font-bold leading-tight text-gray-900 md:text-2xl"
              itemprop="headline"
              :title="post.title"
            >
              {{ post.title }}
            </h1>
            <div class="flex mb-6 pr-2 space-x-2">
              <a
                v-for="tag in post.tags"
                :key="tag.id"
                class="text-purple-800 bg-purple-200 px-2 ml-1 rounded-full text-xs hover:bg-purple-300"
                href="#"
                >{{ tag.title }}</a
              >
            </div>
            <div class="flex items-center text-gray-700">
              <nuxt-link :to="`/blog/${post.admin.username}`">
                <img
                  :src="`${$axios.defaults.baseURL}/image/${post.admin.profilePictureThumbnailUrl}`"
                  class="object-cover w-14 h-14 rounded-full shadow-sm text-sm mx-auto"
                  :alt="`عکس ${post.admin.name}`"
                />
              </nuxt-link>
              <div class="flex justify-between w-full items-end">
                <div class="mr-2">
                  <nuxt-link
                    class="text-sm font-semibold text-gray-800"
                    :to="`/blog/${post.admin.username}`"
                  >
                    {{ post.admin.name }}
                  </nuxt-link>
                  <p class="text-sm text-gray-500 mt-1">
                    {{ post.createdDateTime | moment('jYYYY/jMM/jDD') }}
                  </p>
                </div>
                <p
                  class="ml-2 mb-1 text-xs font-semibold tracking-wider text-gray-500"
                >
                  {{ post.category.title }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div
            class="font-wyekan bg-white shadow-md p-5 rounded-xl ck-content"
            dir="rtl"
            v-html="post.content"
          ></div>
        </div>
      </article>
      <blog-comment
        v-for="message in post.comment"
        :key="message.id"
        :message="message"
        class="mb-6"
      />
      <blog-insert-comment :article-id="post.id" :parent-id="id" />
    </div>
  </div>
</template>

<script>
import BlogComment from '~/components/BlogComment.vue'
import BlogInsertComment from '~/components/BlogInsertComment.vue'
export default {
  name: 'BlogPost',
  components: { BlogInsertComment, BlogComment },
  data() {
    return {
      post: null,
      id: null,
    }
  },
  async fetch() {
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/articles/getPost/${this.$route.params.id}`
    ).then((res) => res.json())
    this.post = data
  },
}
</script>
