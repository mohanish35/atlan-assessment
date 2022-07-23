import Vue from 'vue'
import Vuex from 'vuex'

import { SET_ITEMS_TO_DISPLAY } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsToDisplay: []
  },
  getters: {
  },
  mutations: {
    [SET_ITEMS_TO_DISPLAY]: (state, items) => {
      state.itemsToDisplay = items
    }
  },
  actions: {
  },
  modules: {
  }
})
