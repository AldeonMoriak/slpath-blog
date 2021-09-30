<template>
  <div class="max-w-2xl mx-auto">
    <div v-if="$fetchState.pending" class="container px-4 py-14 mx-auto">
      <blog-post-skeleton
        class="w-full mx-auto mb-8 text-left md:w-3/4"
        dir="rtl"
      />
    </div>
    <div v-else class="w-full mx-auto font-vazir px-4">
      <article
        dir="rtl"
        class="container py-14 mx-auto"
        itemid="#"
        itemscope
        itemtype="http://schema.org/BlogPosting"
      >
        <div class="mb-8 mx-auto">
          <img
            :src="`https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${post.imageUrl}`"
            class="object-cover w-full h-64 bg-center rounded-t-lg"
            :alt="post.title"
          />
          <div class="bg-white rounded-b-xl py-0.5 pr-1 shadow-md">
            <h1
              class="
                mb-3
                mt-2
                text-lg
                font-bold
                leading-tight
                text-gray-900
                md:text-xl
              "
              itemprop="headline"
              :title="post.title"
            >
              {{ post.title }}
            </h1>
            <div class="flex mb-6 pr-2 space-x-2">
              <nuxt-link
                v-for="tag in post.tags"
                :key="tag.id"
                class="
                  text-purple-800
                  bg-purple-200
                  px-2
                  ml-1
                  rounded-full
                  text-sm
                  hover:bg-purple-300
                  max-h-12
                "
                :to="`/blog/tag/${tag.title}`"
                >{{ tag.title }}</nuxt-link
              >
            </div>
            <div class="flex items-center text-gray-700">
              <nuxt-link :to="`/blog/${post.admin.username}`">
                <img
                  :src="`https://kbodliatjlwcgvcbarwj.supabase.in/storage/v1/object/public/tani-images/${post.admin.profilePictureThumbnailUrl}`"
                  class="
                    object-cover
                    w-14
                    h-14
                    rounded-full
                    shadow-sm
                    text-sm
                    mx-auto
                  "
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
                  class="
                    ml-2
                    mb-1
                    text-xs
                    font-semibold
                    tracking-wider
                    text-gray-500
                  "
                >
                  {{ post.category ? post.category.title : '' }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div
            v-viewer.static
            class="
              font-vazir
              p-5
              prose prose-sm
              sm:prose
              lg:prose-lg
              xl:prose-xl
              rounded-xl
              ck-content
              mx-auto
              selection
              text-gray-700
            "
            dir="rtl"
            v-html="post.content"
          ></div>
        </div>
        <a
          v-if="post.referenceUrl"
          class="
            text-lg
            font-medium
            text-purple-500
            hover:text-purple-700
            bg-white
            block
            rounded-md
            shadow-sm
            py-5
            pr-5
            has-tooltip
          "
          :href="post.referenceUrl"
          target="_blank"
          >لینک مرجع
          <div dir="ltr" class="tooltip text-left">
            {{ url }}
          </div>
        </a>
      </article>
      <blog-comment
        v-for="message in post.comment"
        :key="message.id"
        :message="message"
        class="mb-6"
        @reply-clicked="replyHandler"
      />
      <blog-insert-comment
        id="insert"
        ref="insertComment"
        :article-id="post.id"
        :parent-id="id"
      />
    </div>
  </div>
</template>

<script>
import BlogComment from '~/components/BlogComment.vue'
import BlogInsertComment from '~/components/BlogInsertComment.vue'
import URLfix from '~/helpers/urlfix'
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
    this.$store.commit('enableLoading')
    const data = await fetch(
      `${this.$axios.defaults.baseURL}/articles/getPost/${this.$route.params.id}`
    )
      .then((res) => res.json())
      .finally(() => {
        this.$store.commit('disableLoading')
      })
    this.post = data
  },
  computed: {
    url() {
      return URLfix(this.post.referenceUrl)
    },
  },
  methods: {
    replyHandler(id) {
      this.$scrollTo('#insert')
      this.id = id
      this.$refs.insertComment.$refs.name.focus()
    },
  },
}
</script>
