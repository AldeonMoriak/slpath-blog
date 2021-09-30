export default {
  data() {
    return {
      index: 0,
      lastIndex: 0,
      progressInterval: 0,
      width: 'w-0',
      widthIndex: 0,
      widthList: [
        'w-0',
        'w-1/6',
        'w-2/6',
        'w-3/6',
        'w-4/6',
        'w-5/6',
        'w-full',
        'w-screen',
      ],
      pause: false,
    }
  },
  watch: {
    width(val) {
      if (val === this.widthList[this.widthList.length - 1]) {
        this.next()
      }
    },
  },
  mounted() {
    this.progressBarIndicator()
  },
  beforeDestroy() {
    this.clearBarInterval()
  },
  computed: {
    secondOne() {
      return this.index === this.lastIndex ? 0 : this.index + 1
    },
    thirdOne() {
      if (this.lastIndex === 0) return 0
      return this.index === this.lastIndex
        ? 1
        : this.index + 1 === this.lastIndex
        ? 0
        : this.index + 2
    },
  },
  methods: {
    doubleNext() {
      this.next()
      this.next()
    },
    next() {
      this.clearBarInterval()
      this.index = this.index === this.lastIndex ? 0 : this.index + 1
      this.width = 'w-0'
      this.progressBarIndicator()
    },
    previous() {
      this.clearBarInterval()
      this.index = this.index === 0 ? this.lastIndex : this.index - 1
      this.width = 'w-0'
      this.progressBarIndicator()
    },
    pauseHandler() {
      this.pause = true
    },
    continueInterval() {
      this.pause = false
    },
    progressBarIndicator() {
      this.widthIndex = 1
      this.progressInterval = setInterval(() => {
        if (!this.pause) {
          this.width = this.widthList[this.widthIndex]
          this.widthIndex++
          if (this.width === this.widthList[this.widthList.length - 1]) {
            this.clearBarInterval()
          }
        }
      }, 900)
    },
    clearBarInterval() {
      clearInterval(this.progressInterval)
    },
  },
}
