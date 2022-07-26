<template>
  <VRow dense>
    <VCol class='control-col'>
      <FireHistoricalQuery 
        :query-text="query.text" 
        @fire-query="fireQuery" 
        data-testid="fire-historical-query"
      />
    </VCol>
    <VCol class='control-col'>
      <CopyHistoricalQuery
        data-testid="copy-historical-query"
        @query-copied="$emit('query-copied')" 
        :query-text="query.text" 
      />
    </VCol>
    <VCol class='control-col'>
      <DeleteHistoricalQuery
        data-testid="delete-historical-query"
        :query="query" 
      />
    </VCol>
  </VRow>
</template>

<script>
import FireHistoricalQuery from "./history-actions/FireHistoricalQuery.vue";
import CopyHistoricalQuery from "./history-actions/CopyHistoricalQuery.vue";
import DeleteHistoricalQuery from "./history-actions/DeleteHistoricalQuery.vue";

export default {
  name: "HistoryActionsContainer",
  components: { FireHistoricalQuery, CopyHistoricalQuery, DeleteHistoricalQuery },
  methods: {
    fireQuery () {
      this.$emit('fire-query')
    }
  },
  props: {
    query: {
      default: () => ({})
    }
  }
}
</script>

<style>
  .control-col {
    flex-grow: 0
  }
</style>