<!-- comment form -->
<template>
  <div
    class="flex mx-auto items-center justify-center shadow-lg mb-4 border-b-8 border-purple-400 rounded-b-md font-vazir"
    dir="rtl"
  >
    <form class="w-full bg-white rounded-lg px-4 pt-2">
      <div class="flex flex-col mb-6">
        <!-- <h2 class="pt-3 pb-2 text-purple-600 text-lg">ایجاد نظر</h2> -->
        <div class="flex mt-5">
          <div class="w-full px-3 mb-2 mt-2">
            <input
              ref="name"
              v-model="name"
              :class="nameClass"
              class="bg-purple-50 rounded leading-normal resize-none w-full py-2 px-3 font-light text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 shadow-inner"
              name="body"
              placeholder="نام"
            />
          </div>
          <div class="w-full px-3 mb-2 mt-2">
            <input
              v-model="email"
              type="email"
              dir="rtl"
              class="bg-purple-50 rounded leading-normal resize-none w-full py-2 px-3 font-light text-base text-gray-700 appearance-none placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 shadow-inner"
              name="body"
              placeholder="ایمیل"
            />
          </div>
        </div>
        <div class="w-full md:w-full px-3 mb-2 mt-2">
          <textarea
            v-model="content"
            :class="contentClass"
            class="bg-purple-50 rounded leading-normal resize-none w-full h-20 py-2 px-3 font-light text-base text-gray-700 placeholder-gray-400 appearance-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 shadow-inner"
            name="body"
            placeholder="چیزی بنویسید..."
          ></textarea>
          <div
            :class="
              content.length > 300
                ? 'text-red-500 text-left'
                : 'text-purple-500 text-left'
            "
          >
            {{ content.length }}
          </div>
        </div>

        <div class="w-full flex items-start md:w-full px-3">
          <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
          <div class="-mr-1">
            <input
              type="submit"
              class="bg-purple-200 text-purple-800 font-medium py-1 px-4 border rounded-lg tracking-wide mr-1 hover:bg-purple-300 focus:border-purple-600 h-10 mt-2 cursor-pointer"
              value="ثبت نظر"
              @click.prevent="insertComment"
            />
          </div>
        </div>
      </div>
    </form>
    <alert v-if="show" :type="type" :message="message" />
  </div>
</template>

<script>
import Alert from './Alert.vue'
export default {
  components: { Alert },
  props: {
    parentId: {
      type: Number,
      default: 0,
    },
    articleId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      name: '',
      content: '',
      email: '',
      message: '',
      type: '',
      show: false,
      nameClass: '',
      contentClass: '',
    }
  },
  methods: {
    async insertComment() {
      this.nameClass = !this.name ? 'ring-2 ring-red-600' : ''
      this.contentClass =
        !this.content || this.content.length > 300 ? 'ring-2 ring-red-600' : ''

      if (this.content.length > 300) {
        this.type = 'error'
        this.show = true
        this.message = 'تعداد مجاز کاراکترهای نظر ۳۰۰ می باشد'
        setTimeout(() => {
          this.message = ''
          this.type = ''
          this.show = false
        }, 4000)
      }
      if (!this.name || !this.content || this.content.length > 300) return
      await this.$axios
        .$post('/comments/insertComment', {
          name: this.name,
          email: this.email ? this.email : null,
          content: this.content,
          parentId: this.parentId,
          articleId: this.articleId,
        })
        .then((res) => {
          this.message = res.message
          this.type = 'success'
          this.show = true
          this.name = ''
          this.content = ''
          this.email = ''
          setTimeout(() => {
            this.message = ''
            this.type = ''
            this.show = false
          }, 4000)
        })
        .catch((err) => {
          err.message.forEach((msg, index) => {
            this.message = this.message ? this.message + '، ' : '' + msg
          })
          this.type = 'error'
          this.show = true
          setTimeout(() => {
            this.message = ''
            this.type = ''
            this.show = false
          }, 4000)
        })
    },
  },
}
</script>
