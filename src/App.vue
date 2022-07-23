<template>
  <VApp>
    <VAppBar
      app
      color="primary"
      dark
    />
    <VMain>
      <VContainer >
        <VBtn
          color="success"
          class="ma-2 white--text"
          @click="downloadFile"
        >
          Download
          <VIcon
            right
            dark
          >
            mdi-cloud-download
          </VIcon>
        </VBtn>
        <DataTable />
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import DataTable from '../src/components/data-table.vue'

export default {
  name: 'App',
  methods: {
    downloadFile () {
      console.log("Error")
    }
  },
  components: { DataTable }
};
</script>
