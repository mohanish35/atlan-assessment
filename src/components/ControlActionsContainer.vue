<template>
  <div class="pb-8 control-btn">
    <VRow dense>
      <VCol style='flex-grow: 0'>
        <NewQuery data-testid="new-query" />
      </VCol>
      <VCol style='flex-grow: 0'>
        <DownloadTable data-testid="download-table" />
      </VCol>
      <VCol>
        <ShowHistory data-testid="show-history" />
      </VCol>
      <VCol align="end">
        <ResetQuery data-testid="reset-query" />
      </VCol>
    </VRow>
  </div>
</template>

<script>
import NewQuery from './control-actions/NewQuery.vue'
import DownloadTable from './control-actions/DownloadTable.vue'
import ResetQuery from './control-actions/ResetQuery.vue'
import ShowHistory from './control-actions/ShowHistory.vue'

export default {
  name: 'ControlActionsContainer',
  components: { 
    NewQuery, 
    DownloadTable, 
    ResetQuery, 
    ShowHistory 
  }
}

</script>