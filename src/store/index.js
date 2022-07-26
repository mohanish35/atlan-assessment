import Vue from "vue"
import Vuex from "vuex"

import {
  saveQueryToLocalStorage,
  deleteQueryFromLocalStorage,
} from "../util/localStorage"
import {
  SET_ITEMS,
  TOGGLE_QUERY_APPLIED,
  SYNC_QUERY_HISTORY,
} from "./mutation-types"
import { extractHeadersFromJson } from "../util/parsers"
import { getQueryHistoryFromLocalStorage } from "../util/localStorage"
import pokemonJsonData from "../assets/data-source/pokemon"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    itemsToDisplay: [],
    items: [],
    headers: [],
    queryApplied: false,
    queryHistory: [],
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
    },
    [SYNC_QUERY_HISTORY]: (state, { queryHistory = getQueryHistoryFromLocalStorage() }) => {
      state.queryHistory = queryHistory
    },
  },
  actions: {
    applyQuery({ dispatch, state, commit }, { query }) {
      saveQueryToLocalStorage(query)
      dispatch("setRandomItems")

      if (!state.queryApplied)
        commit(TOGGLE_QUERY_APPLIED)
      
      commit(SYNC_QUERY_HISTORY, {})
    },
    resetAppliedQuery({ commit, state }) {
      commit(TOGGLE_QUERY_APPLIED)
      commit(SET_ITEMS, { items: state.items })
    },
    deleteQueryFromHistory({ commit }, { id }) {
      deleteQueryFromLocalStorage(id)
      commit(SYNC_QUERY_HISTORY, {})
    },
    setRandomItems({ commit, state }) {
      const resultantItems = []

      state.items.forEach((item) => {
        // get random boolean value
        const pushToResult = Math.random() > 0.5

        if (pushToResult) {
          resultantItems.push(item)
        }
      })

      commit(SET_ITEMS, { items: resultantItems })
    },
  },
})



store.commit(SET_ITEMS, { items: pokemonJsonData, areDefaultItems: true })
store.commit(SYNC_QUERY_HISTORY, {})

export default store
