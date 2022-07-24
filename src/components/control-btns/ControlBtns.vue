<template>
  <div>
    <QueryBtn />
    <DownloadBtn />
  </div>
</template>

<script>
import QueryBtn from './buttons/QueryBtn.vue'
import DownloadBtn from './buttons/DownloadBtn.vue'

export default {
  name: 'ControlBtns',
  components: { QueryBtn, DownloadBtn }
}

</script>