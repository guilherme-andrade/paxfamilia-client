export const state = () => ({
  sections: [
    {
      columns: []
    }
  ],
  isLoading: false
})

export const getters = {
  get(state) {
    return state
  },
  isLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  UPDATE(state, result) {
    state = result
  },
  UPDATE_SECTION(state, { value, index }) {
    state.sections[index].columns = value
  },
  UPDATE_COLUMN(state, { value, sectionIndex, columnIndex }) {
    state.sections[sectionIndex].columns[columnIndex].type = value
  },
  ADD_SECTION(state) {
    state.sections.push({ columns: [] })
  },
  ADD_COLUMNS(state, { sectionIndex, number }) {
    let i
    for (i = 0; i < number; i++) {
      state.sections[sectionIndex].columns.push({
        type: '(drop a widget here)',
        data: [],
        width: 100 / number
      })
    }
  }
}

// export const actions = {
//   async GET({ commit }) {
//     await this.$axios.get('/api/company_units').then(res => {
//       commit('SET', res.data)
//     })
//   }
// }
