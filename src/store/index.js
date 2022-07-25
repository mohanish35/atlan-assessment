import Vue from 'vue'
import Vuex from 'vuex'

import { SET_ITEMS, TOGGLE_QUERY_APPLIED } from './mutation-types'
import { extractHeadersFromJson } from '../util/parsers'
import pokemonJsonData from '../assets/data-source/pokemon'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemsToDisplay: [],
    items: [],
    headers: [],
    queryApplied: false
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
    },
    [TOGGLE_QUERY_APPLIED]: (state) => {
      state.queryApplied = !state.queryApplied
    }
  },
  actions: {
    applyQuery({ dispatch, commit }) {
      dispatch('setRandomItems')
      commit('TOGGLE_QUERY_APPLIED')
    },
    resetQuery ({ commit, state }) {
      commit('TOGGLE_QUERY_APPLIED')
      commit('SET_ITEMS', { items: state.items })
    },
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
  }
})

store.commit(SET_ITEMS, { items: pokemonJsonData, areDefaultItems: true })

export default store
