export default {
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    hasFetchedAllData() {
      return this.page === this.totalPages + 1
    },
    totalPages() {
      return Math.ceil(this.totalCount / this.limit)
    },
  },
  methods: {
    async handleScroll() {
      if (!this.hasFetchedAllData) {
        if (
          Math.ceil(window.innerHeight + window.scrollY) >=
          document.body.scrollHeight
        ) {
          this.isLoading = true

          await this.fetchData()

          this.isLoading = false
        }
      }
    },
  },
  // this will register the event when the component is mounted on the DOM
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  // We then unregister the listener when the component is removed from the DOM
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
