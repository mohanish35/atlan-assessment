<template>
  <VRow dense>
    <VCol class='control-col'>
      <FireHistoricalQuery 
        :query-text="query.text" 
        @fire-query="$emit('fire-query')" 
      />
    </VCol>
    <VCol class='control-col'>
      <CopyHistoricalQuery :query-text="query.text" />
    </VCol>
    <VCol class='control-col'>
      <DeleteHistoricalQuery :query="query" />
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
  props: {
    query: {
      default: {}
    }
  }
}
</script>

<style>
  .control-col {
    flex-grow: 0
  }
</style>