<template>
  <div class="pb-8 control-btn">
    <VRow dense>
      <VCol style='flex-grow: 0'>
        <QueryBtn />
      </VCol>
      <VCol>
        <DownloadBtn />
      </VCol>
      <VCol align="end">
        <ResetQueryBtn />
      </VCol>
    </VRow>
  </div>
</template>

<script>
import QueryBtn from './buttons/QueryBtn.vue'
import DownloadBtn from './buttons/DownloadBtn.vue'
import ResetQueryBtn from './buttons/ResetQueryBtn.vue'

export default {
  name: 'ControlBtns',
  components: { QueryBtn, DownloadBtn, ResetQueryBtn }
}

</script>