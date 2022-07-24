import Vue from 'vue'
import Vuex from 'vuex'

import { SET_ITEMS } from './mutation-types'
import { extractHeadersFromJson } from '../util/parsers'
import pokemonJsonData from '../assets/data-source/pokemon'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemsToDisplay: [],
    items: [],
    headers: []
  },
  getters: {
  },
  mutations: {
    [SET_ITEMS]: (state, { items, areDefaultItems = false }) => {
      state.itemsToDisplay = items

      if (areDefaultItems) { 
        state.items = items
        state.headers = extractHeadersFromJson(items)
      }
    }
  },
  actions: {
    setRandomItems ({ commit, state }) {
      const resultantItems = []
      
      state.items.forEach(item => {
        // get random boolean value
        const pushToResult = Math.random() > 0.5

        if (pushToResult) {
          resultantItems.push(item)
        }
      })

      commit(SET_ITEMS, { items: resultantItems })
    }
  },
  modules: {
  }
})

store.commit(SET_ITEMS, { items: pokemonJsonData, areDefaultItems: true })

export default store
