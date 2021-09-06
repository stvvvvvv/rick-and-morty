import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: {}
  },
  mutations: {
    SET_CHARACTERS: (state, characters) => {
      state.characters = characters
    }
  },
  actions: {
    GET_CHARACTERS ({ commit }) {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then((response) => {
          commit('SET_CHARACTERS', response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  getters: {
    CHARACTERS (state) {
      return state.characters
    }
  }
})
