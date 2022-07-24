<template>
  <VMenu
    open-on-hover
    offset-y
    transition="slide-y-transition"
    bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <VBtn
        color="success"
        class="ma-2 white--text"
        v-bind="attrs"
        v-on="on"
      >
        Download
        <VIcon
          right
          dark
        >
          mdi-cloud-download
        </VIcon>
      </VBtn>
    </template>

    <VList>
      <VListItem
        v-for="(format, index) in formats"
        :key="index"
      >
        <VListItemTitle 
          @click="downloadFile(format)"
        >
          {{ format }}
        </VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>

<script>
import { mapState } from 'vuex'
import { downloadJsonInJson, downloadJsonInPdf, downloadJsonInCsv } from '../../../util/downloaders'

export default {
  name: 'DownloadBtn',
  data: () => ({
      formats: ['PDF', 'CSV', 'JSON'],
  }),
  methods: {
    downloadFile (format) {
      switch (format) {
        case 'PDF':
          downloadJsonInPdf(this.itemsToDisplay, this.headers)
          break
        case 'CSV':
          downloadJsonInCsv(this.itemsToDisplay)
          break
        case 'JSON':
          downloadJsonInJson(this.itemsToDisplay)
      }
    }
  },
  computed: {
    ...mapState(['itemsToDisplay', 'headers'])
  }
}
</script>