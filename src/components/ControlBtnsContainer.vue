<template>
  <div class="pb-8 control-btn">
    <VRow dense>
      <VCol style='flex-grow: 0'>
        <QueryBtn />
      </VCol>
      <VCol style='flex-grow: 0'>
        <DownloadBtn />
      </VCol>
      <VCol>
        <ShowHistoryBtn />
      </VCol>
      <VCol align="end">
        <ResetQueryBtn />
      </VCol>
    </VRow>
  </div>
</template>

<script>
import QueryBtn from './control-btns/QueryBtn.vue'
import DownloadBtn from './control-btns/DownloadBtn.vue'
import ResetQueryBtn from './control-btns/ResetQueryBtn.vue'
import ShowHistoryBtn from './control-btns/ShowHistoryBtn.vue'

export default {
  name: 'ControlBtnsContainer',
  components: { 
    QueryBtn, 
    DownloadBtn, 
    ResetQueryBtn, 
    ShowHistoryBtn 
  }
}

</script>