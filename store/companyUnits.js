export const state = () => ({
  list: [],
  isLoading: false
})

export const getters = {
  companyUnits(state) {
    return state.list
  },
  isLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  SET(state, result) {
    state.list = result
  }
}

export const actions = {
  async GET({ commit }) {
    await this.$axios.get('/api/company_units').then(res => {
      commit('SET', res.data)
    })
  }
}
