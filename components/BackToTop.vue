<template>
  <transition name="back-to-top-fade">
    <button
      v-show="visible"
      class="fixed left-6 bottom-3 uppercase p-3 flex items-center bg-purple-500 text-purple-100 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
      @click="backToTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        width="3rem"
        height="3rem"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    visibleoffset: {
      type: [String, Number],
      default: 200,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
    scrollFn: {
      type: Function,
      default(eventObject) {},
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.smoothscroll = () => {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
      const pastBottomOffset =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
      this.visible =
        parseInt(this.visibleoffsetbottom) > 0
          ? pastTopOffset && !pastBottomOffset
          : pastTopOffset
      this.scrollFn(this)
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop() {
      window.smoothscroll()
      this.$emit('scrolled')
    },
  },
}
</script>
