<template>
  <VCard>
    <VCardTitle>
      <VRow>
        <VCol>
          Pokemon
        </VCol>
        <VCol class="col-3">
          <VSpacer />
          <VTextField
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </VCol>
      </VRow>
    </VCardTitle>
    <VDataTable
      :headers="getHeadersWithFilterRestrictions"
      :items="itemsToDisplay"
      :items-per-page="10"
      class="elevation-1"
      :search="search"
    />
  </VCard>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DataTable',
  data: () => ({
    search: '',
    filterableHeaders: ['Name', 'Type 1', 'Type 2']
  }),
  computed:{
    getHeadersWithFilterRestrictions () {
      return this.headers.map(header => {
        if (!this.filterableHeaders.includes(header.value)) {
          header.filterable = false
        }

        return header
      })
    },
    ...mapState(['itemsToDisplay', 'headers']),
  }
}
</script>