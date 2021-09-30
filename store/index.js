export const state = () => ({
  isLoading: false,
})

export const mutations = {
  disableLoading(state) {
    state.isLoading = false
  },
  enableLoading(state) {
    state.isLoading = true
  },
}
