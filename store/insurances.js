export const state = () => ({
  list: [],
  isLoading: false
})

export const getters = {
  insurances(state) {
    return state.list
  },
  isLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  set(state, result) {
    state.list = result
  }
}
