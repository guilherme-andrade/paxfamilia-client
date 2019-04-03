export const state = () => ({
  lists: [
    {
      cards: [
        {
          data: {
            name: 'something1'
          }
        },
        {
          data: {
            name: 'something2'
          }
        },
        {
          data: {
            name: 'something3'
          }
        },
        {
          data: {
            name: 'something4'
          }
        }
      ]
    },
    {
      cards: [
        {
          data: {
            name: 'something5'
          }
        },
        {
          data: {
            name: 'something6'
          }
        },
        {
          data: {
            name: 'something7'
          }
        },
        {
          data: {
            name: 'something8'
          }
        }
      ]
    },
    {
      cards: [
        {
          data: {
            name: 'something9'
          }
        },
        {
          data: {
            name: 'something10'
          }
        },
        {
          data: {
            name: 'something11'
          }
        }
      ]
    }
  ],
  isLoading: false
})

export const getters = {
  lists(state) {
    return state.lists
  },
  card(state, listIndex, cardIndex) {
    return state.lists[listIndex].list[cardIndex]
  },
  isLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  SET(state, result) {
    state.lists = result
  },
  UPDATE_LIST(state, { index, list }) {
    // eslint-disable-next-line
    state.lists[index].cards = list
  }
}

// export const actions = {
//   async GET({ commit }) {
//     await this.$axios.get('/api/company_units').then(res => {
//       commit('SET', res.data)
//     })
//   }
// }
