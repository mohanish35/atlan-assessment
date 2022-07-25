import ls from "local-storage"
import { getCurrentDateTime, getCurrentDateTimeUtc } from "./timeHelpers"

const QUERY_HISTORY = "query-history"

export const saveQueryToLocalStorage = (query) => {
  const queryHistory = getQueryHistoryFromLocalStorage()

  queryHistory.unshift({
    text: query,
    executedAt: getCurrentDateTime(),
    id: getCurrentDateTimeUtc(),
  })

  ls(QUERY_HISTORY, JSON.stringify(queryHistory))
}

export const getQueryHistoryFromLocalStorage = () => {
  const stringifiedQueryHistory = ls(QUERY_HISTORY)

  return stringifiedQueryHistory ? JSON.parse(stringifiedQueryHistory) : []
}

export const deleteQueryFromLocalStorage = (id) => {
  const queryHistory = getQueryHistoryFromLocalStorage()

  const queryIdx = queryHistory.findIndex((query) => query.id === id)

  if (queryIdx > -1) {
    queryHistory.splice(queryIdx, 1)
  }

  ls(QUERY_HISTORY, JSON.stringify(queryHistory))
}
