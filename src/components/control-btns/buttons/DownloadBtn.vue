<template>
  <VMenu
    open-on-hover
    offset-y
    transition="slide-y-transition"
    bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <VBtn
        id="download-btn"
        color="success"
        class="white--text"
        v-bind="attrs"
        v-on="on"
      >
        Download
        <VIcon
          right
          dark
          v-text="'mdi-cloud-download'"
        />
      </VBtn>
    </template>
    <VCard
      class="mx-auto"
      max-width="500"
    >
      <VList>
        <VListItemGroup>
          <VListItem
            v-for="(format, i) in formats"
            :key="i"
            @click="downloadFile(format.name)"
            v-model="selectedFormat"
          >
            <VListItemIcon>
              <VIcon v-text="format.icon" />
            </VListItemIcon>
            <VListItemContent>
              <VListItemTitle v-text="format.name"></VListItemTitle>
            </VListItemContent>
          </VListItem>
        </VListItemGroup>
      </VList>
    </VCard>
  </VMenu>
</template>

<script>
import { mapState } from 'vuex'
import { downloadJsonInJson, downloadJsonInPdf, downloadJsonInCsv } from '../../../util/downloaders'

export default {
  name: 'DownloadBtn',
  data: () => ({
    formats: [{ 
      name: 'PDF', 
      icon: 'mdi-file-pdf-box'
    }, { 
      name: 'CSV', 
      icon: 'mdi-comma-box' 
    }, {
      name: 'JSON', 
      icon: 'mdi-code-braces-box' 
    }],
    selectedFormat: true
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

      this.selectedFormat = true
    }
  },
  computed: {
    ...mapState(['itemsToDisplay', 'headers'])
  }
}
</script>

<style>
  #download-btn {
    cursor: inherit;
  }
</style>