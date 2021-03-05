<template>
  <div
    class="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md"
  >
    <nuxt-link :to="post.link" aria-label="Article"
      ><img
        :src="post.image"
        class="object-cover w-full h-64 rounded-t"
        :alt="post.title"
      />
    </nuxt-link>
    <div class="py-5 px-4">
      <div class="flex justify-between">
        <nuxt-link
          :to="post.link"
          aria-label="Article"
          class="inline-block mb-3 text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          ><p class="text-xl font-bold leading-5">
            {{ post.title }}
          </p></nuxt-link
        >
        <p class="mb-2 text-xs font-semibold text-gray-500 uppercase">
          {{ post.date | moment('jYYYY/jMM/jDD') }}
        </p>
      </div>
      <p class="mb-4 text-gray-700 line-clamp-3">
        {{ post.excerpt }}
      </p>
      <div class="flex items-center mb-4">
        <nuxt-link :to="post.author.link">
          <img
            :src="post.author.image"
            alt="آواتار"
            class="m-0 object-cover w-10 h-10 rounded-full shadow-sm ml-4"
          />
        </nuxt-link>
        <span>
          <nuxt-link
            :to="post.author.link"
            aria-label="نویسنده"
            title="نویسنده"
            class="font-semibold text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >{{ post.author.name }}</nuxt-link
          >
          <p class="text-sm font-medium leading-4 text-gray-500">نویسنده</p>
        </span>
      </div>

      <div class="flex justify-end">
        <div
          aria-label="Views"
          class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group ml-4"
        >
          <p class="font-semibold">{{ post.views }}</p>
          <div class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-linecap="round"
              fill="none"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
            >
              <!-- <polyline
                points="6 23 1 23 1 12 6 12"
                fill="none"
                stroke-miterlimit="10"
              ></polyline> -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
              <!-- <path
                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              ></path> -->
            </svg>
          </div>
        </div>
        <div
          aria-label="Comments"
          class="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
        >
          <p class="font-semibold">{{ post.comments }}</p>
          <div class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
            >
              <polyline
                points="23 5 23 18 19 18 19 22 13 18 12 18"
                fill="none"
                stroke-miterlimit="10"
              ></polyline>
              <polygon
                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              ></polygon>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {
          link: '/',
          views: 0,
          comments: 0,
          title: 'Post Title',
          image:
            'https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500',
          date: '20 Dec 2020',
          excerpt:
            'The Excerpt of the blog post goes here...The Excerpt of the blog post goes here...The Excerpt of the blog post goes here...The Excerpt of the blog post goes here...The Excerpt of the blog post goes here...The Excerpt of the blog post goes here...The Excerpt of the blog post goes here',
          author: {
            link: '/',
            name: 'Aldeon Moriak',
            image:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
          },
        }
      },
    },
  },
}
</script>
