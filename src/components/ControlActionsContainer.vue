<template>
  <div class="pb-8 control-btn">
    <VRow dense>
      <VCol style='flex-grow: 0'>
        <NewQuery />
      </VCol>
      <VCol style='flex-grow: 0'>
        <DownloadTable />
      </VCol>
      <VCol>
        <ShowHistory />
      </VCol>
      <VCol align="end">
        <ResetQuery />
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